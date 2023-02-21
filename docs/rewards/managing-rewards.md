---
sidebar_position: 2
---

# Managing Rewards 

This guide will go through how rewards are managed on the Archway Network by explaining the important fields and operations needed to track and receive rewards. 

## Contract Metadata 
Contract Metadata is the metadata that instructs the Archway Network who owns the contract and where rewards should be sent. The metadata has three specific parameters: 

`contract_address` - The address of the deployed contract.

`owner_address` - The address of the contract's owner. This field can be both an account or contract address.

`rewards_address` - The account address that will receive the contract's rewards. This field can be either an account or a contract address. Tokens are sent to this address after executing a [withdrawal function](#withdrawing-awards). If this field is not set, the contract will not receive rewards. 

**All above addresses are bech32-encoded.**

### Setting The Contract Metadata 

The contract metadata must be set up by using the `MsgSetContractMetadata` transaction which a contract admin must sign.

```json  
{ 
  "contract_address": "archway14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sy85n2u",
  "owner_address": "archway12reqvcenxgv5s7z96pkytzajtl4lf2epyfman2",
  "rewards_address": "archway12reqvcenxgv5s7z96pkytzajtl4lf2epyfman2"
}
``` 
### Updating the Contract Metadata 
The `owner_address` is the only address that can update the metadata of a contract. This could either be an account or a smart contract's address.  Updates are completed by using the `MsgSetContractMetadata` transaction. 

If the `owner_address` is a smart contract, updates to the metadata can only be performed by using the WASM bindings. 

## Reward Storage
The rewards owed to a specific contract are stored as a separate record on the blockchain. To receive these rewards, a [withdrawal operation](#withdrawing-awards) must be executed. Developers can also track these rewards by using the [RewardsRecord object](#tracking-reward-amounts). 

## Tracking Reward Amounts 
The `RewardsRecord` object is used to track the rewards that have been calculated for a specific `rewards_address`. 

### Example Request - RewardsRecord 
```bash
archwayd q rewards rewards-records "${rewards_address}" --node "${node_url}" --output json | jq .
```
### Example Response 

```json
{
  "id": "1",
  "rewards_address": "archway12reqvcenxgv5s7z96pkytzajtl4lf2epyfman2",
  "rewards": [
    {
      "denom": "uarch",
      "amount": "10000"
    }
  ],
  "calculated_height": 100,
  "calculated_time": {
    "seconds": 1660591975,
    "nanos": 0
  }
}
```
`id` - Each Reward Record has a unique ID. This can be used to only withdraw certain reward records. 

`rewards_address` - The account address that will receive the contract's rewards. Tokens are sent to this address after executing a [withdrawal function](#withdrawing-awards) . If not set, the contract will not receive rewards. 

`denom`- The token type/denomination. uarch is the default token of the Archway Network.  

`amount`- The calculated reward amount. 

`calculated_height` - The block height of the rewards when the rewards were calculated. 

`calculated_time` - The block time of when the rewards were calculated. 


## Withdrawing Awards 

After rewards are calculated, a withdrawal operation is needed to be executed before they are sent to the `rewards_address`. 

The withdrawal operation is completed by using the `MsgWithdrawRewards` message.   

Only the address set in the `rewards_address` can claim the rewards.

### Example Request

```bash
archwayd tx rewards withdraw-rewards --records-limit 100000 --from "${rewards_address}" --node "${node_url}" --chain-id "${chain_id}" 
```
 ``record_limit`` - Is the maximum number of the Reward Records that be withdrawn. If the limit is 0, the default limit is used in the withdrawal. 

 ``record_ids`` - If you want to withdraw specific Reward Records, an array of those ids can be included.

 ``reward_address`` - The reward address that has been set in the [Contract Metadata](#contract-metadata). 

 ``node`` - Endpoint of the node to be connected to. 

 ``chain-id`` - The Archway Chain ID that the contract is on. A list of the available chain IDs can be [found here](../overview/network.md/). 

 ### Response 

If the Withdraw Rewards operations is successful, the response will show the number of reward records processed and the total amount of rewards that have been transferred to the `rewards_address`. 



## Querying Outstanding Rewards

To track what rewards have not been withdrawn and sent to the `rewards_adress` yet, use the below command: 

```bash
archwayd q rewards outstanding-rewards "${rewards_address}" --node "${node_url}" --output json | jq .
``` 

Go to the [Rewards Reference](./rewards-reference.md) page for more information on the available queries and parameters connected to the rewards.
