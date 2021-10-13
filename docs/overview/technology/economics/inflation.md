---
sidebar_position: 3
---

# Inflation

The Archway overall inflation rate follows the model of the [mint module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md) in the Cosmos Hub, with total token supply increasing between 7% and 20% annually depending on the ratio of tokens that are actively staked on the network.

Configurable parameters determine the distribution between validators and dApps. A portion of these total inflation rewards directly with dApps. At network launch, 25% goes to dApp developers and 75% goes to validators. For example, if the network sees total annual inflation of 8%, then 2% goes to dApps and 6% to validators.

The dApp rewards pool (for example, 2% in the previous example) is then proportionally distributed based on the relative amount of gas fees that each dApp generates within a given epoch. For example, a dApp that is responsible for 10% of gas consumption is awarded 10% of the available pool.

To mitigate potential Sybil attacks, dApps have a max inflation rewards cap. At the network launch, there is a hard cap based on the total gas fees paid per dApp. A contract cannot earn rewards greater than the total gas it generates within an epoch. Implementation of a dynamic rewards cap is being actively researched and may be updated through future governance. Transitioning to a floating cap provides more flexible distribution and further incentivize developers to continuously improve their dApps.

Any surplus in rewards are contributed to the Archway community pool where the funds are managed through governance.

Inflationary rewards are paid out by the network on a per-block basis.

