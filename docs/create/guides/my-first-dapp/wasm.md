---
sidebar_position: 3
---

# Producing Wasm executables

Since we've tested and built our contract, we're still operating under the assumption that everything works.
However, to test our dApp on Archway, we'll need to build it as a `wasm` executable, then upload and instantiate it on chain.

For that, you'll need the `wasm32-unknown-unknown` target installed in your toolchain as well. You can add it using:

```bash
rustup target add wasm32-unknown-unknown
```

There are 2 types of `wasm` binaries that can be produced by the Developer CLI. Let's call them _"default"_ `wasm` and _"cosmwasm"_ `wasm`.

## Default Wasm executables

This is a regular `wasm` binary. It's the same as you'd get by running the Rust native command `cargo wasm`.

_Default_ `wasm` executables can be produced by the developer CLI using the command:

```bash
archway deploy --dry-run
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

**Note: use `--dry-run` before deploying to gauge whether the deployment will succeed. This is useful because of speed, as running `archway deploy --dry-run` is a lot faster.**

## CosmWasm Wasm executables

_CosmWasm_ `wasm` executables are optimized using the `cosmwasm/rust-optimizer` which produces a smaller executable size than `cargo wasm`. 

If you're coming from a `C++` background, think of it like building executables with [UPX](https://upx.github.io/), as `cosmwasm/rust-optimizer` also compresses the binary to produce smaller build outputs.

To build a _CosmWasm_ `wasm` executable, pass the `--optimize` flag to `archway build`.

```bash
archway build --optimize
```

Example output:

```bash
Building wasm binary...
✔ Optimizing wasm file...
Optimized wasm binary saved to artifacts/my_first_dapp.wasm
```

:::info
Building CosmWasm `wasm` executables requires the [Binaryen](https://github.com/WebAssembly/binaryen) toolkit. See the [installation](../../getting-started/install.mdx#binaryen) instructions for details on installing this package on your system.
:::