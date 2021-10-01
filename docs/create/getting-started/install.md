---
sidebar_position: 1
---

# Installation

To get setup for developing for Archway Network, you'll first need to make sure you've installed and configured a few dependencies.

## Prerequisites

- [Rustc](https://www.rust-lang.org/tools/install "Install Rust")
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html "Install Cargo")
- [Wasmd](https://github.com/CosmWasm/wasmd "Install Wasmd")
- [Docker](https://docs.docker.com/get-docker "Install Docker")
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "Install Node.js and NPM")
- [Archway Developer CLI](https://github.com/archway-network/archway-cli "Install develolper CLI")

### Rustc

`rustc` is the compiler for the Rust programming language, provided by the [Rust](https://www.rust-lang.org/ "Rust Homepage") project maintainers. It takes your Rust source code and produces binary code, either as a library or executable.

To install Rust follow the instructions for your operating system at https://www.rust-lang.org/tools/install

### Cargo

Cargo is Rust's package manager, like `go get` for Golang or `npm` for JavaScript. It comes automatically bundled with Rust if you installed `rustc` using `rustup`. 

If you didn't install with `rustup` or don't have `cargo` in your command line path, check out the instructions for installing `cargo` at https://doc.rust-lang.org/cargo/getting-started/installation.html

### Wasmd

`wasmd` is the first implementation of a cosmos zone with `wasm` smart contracts enabled.

`wasmd` was originally forked from the cosmos/gaia repository. It adds a new module called `x/wasm`, but the `wasmd` binary should otherwise function just like `gaiad`.

To build `wasmd` you can either install it from source or using the `cosmwasm/wasmd` [Docker](https://www.docker.com/ "Docker Homepage") container.

#### Install Wasmd From Source

```
# Get source code
git clone git@github.com:CosmWasm/wasmd.git
cd wasmd

# Install
make install
make test
make proto-gen
```

**Note: building wasmd from source requires Go 1.16.8+**

For full installation and configuration parameters see: https://github.com/CosmWasm/wasmd#readme

#### Install Wasmd Using Docker

```
docker build -t cosmwasm/wasmd:latest
```

For more information on running `wasmd` with the `cosmwasm/wasmd` [Docker](https://www.docker.com/ "Docker Homepage") container, see: https://github.com/CosmWasm/wasmd#dockerized


### Npm

`npm` is a package manager for JavaScript and Node.js. In Archway it's used for installing and updating the developer CLI. 

If you need to install Node and NPM follow the instructions for your operating system at: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Archway Developer CLI

Provided you've got the above dependencies in your path, you have everything needed to install and run the Archway developer CLI. 

It can be installed from the [GitHub repository](https://github.com/archway-network/archway-cli) using the following commands:

```
git clone git@github.com:archway-network/archway-cli.git
cd archway-cli 
npm install -g
```