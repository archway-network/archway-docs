---
sidebar_position: 9
---

# Staking
Archway uses a PoS(Proof of Stake) algorithim as its consensus mechanism. This system encourages ARCH holders to bond their tokens and earn rewards while doing so.

You can stake by:
- [Runing a validator](./validator/running-a-validator-node.md)
- [Delegating](./staking.md#Delegate)

## Delegate
You can stake by delegating your tokens to validators who process transactions and run the network.

This allows ARCH holders that don't have the skills or desire to run a validator to participate in securing the network and be rewarded.

### CLI

#### Installation
The first thing we need to in order to delegate our stake is to install the archwya CLI, you can find how to do this in our [installation guide](./create/getting-started/install.md)

#### Create Account
To generate an account, use the following command:

```
archwayd keys add <yourKeyName>
```

The command will generate a 24-words mnemonic and save the private and public keys for account 0 at the same time. Each time you want to send a transaction, you will need to unlock your system's credentials store. If you lose access to your credentials storage, you can always recover the private key with the mnemonic.

- `<yourKeyName>` is the name of the account. it is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction.
- You can add the optional `--account` flag to specify the path (0, 1, 2, ...) you want to use to generate your account. By default, account 0 is generated.

##### Warning
After securing your mnemonic, you can delete your bash history to ensure no one can retrieve it
```
history -c
rm -rf ~/.bash_history`
```

#### Connecting to the network
In order to delegate your stake you have to either [run your node](./node/join-a-network.md) or you can connect to a trustworthy operator.

Malicious operator could return incorrect query results or censor your transactions. However, they will never be able to steal your funds, as your private keys are stored locally on your computer or ledger device. Possible options of full-node operators include validators, wallet providers or exchanges.

in order to connect to the network we must 

##### Config CLI
We must set the default value for the node we are connecting to
```
archwayd config node <host>:<port>
```
then let us set the default value for `trust-node`flag: 

```
archwayd config trust-node false

// Set to true if you run a light-client node, false otherwise

```

Finally let's set up the chain ID of the network we want to interact with

```
archwayd config chain-id constantinople
```

#### Send funds
In order to delegate we need to send a delegate transaction to a validator

```
archway tx staking delegate <validatorAddress> <amountToBond> --from <yourKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>
```

##### Useful Commands
Delegators might find 
```
// Bond a certain amount of tokens to a given validator
// ex value for flags: <validatorAddress>=archway18thamkhnj9wz8pa4nhnp9rldprgant57pk2m8s, <amountToBound>=10000000uatom, <gasPrice>=0.0025uatom

archwayd tx staking delegate <validatorAddress> <amountToBond> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>


// Redelegate a certain amount of tokens from a validator to another
// Can only be used if already bonded to a validator
// Redelegation takes effect immediately, there is no waiting period to redelegate
// After a redelegation, no other redelegation can be made from the account for the next 3 weeks
// ex value for flags: <stcValidatorAddress>=archway18thamkhnj9wz8pa4nhnp9rldprgant57pk2m8s, <amountToRedelegate>=100000000uatom, <gasPrice>=0.0025uatom

archwayd tx staking redelegate <srcValidatorAddress> <destValidatorAddress> <amountToRedelegate> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

// Withdraw all rewards
// ex value for flag: <gasPrice>=0.0025uatom

archwayd tx distribution withdraw-all-rewards --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>


// Unbond a certain amount of tokens from a given validator
// You will have to wait 3 weeks before your tokens are fully unbonded and transferrable
// ex value for flags: <validatorAddress>=archway18thamkhnj9wz8pa4nhnp9rldprgant57pk2m8s, <amountToUnbound>=10000000uatom, <gasPrice>=0.0025uatom

archwayd tx staking unbond <validatorAddress> <amountToUnbond> --from <delegatorKeyName> --gas auto --gas-adjustment 1.5 --gas-prices <gasPrice>

```

### Keplr

The Archway network is a Proof-Of-Stake (PoS) blockchain, meaning that the weight of validators is determined by the amount of staking tokens (ARCHs) bonded as collateral. These ARCHs can be self-delegated directly by the validator or delegated to them by other ARCH holders.

Any user in the system can declare their intention to become a validator by sending a `create-validator` transaction. From there, they become validator candidates.

The weight (i.e. voting power) of a validator determines whether or not they are an active validator

Delegators are ARCH holders who cannot, or do not want to run a validator themselves. ARCH holders can delegate ARCHs to a validator and obtain a part of their revenue in exchange.

Now let's see how we can delegate some tokens to a validator.

#### Staking

First open your `keplr` browser extension and click on the `Stake` button.

**Note:** Make sure to deposit some tokens beforehand.

![](./assets/staking01.png)

Once you click on the `Stake` button, the `keplr` extension opens the `keplr web wallet`. 
Here you can see a list of validators, choose the one you want and click on `Manege >`.

**Warning:** Please do a proper research about the validator before staking any tokens to them.

![](./assets/staking02.png)

Let's pick one.

![](./assets/staking03.png)

A window opens showing the website of the validator with some extra information.
Click on the `Delegate` button.

![](./assets/staking04.png)

Write the amount of tokens that you want to stake.

**Note:** Since there is a transaction fee, make sure not to delegate all your tokens.

![](./assets/staking05.png)

Once we click on the `Delegate` button, we see the following window. 
Here we can select the transaction fees, if we want our transaction to be processed faster we can offer a higher fee.
![](./assets/staking06.png)

Let's click on the `Set Fee` button.

Now the following page is shown.
Here we need to make sure the validator address is correct before approving it.

![](./assets/staking07.png)

We can see the validator address in their website. Now we see the address is correct, so let's approve it.
![](./assets/staking08.png)

It takes a few moments for the transaction to get through. After that we can open our `keplr` extension to see the updates on our account.

![](./assets/staking09.png)

#### Claiming the Staking Reward

After some time, we can see the staking reward to be claimed.

![](./assets/staking10.png)

In order to claim a reward, click on the `Claim` button. 
The following page is shown. 
Again we just select a fee for the transaction and click on the `Set Fee` button.

![](./assets/staking11.png)

After few moments, we can see the updates on our account.

![](./assets/staking12.png)

**Note:** Since there is a transaction fee, it is recommended to claim the reward once in a while.

#### Un-delegate and Re-delegate

To undelegate our staked tokens, we can click on the validator from the list of validators in our `keplr web wallet` and click on the `Undelegate` button.
**Note:** Please note that in cosmos based networks, we need to wait `21` days for our tokens to be released.

![](./assets/staking13.png)

If we want to redelegate our tokens to another validator, we can simply click on the `Redelegate` button from the drop down.

![](./assets/staking14.png)

Then select another validator from the list and the rest of the process is just like normal delegation.

![](./assets/staking15.png)
![](./assets/staking16.png)


_Screenshots from: https://youtu.be/KYntLOLnLdg_
