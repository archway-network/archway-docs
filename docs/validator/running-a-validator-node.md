---
sidebar_position: 3
---

# Running a Validator Node

This guide shows how to setup a validator node in simple steps.


:::caution
**Note:** Archway can be installed only by pulling from Docker Hub:

`docker pull archwaynetwork/archwayd:latest`

Installing archwayd from source is coming soon!
:::

## Hardware requirements

- Linux distribution
- x86_64 processor
- 16 GB RAM
- 500 GB to 2 TB storage\*

* Storage size for validators depends on level of pruning.

## Running your validator

### Running your node 

The first step is to run a node. See the [Joining a Network](../node/join-a-network.md) doc for instructions on how to get your node up and running.

### Create your validator

After your node is running and synced, you can create a validator by staking tokens:

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

To initialize the genesis json file that is required to establish a network:

```bash
archwayd init my-validator --chain-id my-chain 
```

:::info
See this example [genesis file](https://rpc.constantine-1.archway.tech/genesis) for the Constantine testnet.
::: 

<!-- **Note:** The `--home ./my-validator` flag in almost all commands tells `archwayd` to work on that specific directory. -->

### Initialize account

Create a key to hold your account:

```bash
archwayd keys add my-validator-account
```

After you run this command, you are prompted with a password dialogue. Enter a new password for your account.

<!-- :::note
Another way of adding your validator keys is to add the validator keys to the `accounts` array of `app_state` in the `genesis.json` file that you used for the `archwayd init` command:

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

Now, set the number of coins to stake:

```bash
archwayd add-genesis-account $(archwayd keys show my-validator-account -a) 1000000000stake,1000000000ARCH
```

:::info
**Note:** Your account must have an equal amount of coins that match the bond denomination (`"bond_denom"`) in your genesis file.

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

Next, you must generate a transaction to create the validator:

```bash
archwayd gentx my-validator-account 1000000000stake \
  --commission-rate 0.01 \
  --commission-max-rate 0.1 \
  --commission-max-change-rate 0.1 \
  --pubkey $(archwayd tendermint show-validator) \
  --chain-id my-chain
```

### Add transaction to genesis file

Add the generated bonding transaction to the genesis file:

```bash
archwayd collect-gentxs
```

### Start validator node

Now, start your validator node in the local Archway network:

```bash
archwayd start
```

:::tip
**Note:** If you have multiple nodes running on the same machine, errors like `already in use ports` are returned. 

To proceed, run each node in isolated environments (Docker containers) or edit the `app.toml` and `conf.toml` files to setup different port numbers.
:::


## Run validator from Docker

The `archwayd` binary is available only from Docker Hub:

```bash
docker run --rm -it -v /tmp/.archway:/root/.archway archwaynetwork/archwayd:latest
```

:::tip
To simplify using the Docker container, set an alias
`alias archwayd='docker run --rm -it -v /tmp/.archway:/root/.archway archwaynetwork/archwayd:latest'`

After setting this alias, you can use the other `archwayd` commands without typing the verbose Docker run command.
:::

### Get the Docker image

First, get the docker image:

```bash
docker pull archwaynetwork/archwayd:latest
```

### Init config 

Now, initialize your validator config:

```bash
# archwayd init "main_wallet"
archwayd init ${MY_VALIDATOR_ACCOUNT_NAME}
```

### Retrieve genesis file

To retrieve the genesis file, install [jq](https://stedolan.github.io/jq/) (lightweight and flexible command-line JSON processor):

```bash
apk add jq
```

Now, retrieve your genesis file:

```bash
sudo sh -c 'wget -qO- ${RPC_URL}/genesis | jq ."result"."genesis" > /tmp/.archway/config/genesis.json'
```

### Run your node

Start your node in the Docker container:

```bash
archwayd start --p2p.seeds <AddressN>@<Host_Name_orIPN>:<PORT> --x-crisis-skip-assert-invariants
```


### Create your validator

After your node is running and synced, you can create a validator by staking tokens.

:::note
If you ran the previous command in interactive mode, you must run the following command in a separate terminal window. 
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



