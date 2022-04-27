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

Think of it like building `C++` executables with [UPX](https://upx.github.io/), as `cosmwasm/rust-optimizer` also compresses the binary to produce smaller build outputs.

Producing _CosmWasm_ `wasm` executables is part of the deploy process and can be accessed by running the deploy command without the `--dry-run` flag.

:::note
The Developer CLI currently only supports the Docker version of `cosmwasm/rust-optimizer`. The deploy process will fail and exit if Docker has not been started (Support for native `cosmwasm/rust-optimizer` binaries coming soon).
:::
