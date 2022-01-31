---
sidebar_position: 4
---

# Joining a Network


## Cleaning up

Let's first cleanup our network. This is needed if you already have a genesis file.

```bash
archwayd unsafe-reset-all
rm -rf ~/.app
```

**Note**: This command will remove all data and configs you already set.

## Initialize node
Run the following command to initialize the genesis file which is required to establish a network.
```bash
archwayd init my-validator --chain-id my-chain 
```

<!-- **Note:** Please note that, we use `--home ./my-validator` flag in almost all commands in order to tell `archwayd` that we need to work on that specific directory. -->
## Retrieve Genesis file
Download the genesis file from a validator node
```bash
wget -qO- <validator_url>/genesis| jq ."result"."genesis" > ~/.archway/config/genesis.json
```

## Initialize account

Create a key to hold your account. Once you run this command, your may be prompted with a password dialogue. Please enter a new password for your account.

```bash
archwayd keys add <my-validator-account>
```

## Join the network

Start the archway and join the network

```sh
archwayd start --p2p.seeds <Address1>@<Host_Name_OR_IP1>:<PORT1>,<Address2>@<Host_Name_OR_IP2>:<PORT2>,<Address3>@<Host_Name_OR_IP3>:<PORT3>, ...<AddressN>@<Host_Name_OR_IPN>:<PORTN> --x-crisis-skip-assert-invariants
```
