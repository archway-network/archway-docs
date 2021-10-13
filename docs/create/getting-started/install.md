---
sidebar_position: 1
---

# Installation

Make sure you've installed and configured a few dependencies.

**IMPORTANT:** If on your machine, you need root access to run `docker`, make sure to follow all the steps with `root` access. Otherwise, there will be some conflicts and confusions on the deployment process which will ask for a root permission.

#### Dependencies

- [Rustc](https://www.rust-lang.org/tools/install "Install Rust")
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html "Install Cargo")
- [Cargo Generate](https://crates.io/crates/cargo-generate "Install Cargo Generate")
- [Archwayd](https://github.com/archway-network/archway/tree/main/cmd/archwayd "Install Archway Daemon")
- [Docker](https://docs.docker.com/get-docker "Install Docker")
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "Install Node.js and NPM")
- [Archway Developer CLI](https://github.com/archway-network/archway-cli "Install develolper CLI")

## Rustc

`rustc` is the compiler for the Rust programming language, provided by the [Rust](https://www.rust-lang.org/ "Rust Homepage") project maintainers. It takes your Rust source code and produces binary code, either as a library or executable.

To install Rust follow the instructions for your operating system at https://www.rust-lang.org/tools/install

## Cargo

Cargo is Rust's package manager, like `go get` for Golang, or `npm` for JavaScript. It comes with Rust if you installed `rustc` using `rustup`. 

If you didn't install with `rustup`, or don't have `cargo` in your command line path, see the instructions for installing `cargo` at https://doc.rust-lang.org/cargo/getting-started/installation.html

## Cargo Generate

`cargo-generate` is a tool that creates a new Rust project quickly by leveraging a pre-existing code base. 

In Archway it's used to provide project templates for dApp development. 

To install `cargo-generate` with `vendored-openssl` run the command: 
```bash
cargo install cargo-generate --features vendored-openssl
```

## Archwayd

`archwayd` is the an implementation of a Cosmos zone with `wasm` smart contracts enabled.

Originally forked from the [cosmos/gaia repository](https://github.com/cosmos/gaia). It adds new modules developer rewards and executing `wasm`, but the `archwayd` binary should otherwise function just like `gaiad`.

To build `archwayd` you can either install it from source or using the `drewstaylor/archwayd` [Docker](https://www.docker.com/ "Docker Homepage") container.

### Install Archwayd From Source

Get source code:
```bash
git clone git@github.com:archway-network/archway.git
cd archway
```

Build and install:
```bash
make install
```

**Note: building archwayd from source requires Go 1.16.8+**

For full installation and configuration parameters see: https://github.com/archway-network/archway/blob/main/README.md

### Install Archwayd Using Docker

```bash
docker build -t archway/archwayd:latest
```

Or pull from Dockerhub
```
docker pull drewstaylor/archwayd:latest
```

For more information on running `archwayd` with the `archway/archwayd` [Docker](https://www.docker.com/ "Docker Homepage") container, see: https://github.com/archway-network/archway#dockerized


## Npm

`npm` is a package manager for JavaScript and Node.js. 

In Archway it's used for installing and updating the developer CLI. 

For installing `node` and `npm` see instructions for your operating system at: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Archway Developer CLI

The Archway developer CLI can be installed from the [GitHub repository](https://github.com/archway-network/archway-cli)

```bash
git clone git@github.com:archway-network/archway-cli.git
cd archway-cli 
npm install -g
```
