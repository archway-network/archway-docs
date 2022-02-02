---
sidebar_position: 3
---

# Running a Validator Node

This guide shows how to setup a validator node in simple steps.


:::caution
**Note:** For the moment Archway can be installed only by pulling from Docker Hub:

`docker pull archwaynetwork/archwayd:latest`

Installing archwayd from source, coming soon!
:::

## Hardware requirements
- Linux distribution
- `x86_64` processor
- 16GB RAM
- 500GB-2TB Storage\*

* Storage size for validators will depend on level of pruning.

## Running your validator
### Running your node 
The first step is to run a node. See the instructions [here](../node/join-a-network.md) on how to get your node up and running.

### Create your validator
Once your node is running (and synced up to date) you can create a validator by staking tokens.

```bash
archwayd tx staking create-validator \
  --from ${MY_VALIDATOR_ACCOUNT} \
  --amount 1000000000udenom \
  --min-self-delegation 1000000000udenom \
  --commission-rate 0.01 \
  --commission-max-rate 0.1 \
  --commission-max-change-rate 0.1 \
  --pubkey $(archwayd tendermint show-validator) \
  --chain-id <chain_id>
```

## Run validator on genesis
### Initialize node

Run the following command to initialize the genesis json file which is required to establish a network.
```bash
archwayd init my-validator --chain-id my-chain 
```

:::info
See [here](https://rpc.constantine-1.archway.tech/genesis) for an example of the genesis file for Constantine testnet.
::: 

<!-- **Note:** Please note that, we use `--home ./my-validator` flag in almost all commands in order to tell `archwayd` that we need to work on that specific directory. -->

### Initialize account

Create a key to hold your account. Once you run this command, your may be prompted with a password dialogue. Please enter a new password for your account.

```bash
archwayd keys add my-validator-account
```

<!-- :::note
Another way of adding your validator keys, would be to add it to the `accounts` array of `app_state` in your genesis.json file that you used for the `archwayd init` command

```json
"app_state": {
  "auth":{
    "params": {
      "max_memo_characters": "256",
      "tx_sig_limit": "7",
      "tx_size_cost_per_byte": "10",
      "sig_verify_cost_ed25519": "590",
      "sig_verify_cost_secp256k1": "1000"
    },
    "accounts": [
      // Add validator keys here
    ]
  }
}
```
::: -->

This next command lets you set the number of coins to stake.

```bash
archwayd add-genesis-account $(archwayd keys show my-validator-account -a) 1000000000stake,1000000000ARCH
```

:::info
**Note:** Make sure your account has an equal amount of coins matching the "bond denomination" of your genesis file.

```json
// genesis.json
"staking": {
  "params": {
    "unbonding_time": "1814400s",
    "max_validators": 100,
    "max_entries": 7,
    "historical_entries": 10000,
    "bond_denom": "uconst" // "uconst" is the bond denomination of Constantine testnet
  },
}
```
:::

### Create validator transaction

Next we need to generate a transaction creating the validator.

```bash
archwayd gentx my-validator-account 1000000000stake \
  --commission-rate 0.01 \
  --commission-max-rate 0.1 \
  --commission-max-change-rate 0.1 \
  --pubkey $(archwayd tendermint show-validator) \
  --chain-id my-chain
```

### Add transaction to genesis file

And now we'll add the generated bonding transaction to the genesis file

```bash
archwayd collect-gentxs
```

### Start validator node

Now we can start our validator node in the local archway network

```bash
archwayd start
```

:::tip
**Note:** If you have multiple nodes running on the same machine, you will get some errors such as `already in use ports`. 

You'll either need to run them in isolated environments _e.g. containers_ or edit the `app.toml` and `conf.toml` files to setup different port numbers.
:::


## Run validator from Docker

Since the `archwayd` binary is only available at the moment from Docker Hub.

```bash
docker run --rm -it -v /tmp/.archway:/root/.archway archwaynetwork/archwayd:latest
```

:::tip
To simplify using the Docker container you can set an alias 
`alias archwayd='docker run --rm -it -v /tmp/.archway:/root/.archway archwaynetwork/archwayd:latest'`

After setting this alias, you'll be able to use the other `archwayd` commands in this guide without typing the verbose Docker run command.
:::

### Get the Docker Image
First we have to get the docker image 

```bash
docker pull archwaynetwork/archwayd:latest
```

### Init config 
Now we can initialize our validator config
```bash
# E.g. archwayd init "main_wallet"
archwayd init ${MY_VALIDATOR_ACCOUNT_NAME}
```

### Retrieve genesis file
To retreive the genesis file we need to install jq to process json
```bash
apk add jq
```

We can now retrieve our genesis file with:
```bash
sudo sh -c 'wget -qO- ${RPC_URL}/genesis | jq ."result"."genesis" > /tmp/.archway/config/genesis.json'
```

### Run your node
Let's start our node in the container
```bash
archwayd start --p2p.seeds <AddressN>@<Host_Name_orIPN>:<PORT> --x-crisis-skip-assert-invariants
```


### Create your valdiator
Once your node is running and synced, you can create a validator by staking tokens.

:::note
If you ran the previous command in interactive mode, you'll want to run the following command in a separate terminal window 
:::

```bash
# Using docker
docker exec -it validator \
  archwayd tx staking create-validator \
  --from ${MY_VALIDATOR_ACCOUNT}> \
  --amount 1000000000udenom \
  --min-self-delegation 1000000000udenom \
  --commission-rate 0.01 \
  --commission-max-rate 0.1 \
  --commission-max-change-rate 0.1 \
  --pubkey $(archwayd tendermint show-validator) \
  --chain-id <chain_id>
```



