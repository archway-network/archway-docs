---
sidebar_position: 3
---

# Producing Wasm executables

Since we've tested and built our contract, we're operating under the assumption everything works. 

However, to test our dApp on Archway we'll need to build it as a `wasm` executable, and upload and instantiated it on chain.

Note there are 2 types of `wasm` binaries that can be produced by the Developer CLI. It would be tempting to call them _"unoptimized"_ and _"optimized"_ `wasm`, and while there's a sense in which that's true, it's a bit misleading. So we'll call them _"default"_ and _"cosmwasm"_. 

## Default Wasm executables
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

## CosmWasm executables

CosmWasm executables are also optimized release targets, but they're optimized using the `cosmwasm/rust-optimizer` which produces a  smaller executable size. 

If you're coming from a C++ background, you can think of this process like building your executable with [UPX](https://upx.github.io/), since `cosmwasm/rust-optimizer` compresses the binary in a similar manner to produce smaller build outputs.

Producing CosmWasm executables is part of the deploy process and can be accessed by running the deploy command without the `--dryrun` flag.

**Note: the Developer CLI currently only supports the Docker version of `cosmwasm/rust-optimizer`. The deploy process will fail and exit if Docker has not been started (Support for native `cosmwasm/rust-optimizer` bins coming soon).**