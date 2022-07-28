---
sidebar_position: 1
title: Introduction
---

# What is [Archway CLI](https://github.com/archway-network/archway-cli) really?

Archway's Developer CLI is a command-line tool for working with smart contracts. The CLI functions as a wrapper around `rustc`, `cargo`, `archwayd` and `cosmwasm-rust-optimizer`. Think of it like a user friendly version of `archwayd` with support for compiling Rust. 

There are three core goals of the CLI:

- Speed up development
- Deploy, connect and interact with contracts on Archway
- Encourage security and best practices for developers

## The Future of Archway CLI

At a future date, Archway CLI will require the installation of less dependencies, and will evolve away from wrapping other binaries with user friendly syntax through the development an Archway Light Client and Local Blockchain Utility. 

#### Archway Light Client

The Archway Light Client will be developed to replace dependency on `archwayd` for interacting with Archway nodes. 

[Follow the development of this enhancement](https://github.com/archway-network/archway-cli/issues/59)

#### Local Blockchain Utility

The Local Blockchain Utility will start a local Archway blockchain with pre-funded accounts. It will operate on an unexposed network allowing developers to quickly fire up a personal Archway blockchain to run tests, execute commands, or inspect contract state while controlling how the chain operates.

[Follow the development of this enhancement](https://github.com/archway-network/archway-cli/issues/58)