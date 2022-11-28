---
sidebar_position: 1
---

# Rewards Overview 
Rewards are a unqiue part of the Archway Network. The rewards systems is designed to rewards developers on building dapps and making contributing to the network. 

Within the rewards system, there are two type of rewards: **Gas Fee Rebates** and **Inflationary Rewards**. In this guide we will explore each of these reward types in more detail and how developers can access them 


## Reward Types

### Transaction Fee Rebate Rewards 
Each computation or operation on a blockchain comes with a cost that is referred to as "gas". When a user wants to transact with a smart contract, the use needs to pay this gas fee as a transaction fee. 

In most blockchain networks, these fee goes to the validator who is responsible for adding the transaction to the blockchain. On Archway, this fee is split between the validator and the dapp developer as a reward. 

To more how understand more about gas fee rebate rewards are calculated and split, go to the Calculating Rewards section. 

### Inflationary Rewards  
Following the Cosmos mint module, new coins are added to the Archway network to reward stakers and other particaptors. Like the gas fee rebates, these rewards are also split between developers and validators.

The amount of tokens that are able to be rewarded will change over time as it is connected to the ratio of tokens that are being staked on the network. As this amount changes, so does the split of this reward between validators and developers. For more information on this calculation, go to the Calculating Rewards section. 

## Calculating Rewards


### Transaction Fee Rebate Rewards

#### Calculating Gas 
The transaction fee rewards are calculating by the amount of gas that a smart contract uses directly or by other contracts calling it. The more gas a contract uses, the bigger the reward. 

Each block uses gas to complete the transactions included in the block. Rewards for a contract are calculating only on the execution of that specific contract and not all contracts included in the block. 

#### Transaction Fee Split 

At the launch of the Archway Network, there will be a 50% split between developers and validators of the transaction fee. The network has parameters included where this can be adjusted over time through a governance vote. 

#### Minimum Consensus Fee 

In order to protect the transaction fees rewarded to developers and prevent spam attacks on the network, there is a minimum consensus fee connected to each new block. This is the minimum amount that a user must pay in gas fee for a transaction. 

This minimum fee is shown in one gas unit, for example 0.002 uarch. The fee should be queryed by the client before submitting a new transaction.

### Inflationary Rewards 

Ratio of the new minted coins 




## Reward Distribution

Rewards are sent to a storage on the blockchain. 


To find out more about how to manage your rewards, check out the next section. 
