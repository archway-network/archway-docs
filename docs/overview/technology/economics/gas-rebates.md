---
sidebar_position: 2
---

# Gas Rebates 

Unlike existing smart contract platforms, Archway does not burn gas fees or distribute them entirely to the validators or miners. Instead, the collected gas fees are split between dApp developers and validators.

At network launch, gas fees are divided evenly with 50% going to dApp developers and 50% to validators. The network provides configurable parameters that can be adjusted over time to determine the optimal gas rebate distribution between validators and dApps.

From the dApp perspective, a contract receives a 50% rebate on all gas paid. From the validator perspective, foregoing a portion of rewards in the near-term effectively drives transaction volumes, fees, and value of the underlying token in the future.

It would not be profitable for an attacker to spam transactions on the network as gas rebates recoup only part of the fees paid (50%). As an additional safeguard against potential abuse, uploading new contracts requires higher gas fees than normal transactions to prevent the deployment of spam contracts, but sufficiently low to allow smaller projects to upload contracts.

Gas fee rebates are automatically paid out by the network on a per-block basis


