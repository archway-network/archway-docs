---
sidebar_position: 3
title: Archway Daemon
---

# What is [Archwayd](https://github.com/archway-network/archway) really?

The `archwayd` binary is the core implementation of the Archway protocol. It leverages the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) and [CosmWasm](https://github.com/CosmWasm/cosmwasm) to reward validators and creators for their contributions to the network. The command-line interface runs a full-node of Archway and provides utilities for chain genesis, account management (keys), validators, nodes, queries and transactions.

Users familiar with [Cosmos Hub](https://github.com/cosmos/gaia) will recognize the Archway daemon is Archway's version of [Gaiad](https://hub.cosmos.network/main/getting-started/what-is-gaia.html). It's built using the same Cosmos SDK modules, but introduces a new SDK module called `x/gastracker` which monitors gas consumed by applications on the network and distributes developer rewards.

#### Cosmos SDK Modules

- `x/auth`: Accounts and signatures
- `x/bank`: Token transfers
- `x/staking`: Staking logic
- `x/mint`: Inflation logic
- `x/distribution`: Fee distribution logic
- `x/slashing`: Slashing logic
- `x/gov`: Governance logic
- `ibc-go/modules`: Inter-blockchain communication
- `x/params`: Handles app-level parameters

#### Archway SDK Modules

- `x/gastracker`: measures gas consumption and rewards developers

## Archwayd Commands

The full scope of `archwayd` commands can be viewed using command `archwayd --help`:

```bash
archwayd --help
# Outputs:
Archway Daemon (server)

Usage:
  archwayd [command]

Available Commands:
  add-genesis-account      Add a genesis account to genesis.json
  add-wasm-genesis-message Wasm genesis subcommands
  collect-gentxs           Collect genesis txs and output a genesis.json file
  config                   Create or query an application CLI configuration file
  debug                    Tool for helping with debugging your application
  export                   Export state to JSON
  gentx                    Generate a genesis tx carrying a self delegation
  help                     Help about any command
  init                     Initialize private validator, p2p, genesis, and application configuration files
  keys                     Manage your application's keys
  query                    Querying subcommands
  start                    Run the full node
  status                   Query remote node for status
  tendermint               Tendermint subcommands
  tx                       Transactions subcommands
  unsafe-reset-all         Resets the blockchain database, removes address book files, and resets data/priv_validator_state.json to the genesis state
  validate-genesis         validates the genesis file at the default location or at the location passed as an arg
  version                  Print the application binary version information

Flags:
  -h, --help                help for archwayd
      --home string         directory for config and data (default "/home/user/.archway")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "archwayd [command] --help" for more information about a command.
```

## Archwayd for Developers

If you require functionality not available in the [Developer CLI](https://www.npmjs.com/package/@archwayhq/cli), you may need to rely on `archwayd` to complete your task. Below are some examples of common queries and commands that can help guide you. 

### Query account balance

For querying an account balance, use the `bank` module.

Example:

```bash
archwayd query bank balances ${ACCOUNT_ADDRESS} --node "https://rpc.constantine-1.archway.tech:443"
```

:::note
Replace `${ACCOUNT_ADDRESS}` with your own value.
:::

### Deploy a contract

Transactions use the `tx` module. Ideally, deployments will include 3 transactions: 1) Storing the wasm on-chain, 2) Instantiating the stored wasm, and 3) Setting the contract metadata.

Upload and store the wasm on-chain:

```bash
archwayd tx wasm store path_to_wasm/my_wasm_file.wasm --gas auto --gas-prices 0.05uconst --gas-adjustment 1.4 --from ${WALLET_LABEL} --chain-id "constantine-1" --node "https://rpc.constantine-1.archway.tech:443" --broadcast-mode sync --output json -y
```

:::note
Replace `${WALLET_LABEL}` with your own value
:::

The response from storing wasm will give you the Code ID required for instantiating the contract.

Then instantiate it:

```bash
archwayd tx wasm instantiate ${CODE_ID} '{"entrypoint":"value"}' --from ${WALLET_LABEL} --label "A human readable label for this deployment" --gas auto --gas-prices 0.05uconst --gas-adjustment 1.4 --chain-id "constantine-1" --node "https://rpc.constantine-1.archway.tech:443" --broadcast-mode sync --output json -y
```

:::note
Replace `${CODE_ID}`, `'{"entrypoint":"value"}'`, `${WALLET_LABEL}` and `"A human readable label for this deployment` with your own values.
:::

The response from instantiating the contract will give you the Contract Address required for setting metadata on the contract instance.

Setting metadata on the contract instance:

```bash
archwayd tx gastracker set-contract-metadata ${CONTRACT_ADDRESS} '{ "developer_address": ${ADMINISTRATOR_ADDRESS}, "reward_address": ${ADDRESS_TO_RECEIVE_REWARDS}, "collect_premium": false, "premium_percentage_charged": 0, "gas_rebate_to_user": false }' --gas auto --gas-prices 0.05uconst --gas-adjustment 1.4 --from ${WALLET_LABEL} --chain-id "constantine-1" --node "https://rpc.constantine-1.archway.tech:443" --broadcast-mode sync --output json -y
```

:::note
Replace `${CONTRACT_ADDRESS}`, `${WALLET_LABEL}`, and `${ADMINISTRATOR_ADDRESS}`, `${ADDRESS_TO_RECEIVE_REWARDS}` and the other JSON values with your own values.
:::

### Transaction filtering

Searching transactions with custom filters is a powerful feature, to do this we use the `tx` module with the `--events` filter. See below for common filtered queries that are helpful.

#### View all transactions to a specific contract:

Use filter key `wasm._contract_address`

Example:

```bash
archwayd query txs --events 'wasm._contract_address=${CONTRACT_ADDRESS}' --node "https://rpc.constantine-1.archway.tech:443"
```

:::note
Replace `${CONTRACT_ADDRESS}` with your own value.
:::

#### View all contracts deployed by a specific developer:

User filter keys `message.sender` and `message.action`

Example:

```bash
archwayd query txs --events 'message.sender=${DEVELOPER_WALLET_ADDRESS}&message.action=/cosmwasm.wasm.v1.MsgInstantiateContract' --node "https://rpc.constantine-1.archway.tech:443"
```

:::note
Replace `${DEVELOPER_WALLET_ADDRESS}` with your own value.
:::

### Code IDs and contract metadata:

Contract data and metadata queries use the `wasm` query module.

#### Find the Code ID of a specific contract:

```bash
archwayd query wasm contract ${CONTRACT_ADDRESS} --node "https://rpc.constantine-1.archway.tech:443"
```

:::note
Replace `${CONTRACT_ADDRESS}` with your own value.
:::

#### Check if a contract's code was ever updated:

```bash
archwayd query wasm contract-history ${CONTRACT_ADDRESS} --node"https://rpc.constantine-1.archway.tech:443"
```

:::note
Replace `${CONTRACT_ADDRESS}` with your own value.
:::

#### Find the contract address of a specific Code ID:

```bash
archwayd query wasm list-contract-by-code ${CODE_ID} --node "https://rpc.constantine-1.archway.tech:443"
```

:::note
Replace `${CODE_ID}` with your own value.
:::