---
sidebar_position: 4
---

# Glossary

<!-- A -->

## Application Blockchain Interface (ABCI)

ABCI is an interface that defines the boundary between the replication engine (the blockchain), and the state machine (the application). Using a socket protocol, a consensus engine running in one process can manage an application state running in another. It's the interface between Archway and your application, and it consists of a set of methods, each with a corresponding `Request` and `Response` message type.

<!-- B -->

<!-- C -->

## CosmWasm

A framework that allows developers to write multi-chain smart contracts using any programming language, including Rust, which compiles to Wasm.


<!-- D -->

## Dapp

An abbreviation of "decentralized application", dapps are applications built on Archway that combine smart contract functionality with a frontend web interface for users.

<!-- E -->
<!-- F -->

<!-- G -->

## Gravity Bridge

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a bidirectional bridge to Ethereum and eventually other Ethereum Virtual Machine (EVM)-based chains

Archway will provide a native Gravity Bridge integration so developers can pull Ethereum assets such as ERC-20s and ERC-721s into their dApps and bring their own assets to Ethereum.

<!-- H -->

<!-- I -->

## Inter-Blockchain Communication protocol (IBC)

[IBC](https://docs.cosmos.network/master/ibc/overview.html) is a generalized cross-chain communication protocol for transferring value and data between independent networks.

The IBC protocol makes it possible for blockchains to connect to each other. Built on Cosmos, Archway natively integrates IBC so users can frictionlessly exchange assets and data with other Cosmos-enabled chains. dapps deploy straight to Archway and plug directly into IBC without additional development or the need to spin up an independent chain.

This native integration helps expand a developer’s addressable market by opening up access to users and liquidity from other chains, while also allowing their token to be ported and utilized elsewhere.

Archway’s native IBC integration enables developers to future-proof their dapps. Rather than betting on a single isolated chain or scaling solution and then being locked into that ecosystem, dapps built on the Archway protocol exist across an interconnected network of chains and can be migrated with ease if needed.

<!-- J -->
<!-- K -->
<!-- L -->
<!-- M -->
<!-- N -->
<!-- O -->

<!-- P -->

## Pool account

A common liquidity pool that Archway dapps can fund and then use to sponsor gas payments for end users.

<!-- Q -->
<!-- R -->
<!-- S -->
<!-- T -->

## Tendermint Core

A byzantine fault tolerant (BFT) consensus engine for blockchain networks and generic application interface (ABCI).

<!-- U -->
<!-- V -->

<!-- W -->

## WebAssembly (WASM) 

An open standard which defines a portable binary-code format for web-ready executable programs, a corresponding textual assembly language, and interfaces for facilitating interactions between programs and their host environment. WASM lets you code software using any one of a number of programming languages all of which compile and output a streamlined file format with the `.wasm` extension.

<!-- X -->
<!-- Y -->