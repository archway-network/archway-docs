---
sidebar_position: 4
---

# Glossary

<!-- A -->

## $ARCH

`$ARCH` is the native token of the Archway Network. 

## Application Blockchain Interface (ABCI)

ABCI is an interface that defines the boundary between the replication engine (the blockchain), and the state machine (the application). Using a socket protocol, a consensus engine running in one process can manage an application state running in another. It's the interface between Archway and your application, and it consists of a set of methods, each with a corresponding `Request` and `Response` message type.

<!-- B -->

## Block Explorer 

Block Explorers are tools that allow the blocks, transactions, addresses of a blockchain to be searched both in real-time and for historical purposes. 

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

Faucets are websites or applications that give small amounts of tokens for free or by completing small tasks like sharing a link. These websites are popular for getting tokens to use for testnets.

<!-- G -->

## Gas Fee

Gas Fees are the transaction fees paid by users in order for the transaction to be completed on the blockchain. In traditional networks, this fee is given to the validators. On the Archway Network, this fee is split between the validators and developers of the dapp. 

## Governance Tokens 

Governance tokens are tokens that are connected to voting power of the token holder. These tokens allow the holder to create and vote on proposals on the direction of various types of blockchain projects. 

## gRPC 

gRPC is an open-source RPC framework that was created by Google built for high performance. 

## Gravity Bridge

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a bidirectional bridge to Ethereum and eventually other Ethereum Virtual Machine (EVM)-based chains

Archway will provide a native Gravity Bridge integration so developers can pull Ethereum assets such as ERC-20s and ERC-721s into their dApps and bring their own assets to Ethereum.



<!-- H -->

<!-- I -->

## Inflation rewards

Inflation rewards are tokens that are sent to a specific address as new tokens are introduced into the network. These are rewards to existing holders of that token. Each network can have a different mechanism on when and to whom will receive these rewards.  

## Inter-Blockchain Communication protocol (IBC)

[IBC](https://docs.cosmos.network/master/ibc/overview.html) is a generalized cross-chain communication protocol for transferring value and data between independent networks.

The IBC protocol makes it possible for blockchains to connect to each other. Built on Cosmos, Archway natively integrates IBC so users can frictionlessly exchange assets and data with other Cosmos-enabled chains. dApps deploy straight to Archway and plug directly into IBC without additional development or the need to spin up an independent chain.

This native integration helps expand a developer’s addressable market by opening up access to users and liquidity from other chains, while also allowing their token to be ported and utilized elsewhere.

Archway’s native IBC integration enables developers to future-proof their dApps. Rather than betting on a single isolated chain or scaling solution and then being locked into that ecosystem, dApps built on the Archway protocol exist across an interconnected network of chains and can be migrated with ease if needed.

<!-- J -->
<!-- K -->
<!-- L -->

## Light Client Daemon (LCD)

Light clients are software that allow users to interact with the blockchain by connecting to full nodes. These clients do not store the entire blockchain so they take significantly less storage and resources to run. 

## Liquidity Mining 

Liquidity Mining is when users lend their assets to a decentralized exchange to make it easier for other users to trade. In return these users receive an award usually in the form of a share of the fee or interest. 
<!-- M -->

## Minting 

Minting is the process of creating new tokens on a blockchain through a process that includes validation, creation of new blocks and then recording that information to the blockchain. 

<!-- N -->
<!-- O -->

<!-- P -->

## Proof of Stake (PoS)

Proof of Stake is a consensus mechanism that is used by Tendermint as well as other blockchains. In PoS, validators are selected by the proportion of the token they hold or their "stake" in the network. The validator to write the next block is chosen by random but a higher stake increases the chances that a specific validator will be chosen.  

## Pool account

A common liquidity pool that Archway dApps can fund and then use to sponsor gas payments for end users.

<!-- Q -->
<!-- R -->

## Remote Procedure Call (RPC)

A RPC is a process that allows for the remote communication between servers and applications in different locations. This process allows for an application or dapp to interact and receive data about a blockchain via a server node.

<!-- S -->

## Smart Contract 

A smart contract is a program deployed on a blockchain that automatically executes upon defined conditions such as a transaction between two users. These programs provide trust and efficiency to transactions as third party are not required to be involved to process and complete any requests.

## Staking 

Staking is the process of rewarding token holders that have chosen to stake their tokens. Staking tokens typically involves locking those tokens from being transferred. In turn, these tokens are used to power the network by being part of the validation process in a Proof of Stake consensus model. 

<!-- T -->

## Tendermint Core

A byzantine fault tolerant (BFT) consensus engine for blockchain networks and generic application interface (ABCI).

## Testnet 

Testnets are test networks of a blockchain where developers can deploy and test their smart contracts with little to no risk and cost. Typically, the transactions that occur on a testnet have not connection to those on the mainnet. Testnets usually aim to provide similar functionality as to their mainnet counterparts.

<!-- U -->
<!-- V -->

## Validator 

Validators are responsible for the verification of transactions on a blockchain. These validators add new blocks to the blockchain and receive rewards for staking the token of the blockchain. 
<!-- W -->

## WebAssembly (WASM) 

An open standard which defines a portable binary-code format for web-ready executable programs, a corresponding textual assembly language, and interfaces for facilitating interactions between programs and their host environment. WASM lets you code software using any one of a number of programming languages all of which compile and output a streamlined file format with the `.wasm` extension.

<!-- X -->
<!-- Y -->