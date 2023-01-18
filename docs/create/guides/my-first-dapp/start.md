---
sidebar_position: 1
---

# Starting out

This guide follows the below workflow:

1. [Create a new project](#creating-a-project)
2. [Build and test our code](#building-and-running-tests)
3. [Request testnet $ARCH](./faucet.md)
4. [Produce _default_ and _CosmWasm_ `wasm` binaries](./wasm.md)
5. [Deploy to a testnet](./deploy.md)
6. [Query and transact with a deployed contract](./interact.md)
7. [Building a dapp frontend](./dapp.mdx)

## Creating a project

In the [Setup](../../getting-started/setup.md) section we learned how to create and configure a new Archway project.

If you haven't created a project yet, or didn't choose the 'Increment' starter template, go back to [Setup](../../getting-started/setup.md) to complete this step.

Projects created with `archway new` are ready-made project templates. Later we'll add code and modify existing behavior, but to get acquainted let's build and test the boilerplate code we have now.

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

```bash
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
