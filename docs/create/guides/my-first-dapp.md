---
sidebar_position: 1
---

# Creating Your First dApp

## Starting out

In the [Setup](../getting-started/setup.md) section we learned how to create and configure a new Archway project. 

If you haven't created a project yet (or didn't choose the 'Increment' starter template) go there now [(link)](../getting-started/setup.md) to complete this step. 

Source code templates cloned with `archway new` are ready-made starter projects. 

Later we'll add code and modify existing behavior, but to get acquainted let's build and test the boilerplate code we have now.


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

Test your build like this:
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

## Requesting Testnet funds
If you're working on a testnet you'll want testnet `ARC` for paying gas costs to deploy your dApp code on chain.

Setting up a new project with `archway new` and choosing a testnet bootstraps all configuration parameters you'll need to request  funds for both `stable [constantine]` and `nightly [titus]` testnets.

Request funds using the command:
```bash
archway faucet
```

Example output:
```bash
Enter an address to receive Testnet funds (e.g. "wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv"; Or, hit <enter> to list accounts): wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv
Requesting faucet funds to account wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv...

Welcome to the faucet!

Check the full status via the /status endpoint.
You can get tokens from here by POSTing to /credit.
See https://github.com/cosmos/cosmjs/tree/main/packages/faucet for all further information.

Successfully requested funds to wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv on network pebblenet-1 using faucet https://faucet.pebblenet.cosmwasm.com
```

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

### CosmWasm executables

CosmWasm executables are also optimized release targets, but they're optimized using the `cosmwasm/rust-optimizer` which produces a  smaller executable size. 

If you're coming from a C++ background, you can think of this process like building your executable with [UPX](https://upx.github.io/), since `cosmwasm/rust-optimizer` compresses the binary in a similar manner to produce smaller build outputs.

Producing CosmWasm executables is part of the deploy process and can be accessed by running the deploy command without the `--dryrun` flag.

**Note: the Developer CLI currently only supports the Docker version of `cosmwasm/rust-optimizer`. The deploy process will fail and exit if Docker has not been started (Support for native `cosmwasm/rust-optimizer` bins coming soon).**

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

If you cloned the 'Increment' starter template, try deploying with your `counter` argument set to `0`; e.g. `archway deploy --args '{"count":0}'`

If you didn't deploy with `--args`, you'll need to enter that information into the CLI anyway, but why is the constructor `{"count":0}` and how can we verify it? 

Open `src/contract.rs`, near the top you'll see `pub fn instatiate` which sets state in the contract at instatiation:
```javascript
let state = State {
  count: msg.count, // Here's our count declaration
  owner: info.sender.clone(), // Contract owner is wallet that sent tx
};
```

<!-- XXX TODO: put a video here in place of output -->

`archway deploy` is a developer super command that produces huge output. Since we're running the command without `--dryrun`

It doesn't make sense to list all of that output here, instead let's look at a step-by-step anatomy of what the command does. There are 5 steps in total.

1. **MAKE WASM** - _Produces `wasm` executable optimized and compressed with `cosmwasm/rust-optimizer`_
2. **CREATE ON CHAIN WASM** - _Uploads `wasm` executable on chain_
3. **VERIFY UPLOAD INTEGRITY** - _Downloads the uploaded `wasm` and verifies on chain version matches checksum of local build_
4. **INSTANTIATE CONTRACT** - _Creates an instance of the uploaded contract_
5. **STORE DEPLOYMENT LOG** - _Creates log entries for steps 2 (upload) and 4 (instantiation) in `config.json`_

If you suceeded in deploying you'll now be able to query and transact with your dApp, but if you're unsure or suspect something may have gone wrong, check your deployments history using the `archway history` command. Or, by opening `config.json` at the root of the project and looking at the `deployments` array. 

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

Now it's possible to query and transact with your deployed instance. 

### Querying

Queries read from the blockchain. They don't modify anything stored on chain so they don't cost a fee.

There are several types of queries we could do, but a common type we're interested in is `contract-state`, which we'll call in `smart` mode. This lets us run queries with arguments, as opposed to dumping the entire contract data.

If we query the `count` before modifying any state, we get the value we set during deployment instatiation:

```bash
archway query contract-state smart --args '{"get_count": {}}'
```

Outputs:
```bash
Attempting query...

{"data":{"count":0}}

Ok!
```

Why was the query argument `'{"get_count": {}}'`?

If we open `src/contract.rs` and inspect `pub fn query` we'll see the case matching statement that matches our JSON query:
```javascript
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
  match msg {
      QueryMsg::GetCount {} => to_binary(&query_count(deps)?), // Here it is
  }
}
```

**Note: `QueryMsg` is an `enum` with the `GetCount` property. It's good to be aware of the format here, as the enum attribute is uppercase without spaces in Rust, but lowercase with snake case when converted to JSON arguments.**

### Transacting

Transactions write to the blockchain and cost gas a fee for modifying a contract's state securely.

By default gas estimatation mode is `auto`, but you've got granular control. To modify gas settings edit the `gas` values inside the `network` object of your `config.json`. However, for most cases the default gas settings are preferable.

To increment our counter value, we'll be executing a transaction that calls `pub fn try_increment` in `src/contract.rs`. This function is already public, but executing a transaction is handled by `pub fn execute` in `src/contract.rs` which does case matching to call `try_increment`.

Send an Increment transaction:
```bash
archway tx --args '{"increment":{}}'
```

Example output:
```bash
Attempting transaction...

Send tx from which wallet in your keychain? (e.g. "main" or crtl+c to quit): my-wallet
Enter keyring passphrase:
gas estimate: 115945
{"body":{"messages":[{"@type":"/cosmwasm.wasm.v1.MsgExecuteContract","sender":"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a","contract":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d","msg":"eyJpbmNyZW1lbnQiOnt9fQ==","funds":[]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[{"denom":"upebble","amount":"116"}],"gas_limit":"115945","payer":"","granter":""}},"signatures":[]}

confirm transaction before signing and broadcasting [y/N]: y
{"height":"689581","txhash":"FE6CA15FB3B8295A7FFC0AA3FC307E6FE31E2AB606EB58774C2668CC1CACF6E8","data":"0A090A0765786563757465","raw_log":"[{\"events\":[{\"type\":\"execute\",\"attributes\":[{\"key\":\"_contract_address\",\"value\":\"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"execute\"},{\"key\":\"module\",\"value\":\"wasm\"},{\"key\":\"sender\",\"value\":\"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a\"}]},{\"type\":\"wasm\",\"attributes\":[{\"key\":\"_contract_address\",\"value\":\"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d\"},{\"key\":\"method\",\"value\":\"try_increment\"}]}]}]","logs":[{"events":[{"type":"execute","attributes":[{"key":"_contract_address","value":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d"}]},{"type":"message","attributes":[{"key":"action","value":"execute"},{"key":"module","value":"wasm"},{"key":"sender","value":"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d"},{"key":"method","value":"try_increment"}]}]}],"gas_wanted":"115945","gas_used":"98755"}

Ok!
```

To understand why the argument is `'{"increment":{}}'`, if we open `src/contract.rs` and inspect `pub fn execute` we'll see the case matching statement that matches our JSON argument:
```javascript
pub fn execute(
  deps: DepsMut,
  _env: Env,
  info: MessageInfo,
  msg: ExecuteMsg,
) -> Result<Response, ContractError> {
  match msg {
    ExecuteMsg::Increment {} => try_increment(deps), // Here it is
    ExecuteMsg::Reset { count } => try_reset(deps, info, count),
  }
}
```

**Note: `enum` attributes again are converted. `ExecuteMsg::Increment {}` becomes `{"increment":{}}` in the CLI.**

Provided our `{"increment":{}}` transaction succeeded, if we query `count` again it will have increased by `1`:
```bash
archway query contract-state smart --args '{"get_count": {}}'
```

Now outputs:
```bash
Attempting query...

{"data":{"count":1}}

Ok!
```

#### Congrats, you made it to the end!