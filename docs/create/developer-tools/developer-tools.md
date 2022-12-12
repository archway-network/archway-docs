---
sidebar_position: 1
title: Tools Overview 
---

## [Archway Developer CLI](https://github.com/archway-network/archway-cli) 

[Archway's Developer CLI](developer-cli.md) is a command-line tool for working with smart contracts. The CLI functions as a wrapper around `rustc`, `cargo`, `archwayd` and `cosmwasm-rust-optimizer`. Think of it like a user friendly version of `archwayd` with support for compiling Rust. 

There are three core goals of the CLI:

- Speed up development
- Deploy, connect and interact with contracts on Archway
- Encourage security and best practices for developers

Go to the [Developer CLI page](developer-cli.md) to find a list of available CLI commands. 


#### The Future of Archway CLI

At a future date, Archway CLI will require the installation of less dependencies and will evolve away from wrapping other binaries with user friendly syntax. This will be achieved through the development of an Archway Light Client, and a Local Blockchain Utility.

#### Archway Light Client

The Archway Light Client will be developed to replace dependency on `archwayd` for interacting with Archway nodes. 

[Follow the development of this enhancement](https://github.com/archway-network/archway-cli/issues/59)

#### Local Blockchain Utility

The Local Blockchain Utility will start a local Archway blockchain with pre-funded accounts. It will operate on an unexposed network allowing developers to quickly fire up a personal Archway blockchain to run tests, execute commands, or inspect contract state while controlling how the chain operates.

[Follow the development of this enhancement](https://github.com/archway-network/archway-cli/issues/58)

***

## [Archway Daemon / Archwayd](https://github.com/archway-network/archway) 

The `archwayd` binary is the core implementation of the Archway protocol. It leverages the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) and [CosmWasm](https://github.com/CosmWasm/cosmwasm) to reward validators and creators for their contributions to the network. The command-line interface runs a full-node of Archway and provides utilities for chain genesis, account management (keys), validators, nodes, queries and transactions.

Users familiar with [Cosmos Hub](https://github.com/cosmos/gaia) will recognize the Archway daemon is Archway's version of [Gaiad](https://hub.cosmos.network/main/getting-started/what-is-gaia.html). It's built using the same Cosmos SDK modules, but introduces a new SDK module called `x/gastracker` which monitors gas consumed by applications on the network and distributes developer rewards.

#### Cosmos SDK Modules

- `x/auth`: Accounts and signatures
- `x/bank`: Token transfers
- `x/staking`: Staking logic
- `x/mint`: Inflation logic
- `x/distribution`: Fee distribution logic
- `x/slashing`: Slashing logic
- `x/gov`: Governance logic
- `ibc-go/modules`: Inter-blockchain communication
- `x/params`: Handles app-level parameters

#### Archway SDK Modules

- `x/tracking`: measures gas consumption and rewards developers
- `x/rewards`: calculates and distributes rewards to smart contracts 

Go to the [Archwayd CLI Page](daemon.md) for a full list of the available commands. 

## [arch3.js](https://github.com/archway-network/arch3.js)

`arch3.js` is a JavaScript library for interacting with the Archway Protocol. `arch3.js` eliminates the need of working with multiple [`CosmJS` clients](https://github.com/cosmos/cosmjs) by extending their functionalities. It also connects with Archway's unique reward system. 

More information can be found on the [arch3.js page](arch3js.md).

## CosmWasm

CosmWasm is a Cosmos framework that allows developers to write multi-chain smart contracts using any programming language which compiles to Wasm. It is written as a module that can plug into the Cosmos SDK, making it easy for deploying Cosmos blockchains that utilize Wasm smart contracts. 

Disregarding code pertaining to specific chains, CosmWasm contracts deploy and behave interchangeably among blockchains running the [`wasmd`](https://github.com/CosmWasm/wasmd) binary.Archway tooling provides modules for programming Archway smart contracts in Rust, but in future will support Wasm development in both Rust and Golang. 

For more information on CosmWasm, please go to the [CosmWasm docs](https://docs.cosmwasm.com/).
