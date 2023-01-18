---
sidebar_position: 4
---

# Glossary

<!-- A -->

## $ARCH

`$ARCH` is the native token of the Archway Network. 

## Application Blockchain Interface (ABCI)

ABCI is an interface that defines the boundary between the replication engine (the blockchain), and the state machine (the application). Using a socket protocol, a consensus engine running in one process can manage an application state running in another. It's the interface between Archway and your application, and it consists of a set of methods each with a corresponding `Request` and `Response` message type.

<!-- B -->

## Block Explorer 

Block Explorers are tools that allow users to view and search for transactions, addresses, blocks, and other information on a blockchain. 

<!-- C -->

## Cosmos SDK

The Cosmos SDK is a framework for building application-specific blockchains. 

## CosmWasm

A framework that allows developers to write multi-chain smart contracts using any programming language, including Rust, which compiles to Wasm.


<!-- D -->

## Dapp

An abbreviation of "decentralized application", dapps are applications built on Archway that combine smart contract functionality with a frontend web interface for users.

<!-- E -->
<!-- F -->

## Faucet 

Faucets are websites or applications that enable users to earn a small number of tokens at no cost or by completing small tasks like sharing a link. These websites are popular for getting tokens to use for testnets.

<!-- G -->

## Gas Fee

Gas Fees are transaction fees paid by users in order for transactions to be completed on the blockchain. In traditional networks, this fee is given to validators. On the Archway Network, this fee is split between validators and dapp developers. 

## Governance Tokens 

Governance tokens are tokens that allow token holders to create, vote on proposals and make decisions about the direction and management of a blockchain. 

## gRPC 

gRPC is an open-source framework that was created by Google for building high-performance remote procedure call (RPC) APIs. 

## Gravity Bridge

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a bidirectional bridge to Ethereum and eventually other Ethereum Virtual Machine (EVM)-based chains.

Archway will provide a native Gravity Bridge integration so developers can pull Ethereum assets such as ERC-20s and ERC-721s into their dapps and bring their own assets to Ethereum.



<!-- H -->

<!-- I -->

## Inflation rewards

Inflation rewards are newly minted tokens that are distributed to stakers of a blockchain network as a reward for their participation in network security and consensus. Each network can have a different mechanism for when and to whom rewards are given.  

## Inter-Blockchain Communication protocol (IBC)

[IBC](https://docs.cosmos.network/master/ibc/overview.html) is a generalized cross-chain communication protocol for transferring value and data between independent networks.

The IBC protocol makes it possible for blockchains to connect to each other. Built on Cosmos, Archway natively integrates IBC so users can frictionlessly exchange assets and data with other Cosmos-enabled chains. dapps deploy straight to Archway and plug directly into IBC without additional development or the need to spin up an independent chain.

This native integration helps expand a developer’s addressable market by opening up access to users and liquidity from other chains, while also allowing their token to be ported and utilized elsewhere.

Archway’s native IBC integration enables developers to future-proof their dapps. Rather than betting on a single isolated chain or scaling solution and then being locked into that ecosystem, dapps built on the Archway protocol exist across an interconnected network of chains and can be migrated with ease if needed.

<!-- J -->
<!-- K -->
<!-- L -->

## Light Client Daemon (LCD)

Light clients are software that allows users to interact with the blockchain by connecting to full nodes. These clients do not store the entire blockchain, so they require significantly less storage and resources to operate. 

## Liquidity Mining 

Liquidity Mining refers to the practice of providing assets to a decentralized exchange to make it easier for other users to trade. In return, these users are usually rewarded with a portion of the trading fees or interest earned on the assets. 
<!-- M -->

## Minting 

Minting is the process of creating new tokens on a blockchain through a process that includes validation, creation of new blocks and recording that information to the blockchain. 

<!-- N -->
<!-- O -->

<!-- P -->

## Proof of Stake (PoS)

Proof of Stake is a consensus mechanism where validators are selected by the proportion of tokens they hold or "stake" in the network. The validator to write the next block is chosen at random but a higher stake increases the chances that a specific validator will be chosen. 

## Pool account

A common liquidity pool that Archway dapps can fund and then use to sponsor gas payments for end users.

<!-- Q -->
<!-- R -->

## Remote Procedure Call (RPC)

RPC is a process that allows for the remote communication between servers and applications in different locations. This process allows for an application or dapp to interact and receive data about a blockchain via a server node.

<!-- S -->

## Smart Contract 

A smart contract is a program deployed on a blockchain that automatically executes upon defined conditions such as a transaction between two users. These programs provide trust and efficiency to transactions as a third party is not required to be involved to process and complete any requests.

## Staking 

Staking is the process of locking tokens in a blockchain network via validators in order to support and secure the blockchain. Token holders who are called delegators are rewarded through block rewards which are generated through inflation. Additionally, staking also allows token holders to participate in the governance of the network.

<!-- T -->

## Tendermint Core

A Byzantine fault tolerant (BFT) consensus engine for blockchain networks and generic application interface (ABCI).

## Testnet 

Testnets are versions of a blockchain network used for testing and development purposes where developers can deploy and test their smart contracts without using real assets, thus not incurring any risks or costs. Typically, transactions that occur on a testnet do not have a connection to those on the mainnet. Testnets usually aim to provide similar functionality to their mainnet counterparts.

<!-- U -->
<!-- V -->

## Validator 

Validators are responsible for the verification of transactions on a blockchain. These validators add new blocks to the blockchain and are chosen based on the number of tokens they hold and "stake" as collateral. They are incentivized through block rewards and transaction fees for maintaining the integrity of the network.
<!-- W -->

## WebAssembly (WASM) 

An open standard which defines a portable binary-code format for web-ready executable programs, a corresponding textual assembly language, and interfaces for facilitating interactions between programs and their host environment. WASM lets you code software using any one of a number of programming languages all of which compile and output a streamlined file format with the `.wasm` extension.

<!-- X -->
<!-- Y -->