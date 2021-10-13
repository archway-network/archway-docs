---
sidebar_position: 2
---

# Module Specifications

Archway module specifications. 

## Gas Tracking

To achieve the Archway architecture [desired properties](./overview.md), the gas tracking module follows this design:

- Wrap the [CosmWasm](../advanced/wasm#CosmWasm) VM with an Archway GasMeter to allow interception and tracking of information passed by the VM.
- During BeginBlock, the recorded information is brought to memory and processed to determine rewards for each of the contracts executed in the last block. 
- Developers can choose to take the rewards, or give the gas rebate to end users to subsidize transaction cots. To enable that choice, utilize a proxy wrapper that expects that during the instantiate call the developer can specify configuration parameters that are related to the gas reward as well as the instantiation request body. This body is consumed by the wrapper and the contract is sent only instantiation requests which means the contract interface does not need to be changed.
- Developer reward payout can happen on demand or automatically. But, the disadvantage of on demand reward is an inferior user experience and results in more transactions just to transfer the rewards. Alternatively when the reward is allocated in BeginBlock, it is automatically transferred to the designated reward address when it crosses a certain threshold. 

### Drawbacks

The Cosmos SDK does not support post-transaction processing. Archway takes into account GasLimit instead of actual gas consumption by the transaction. The good news is that the Cosmos SDK mght have this functionality in the future.
