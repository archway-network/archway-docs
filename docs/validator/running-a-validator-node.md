---
sidebar_position: 3
---

# Running a Validator Node

This guide shows how to setup a validator node in simple steps.

## Initialize node

<!-- First let's create a directory to store all node's data and config.

```bash
mkdir my-validator
``` -->

Run the following command to initialize the genesis file which is required to establish a network.
```bash
archwayd init my-validator --chain-id my-chain 
```

<!-- **Note:** Please note that, we use `--home ./my-validator` flag in almost all commands in order to tell `archwayd` that we need to work on that specific directory. -->

## Initialize account

Create a key to hold your account. Once you run this command, your may be prompted with a password dialogue. Please enter a new password for your account.

```bash
archwayd keys add my-validator-account
```

Add that key into the genesis.app_state.accounts array in the genesis file.

**Note:** this command lets you set the number of coins. Make sure this account has some coins
with the genesis.app_state.staking.params.bond_denom denom, the default is staking.

```bash
archwayd add-genesis-account $(archwayd keys show my-validator-account -a) 1000000000stake,1000000000ARCH
```

## Create validator transaction

We need to generate a transaction creating the validator.

```bash
archwayd gentx my-validator-account 1000000000stake \
  --commission-rate 0.01 \
  --commission-max-rate 0.1 \
  --commission-max-change-rate 0.1 \
  --pubkey $(archwayd tendermint show-validator) \
  --chain-id my-chain
```

## Add transaction to genesis file

Add the generated bonding transaction to the genesis file

```bash
archwayd collect-gentxs
```

## Start validator node

Now we can start our validator node in the local archway network

```bash
archwayd start
```

**Note:** If you have multiple nodes running on the same machine, you will get some errors on `already in use ports`, you either need to run them in isolated environments _e.g. containers_ or edit `app.toml` and `conf.toml` files to setup different port numbers.