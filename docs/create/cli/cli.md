---
sidebar_position: 1
title: Introduction
---

## What is [Archway Developer CLI](https://github.com/archway-network/archway-cli) really?

Archway's Developer CLI is a command-line tool for working with smart contracts. The CLI functions as a wrapper around `rustc`, `cargo`, `archwayd` and `cosmwasm-rust-optimizer`. Think of it like a user friendly version of `archwayd` with support for compiling Rust. 

There are three core goals of the CLI:

- Speed up development
- Deploy, connect and interact with contracts on Archway
- Encourage security and best practices for developers

#### The Future of Archway CLI

At a future date, Archway CLI will require the installation of less dependencies and will evolve away from wrapping other binaries with user friendly syntax. This will be achieved through the development of an Archway Light Client, and a Local Blockchain Utility.

#### Archway Light Client

The Archway Light Client will be developed to replace dependency on `archwayd` for interacting with Archway nodes. 

[Follow the development of this enhancement](https://github.com/archway-network/archway-cli/issues/59)

#### Local Blockchain Utility

The Local Blockchain Utility will start a local Archway blockchain with pre-funded accounts. It will operate on an unexposed network allowing developers to quickly fire up a personal Archway blockchain to run tests, execute commands, or inspect contract state while controlling how the chain operates.

[Follow the development of this enhancement](https://github.com/archway-network/archway-cli/issues/58)

***

## What is [Archwayd](https://github.com/archway-network/archway) really?

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

- `x/gastracker`: measures gas consumption and rewards developers