---
sidebar_position: 3
---

# Inflation

The Archway overall inflation rate follows the model of the [mint module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md) in the Cosmos Hub, with total token supply increasing between 7% and 20% annually, depending on the ratio of tokens that are actively staked on the network.

Archway shares a portion of these total inflation rewards directly with dApps. The protocol provides configurable parameters to determine the optimal distribution between validators and dApps. At genesis, 25% will go to dApp developers and 75% will go to validators. For example, if the network sees total annual inflation of 8%, then 2% would go to dApps and 6% would go to validators.

The dApp rewards pool (2% in the previous example) is then proportionally distributed based on the relative amount of gas fees that each dApp generates within a given epoch. For example, a dApp that is responsible for 10% of gas consumption is awarded 10% of the available pool.

To mitigate potential Sybil attacks and ensure spamming transactions is not profitable, each dApp has a max inflation rewards cap. At network launch, there is a hard cap based on the total gas fees paid per dApp. A contract deployed to Archway cannot earn rewards greater than the total gas it generates within an epoch. Implementation of a dynamic rewards cap is being actively researched and can be updated through future governance. Transitioning to a floating cap will provide more flexible distribution and further incentivize developers to continuously improve their dApps.

Any surplus in rewards will be contributed to the Archway community pool where the funds are managed through governance.

Inflationary rewards are paid out by the network on a per-block basis.

