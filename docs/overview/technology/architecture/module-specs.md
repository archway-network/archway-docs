---
sidebar_position: 2
---

# Module Specifications

## Gas Tracking
In order to achieve our [desired properties](./overview.md) we have designed a gas tracking module that:

- Wrap the [CosmWasm](../advanced/wasm#CosmWasm) VM with our own GasMeter, this allows us to intercept information passed by the VM and track it.
- During BeginBlock, the recorded information brought to memory and processed to determine rewards for each of the contracts executed in the last block. 
- Developers can choose to take the rewards, or give the gas rebate to end users to subsidize transaction cots. To enable that we utilize our proxy wrapper which expects that during the instantiate call developer can specify configuration parameters related to the gas reward as well as the instantiation request body. This body is consumed by the wrapper and the contract is sent only instantiation requests which means the contract interface does not need to be changed
- Developer reward payout can happen either on demand or automatically. But, disadvantage of on demand is inferior user experience and far more transactions just to transfer the rewards, so alternatively when the reward is allocated in BeginBlock, if it crosses a certain threshold it is automatically transferred to the designated reward address

### Drawbacks
- Cosmos-SDK does not support post transaction processing, we are only taking into account GasLimit instead of actual gas consumption by the transaction. Good news is that cosmos-sdk will have this functionality in the future so we will resolve this issue later on.
