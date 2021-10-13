---
sidebar_position: 1
---

# Validators Overview

Archway is based on the [Tendermint](https://github.com/tendermint/tendermint/tree/master/docs/introduction) consensus engine that relies on a set of validators that are responsible for committing new blocks in the blockchain. 

## Introduction

These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key. Validator candidates can bond their own `ARC` or have `ARC` delegated or staked to them by token holders. See [Participate in Staking (Delegation)](../staking.md). The validators are determined by the highest number that stake or delegate to them.

Validators and their delegators `ARC` as block provisions and tokens as transaction fees through execution of the Tendermint consensus protocol. Note that validators can set commission on the fees their delegators receive as additional incentive.

If validators double sign, are frequently offline, or do not participate in governance, their staked `ARC`(including `ARC` of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.

## Hardware

Validators can set up a physical operation secured with restricted access. A good starting place, for example, would be co-locating in secure data centers.

Validators are expected to equip their datacenter location with redundant power, connectivity, and storage backups. Plan to have several redundant networking boxes for fiber, firewall, and switching and also small servers with redundant hard drive and failover.  to start out, hardware can be on the low end of datacenter gear.

Archway network requirements are expected to be low initially. The current testnet requires minimal resources. Bandwidth, CPU, and memory requirements rise as the network grows. Large hard drives are recommended for storing years of blockchain history.

<!-- ## Set Up a Website

Set up a dedicated validator's website and signal your intention to become a validator on our [forum](https://forum.cosmos.network/t/validator-candidates-websites/127/3). This is important since delegators will want to have information about the entity they are delegating their Atoms to. -->

## Community

To learn more about becoming a validator, join the [Archway Discord](https://discord.gg/5FVvx3WGfa) server. 
