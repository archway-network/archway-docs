---
sidebar_position: 3
---

# Running a Validator Node

This guide shows how to setup a validator node in simple steps.


::: caution
*Note:* For the moment Archway can be installed only by pulling from Docker Hub.
For example: docker pull archwaynetwork/archwayd:latest
Installing archwayd from source, coming soon!


## Hardware requirements
- Linux distribution
- `x86_64` processor
- 16GB RAM
- 500GB-2TB Storage\*

* Storage size for validators will depend on level of pruning.

## Run your validator
### Run your node 
Follow instructions in how to run your node in our [join a network guide](../node/join-a-network.md)

### Create your valdiator
Once your node is ruunning and synced you can create a validator by staking tokens.

```
archwayd tx staking create-validator \
--from <my-validator-account> \
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

Run the following command to initialize the genesis file which is required to establish a network.
```bash
archwayd init my-validator --chain-id my-chain 
```

<!-- **Note:** Please note that, we use `--home ./my-validator` flag in almost all commands in order to tell `archwayd` that we need to work on that specific directory. -->

### Initialize account

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

### Create validator transaction

We need to generate a transaction creating the validator.

```bash
archwayd gentx my-validator-account 1000000000stake \
  --commission-rate 0.01 \
  --commission-max-rate 0.1 \
  --commission-max-change-rate 0.1 \
  --pubkey $(archwayd tendermint show-validator) \
  --chain-id my-chain
```

### Add transaction to genesis file

Add the generated bonding transaction to the genesis file

```bash
archwayd collect-gentxs
```

### Start validator node

Now we can start our validator node in the local archway network

```bash
archwayd start
```

**Note:** If you have multiple nodes running on the same machine, you will get some errors on `already in use ports`, you either need to run them in isolated environments _e.g. containers_ or edit `app.toml` and `conf.toml` files to setup different port numbers.


## Run validator from docker container for testnet
::: note
We will set an alias for simplification of commands
```
alias archwayd='docker run --rm -it -v /tmp/.archway:/root/.archway archwaynetwork/archwayd:latest'
```

### Get the Docker Image
First we have to get the docker image 

```sh
docker pull archwaynetwork/archwayd:latest
```

### Init config 
first we need to initialize our validator config
```sh
archwayd init <moniker>
```

### Retrieve Genesis
To retreive genesis we first need to install jq to process json
```sh
apk add jq
```

We can now retrieve our genesis file with:
```sh
sudo sh -c 'wget -qO- <rpc_url>/genesis | jq ."result"."genesis" > /tmp/.archway/config/genesis.json'
```

### Run your node
Let's start our node in the container
```sh
  archwayd start --p2p.seeds <AddressN>@<Host_Name_orIPN>:<PORT> --x-crisis-skip-assert-invariants
```


### Create your valdiator
Once your node is ruunning and synced you can create a validator by staking tokens.
::: note
Run in a separate terminal if you ran the previous command in interactive mode

```sh
docker exec -it validator \
        archwayd tx staking create-validator \
        --from <my-validator-account> \
        --amount 1000000000udenom \
        --min-self-delegation 1000000000udenom \
        --commission-rate 0.01 \
        --commission-max-rate 0.1 \
        --commission-max-change-rate 0.1 \
        --pubkey $(archwayd tendermint show-validator) \
        --chain-id <chain_id>
```



