---
sidebar_position: 2
---

# Gas Rebates 
Unlike existing smart contract platforms, Archway does not burn gas fees or distribute them entirely to the validators or miners. Instead, Archway splits the collected gas fees between dApp developers and validators.

The network provides a configurable parameters that can be adjusted over time to determine the gas rebate distribution for validators and dApps.

From the dApp’s perspective, a contract receives a 50% rebate on all gas paid. From the validator’s perspective, foregoing a portion of rewards in the near-term effectively drives transaction volumes, fees, and value of the underlying token in the future.

It would not be profitable for an attacker to spam transactions on the network as gas rebates recoup only part of the fees paid (50%). As an additional safeguard against potential abuse, uploading new contracts requires higher gas fees than normal transactions to prevent the deployment of spam contracts, but sufficiently low to allow smaller projects to upload a contract.

Gas fee rebates are automatically paid out by the network on a per-block basis


