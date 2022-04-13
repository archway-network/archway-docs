---
sidebar_position: 1
---

# Installation

Make sure you've installed and configured a few dependencies.

**IMPORTANT:** For local installations, you need root access to run `docker`. Make sure to follow all the steps with `root` access to prevent conflicts and confusions on the deployment process which requires root permission.

#### Dependencies

- [Rustc](https://www.rust-lang.org/tools/install "Install Rust")
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html "Install Cargo")
- [Cargo Generate](https://crates.io/crates/cargo-generate "Install Cargo Generate")
- [Archwayd](https://github.com/archway-network/archway/tree/main/cmd/archwayd "Install Archway Daemon")
- [Docker](https://docs.docker.com/get-docker "Install Docker") (for Linux users, it's recommended to [run the Docker daemon in Rootless Mode](https://docs.docker.com/engine/security/rootless/))
- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "Install Node.js and NPM")
- [Archway Developer CLI](https://github.com/archway-network/archway-cli "Install develolper CLI")

## Rustc

`rustc`, provided by the [Rust](https://www.rust-lang.org/ "Rust Homepage") project maintainers, is the compiler for the Rust programming language. `rustc` takes your Rust source code and produces binary code as a library or an executable.

To install Rust, follow the instructions for your operating system at https://www.rust-lang.org/tools/install.

## Cargo

Cargo is the Rust package manager, like `go get` for Golang or `npm` is for JavaScript. Cargo comes with Rust if you installed `rustc` using `rustup`.

If you didn't install  `rustc` with `rustup`, or don't have `cargo` in your command line path, see the instructions for installing Cargo at https://doc.rust-lang.org/cargo/getting-started/installation.html.

## Cargo Generate

The `cargo-generate` tool creates a new Rust project quickly by leveraging a pre-existing code base.

Archway uses `cargo-generate` to provide project templates for dApp development.

To install `cargo-generate` with `vendored-openssl`, run the command:

```bash
cargo install cargo-generate --features vendored-openssl
```

## Archwayd

`archwayd` is an implementation of a Cosmos zone with `wasm` smart contracts enabled.

Originally forked from the [cosmos/gaia repository](https://github.com/cosmos/gaia), `archwayd` adds new modules for developer rewards and for executing `wasm`, but otherwise the `archwayd` binary functions just like `gaiad`.

To build `archwayd`, install it from source or use the `archwaynetwork/archwayd` [Docker](https://www.docker.com/ "Docker Homepage") container.

:::caution
**Note:** For the moment Archway can be installed only by pulling from Docker Hub.

For example: `docker pull archwaynetwork/archwayd:latest`

Installing `archwayd` from source, coming soon!
:::

### Install Archwayd from Source

Get source code:

```bash
git clone git@github.com:archway-network/archway.git
cd archway
```

Build and install:

```bash
make install
```

**Note: Building archwayd from source requires Go 1.16.8+**

For full installation and configuration parameters, see https://github.com/archway-network/archway/blob/main/README.md.

### Install Archwayd Using Docker

```bash
docker build -t archway-network/archwayd:latest
```

Or pull from Docker Hub:

```
docker pull archwaynetwork/archwayd:latest
```

:::tip
To simplify using the Docker container, set an alias with the home path and the proper image tag (replacing `<network-name>`), like:

```bash
alias archwayd="docker run --rm -it -v ~/.archway:/root/.archway archwaynetwork/archwayd:<network-name>"
```

After setting this alias, you can use the other `archwayd` commands without typing the verbose Docker run command.
:::

For more information on running `archwayd` with the `archway-network/archwayd` [Docker](https://www.docker.com/ "Docker Homepage") container, see  https://github.com/archway-network/archway#dockerized.


## Node.js and Npm

`npm` is a package manager for JavaScript and Node.js. Archway uses `npm` for installing and updating the developer CLI.

For installing `node.js` and `npm`, see instructions for your operating system at https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

:::info
For `v1.0.4-beta` and later, the `@archwayhq/cli` requires Node.js version 17 or higher.

[Check current version of @archwayhq/cli](https://www.npmjs.com/package/@archwayhq/cli?activeTab=versions)
:::

## Archway Developer CLI

Install the Archway developer CLI using `npm`, see [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

```bash
npm install -g @archwayhq/cli
```

:::caution
**Note:** If you are running `archwayd` using [Docker](https://docs.docker.com/get-docker), you may need to install the Archway developer CLI as `root`, or give yourself permissions to the directory on your file system (for example, `sudo chown YOUR_USERNAME:YOUR_GROUPNAME -R /var/tmp/.archwayd`)
:::
