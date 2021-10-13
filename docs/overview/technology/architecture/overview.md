---
sidebar_position: 1
---

# Architectural Overview

The network starts with a vanilla Proof-of-Stake (PoS) network, with modified Minting, CosmWasm, Distribution, Staking, Group, and Governance Cosmos modules that manage the Archway inflation and rewards system. 

Archway creates a Cosmos SDK-based chain with support for WASM smart contract execution that rewards developers for the usage of said smart contracts deployed.

Desired functionalities to achieve above objective:
- [Fee reward to the developers](../economics/overview.md)
- [Gas rebate to end users](../economics/gas-rebates.md)
- [Smart contract premium fee](../economics/smart-contracts-fees.md)
- [Inflation rewards](../economics/inflation.md)

## Smart Contracts
The Archway protocol uses CosmWasm, WebAssembly (Wasm), and Rust. Over 40 high-level programming languages support Wasm, including C and C++, Python, Go, Rust, Java, and PHP.

### Difference Between Smart Contracts and Cosmos Zones
While the ethos of Cosmos is to create your own self-sovereign chain, in many cases, it makes sense for a project to first deploy as a dApp. There is a lot of overhead in launching and maintaining a standalone chain. While the Cosmos SDK simplifies much of the technical effort, a developer still needs to attract and sufficiently incentivize a strong community of validators to run the network, which can be a daunting endeavor for early projects.

Consider the following tradeoffs between building your core logic as a smart contract versus building your logic as an independent Cosmos blockchain.

|                          | Cosmos Chain | Smart Contract|
|      :----:              |    :----:    |    :----:     |
|Speed of development      | -            | +             | 
|Ease of development       | -            | +             | 
|Complexity of logic       | +            | +             | 
|Mantenance overhead       | -            | +             | 
|Level of customization    | +            | -             | 
|Strict resource control   | -            | +             | 
|Native chain features     | +            | -             | 
|Scalability               | +            | +             | 


