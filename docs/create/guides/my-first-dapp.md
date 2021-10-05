---
sidebar_position: 1
---

# Creating Your First dApp

## Starting out

In the [Setup](../getting-started/setup.md) section we learned how to create and configure a new Archway project. If you haven't created a project yet, go there now [(link)](../getting-started/setup.md) to complete this step.

Source code templates cloned with `archway new` are ready-made starter projects. 

Later we'll want add our own code and features, and modify existing behavior, but to get acquainted let's go ahead and build and test the boilerplate code we have right now.


## Building and running tests

Build your project using the command: 
```bash
archway build
```

Example output:
```bash
Building project...

  Updating crates.io index
  Compiling libc v0.2.99
  Compiling typenum v1.13.0
  # And so on until ...
  Compiling my-project v0.1.0 (/home/my-system-path/my-project)
    Finished dev [unoptimized + debuginfo] target(s) in 31.42s
```

Now we can test our build like this:
```
archway test
```
Example output:
```bash
Loading tests...

   Compiling cosmwasm-schema v0.16.0
   Compiling my-project v0.1.0 (/home/my-system-path/my-project)
    Finished test [unoptimized + debuginfo] target(s) in 1.79s
     Running target/debug/deps/my-project-713283db92dd8501

running 3 tests
test contract::tests::proper_initialization ... ok
test contract::tests::increment ... ok
test contract::tests::reset ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

**Note: Output of tests may differ a bit according to which starter code template used during project createion, or if you modified the unit tests from source.**

## Requesting Testnet funds
Assuming you're working on a testnet, you'll probably want some testnet `ARC` for paying gas costs when it comes time to deploy your dApp contracts on chain.

Setting up a new project with `archway new`, and choosing a testnet, bootstraps all configuration parameters you'll need to request testnet funds for both the `stable [constantine]` and `nightly [titus]` testnets.

## Producing Wasm executables

Since we've tested and built our contract, we're operating under the assumption everything works. 

However, to test our dApp on Archway we'll need to build it as a `wasm` executable, and upload and instantiated it on chain.

Note there are 2 types of `wasm` binaries that can be produced by the Developer CLI. It would be tempting to call them _"unoptimized"_ and _"optimized"_ `wasm`, and while there's a sense in which that's true, it's a bit misleading. So we'll call them _"default"_ and _"cosmwasm"_. 

### Default Wasm executables
This is a regular `wasm` binary. It's the same as you'd get by running the Rust native command `cargo wasm`. 

_Default_ `wasm` executables can be produced by the developer CLI using the command:
```bash
archway deploy --dryrun
```

Example output:
```bash
Building wasm executable...

  Compiling proc-macro2 v1.0.28
  Compiling unicode-xid v0.2.2
  # And so on until ...
  Compiling my-project v0.1.0 (/home/my-system-path/my-project)
    Finished release [optimized] target(s) in 27.78s
```

**Note: use `archway deploy --dryrun` before doing an actual deployment. This helps to gauge whether the deployment will succeed. This is useful because of speed, as running `archway deploy` with `--dryrun` enabled is a lot faster.**

### CosmWasm Wasm executables

CosmWasm executables are also optimized release targets, but they're optimized using the `cosmwasm/rust-optimizer` which produces a  smaller executable size. 

If you're coming from a C++ background, you can think of this process like building your executable with [UPX](https://upx.github.io/), since `cosmwasm/rust-optimizer` compresses the binary in a similar manner to produce smaller build outputs.

Producing CosmWasm executables is part of the deploy process and can be accessed by running the deploy command without the `--dryrun` flag.

**Note: the Developer CLI currently only supports the Docker version of `cosmwasm/rust-optimizer`. The deploy process will fail and exit if Docker has not been started.**

## Deploying your dApp on chain

When you're ready to deploy an on chain build we can start Docker (if not already running) and use the `archway deploy` command.
```bash
sudo service docker start
archway deploy
```

To skip the CLI asking you to provide any default values required by your dApp, include constructor arguments using the `--args` parameter when you call the command. Format your constructor parameters as a `JSON` encoded string.
```bash
archway deploy --args '{"my_key":"my value"}'
```

**Hint: if you cloned the 'Increment' starter template, try deploying with your `counter` argument set to `0`; e.g. `archway deploy --args '{"count":0}'`**

[XXX TODO: put a video here in place of output]

`archway deploy` is a developer super command that produces huge output. Since we're running the command without `--dryrun`

It doesn't make sense to list all of that output here, instead let's look at a step-by-step anatomy of what the command does. There are 5 steps in total.

1. **MAKE WASM** - _Produces `wasm` executable optimized and compressed with `cosmwasm/rust-optimizer`_
2. **CREATE ON CHAIN WASM** - _Uploads `wasm` executable on chain_
3. **VERIFY UPLOAD INTEGRITY** - _Downloads the uploaded `wasm` and verifies on chain version matches checksum of local build_
4. **INSTANTIATE CONTRACT** - _Creates an instance of the uploaded contract_
5. **STORE DEPLOYMENT LOG** - _Creates log entries for steps 2 (upload) and 4 (instantiation) in `config.json`_

If you suceeded in deploying you'll now be able to query and transact with your dApp. 

But if you're unsure or suspect something may have gone wrong, check your deployments history using the `archway history` command. Or, by opening `config.json` at the root of the project and looking at the `deployments` array. 

In your history you'll see 2 transactions were created: the `create` transaction from when it was uploaded on chain; and, the `instantiate` transaction which made an on chain instance that can queried and transacted with.

```bash
archway history
```

Example output:
```bash
Printing deployments...

[
  {
    type: 'instatiate',
    address: 'wasm1rfa3scumm5y2lt6jku49hg52y2tk06pnsm9p6w',
    chainId: 'pebblenet-1',
    data: '{...}'
  },
  {
    type: 'create',
    codeId: '84',
    chainId: 'pebblenet-1',
    data: '{...}'
  }
]
```

## Interacting with your dApp