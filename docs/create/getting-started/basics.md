---
sidebar_position: 3
title: CLI Basics
---

# Basics

An overview of Archway developer CLI commands, options and usage.

## Archway Developer CLI

### Usage
```
archway [command] [options]
```

### Options
```
-v, --version       output the current version
-h, --help          display help for command
```

### Overview
```
accounts [options]               List available wallets or add new wallet
build                            Build current project
configure [options]              Print or modify environment settings
deploy [options]                 Deploy to network, or test deployability
faucet                           Request Testnet funds from faucet
history                          Print deployments history
instantiate [options]            Instantiate a stored contract
metadata [options]               Set the contract metadata
network                          Show network settings or migrate between networks
new                              Create a new project for Archway network
query [options] <module> [type]  Query for data on Archway network
run [options]                    Run a custom script of your own creation
store [options]                  Stores and verify a contract on-chain
test                             Run unit tests
tx [options]                     Execute a transaction on Archway network
help [command]                   display help for command
```

## Commands

### Accounts 

Lists available wallets in your keyring, or add new wallets to your keyring. 

```bash
archway accounts [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -a, --add [string]     | `archway accounts -a "main"`| Adds a new account with a specified keyring label    |
| -k, --docker           | `archway accounts -k`       | Use the docker version of `archwayd`                 |
| -h, --help             | `archway accounts -h`       | Display help for accounts command                    |

### Build

The default `build` command is just a wrapper around `cargo build`. Its default behavior can be modified by editing `config.json` at the root of your project. 

```bash
archway build [options]
```

To build an optimized wasm binary for storage on the blockchain, use the `--optimize` flag.

```bash
archway build --optimize
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| --optimize             | `archway build --optimize`  | Builds an optimized wasm file ready for deployment |
| -h, --help             | `archway build -h`          | Display help for build command                       |

:::info
**Note**: When modifying build behavior from `config.json`, don't try to export variables like `RUST_BACKTRACE=1`, they won't be instanced correctly. To export variables you can create a shell script and set your `config.json` to execute it. E.g.  `echo "RUST_BACKTRACE=1 && cargo build" > build.sh`, then in `config.json` change `"build": "cargo build",` to `"build": "bash ./build.sh",`
:::

### Configure

Prints or modifies your environment settings stored in `config.json`. Currently, a convenience function with limited functionality. While it doesn't support modifying nested values of the JSON easily, we'll be improving this later. 

```bash
archway configure [options]
```

| Option                 | Example                         | Description                                          |
| ---------------------- | ------------------------------- | ---------------------------------------------------- |
|  -m, --modify [string] | `archway configure -m "version"`| Modify a particular setting in `config.json`; command will fail if json key does not exist. |
| -h, --help             | `archway configure -h`          | Display help for configure command                   |

:::note
For detailed configuration changes, opening and modifying `config.json` with a text editor is preferable.
::: 

### Deploy

Deploys your contracts to a target network. It can be used in `--dry-run` mode to test if your Rust code will build to [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) (wasm). 

Running `deploy` with `--dry-run` enabled is equivalent to the Cargo native command `cargo wasm`. 

Without `--dry-run` enabled, `deploy` progresses through a series of tasks, most of which can be called as individual archway commands, and the order of which is:

1. **MAKE WASM** (e.g. `archway build --optimize`)
2. **CREATE ON CHAIN WASM** (e.g. `archway store`)
3. **VERIFY UPLOAD INTEGRITY** (e.g. `archway store`)
4. **INSTANTIATE CONTRACT** (e.g. `archway instantiate`)
5. **STORE DEPLOYMENT LOG** (e.g. `archway store` and `archway instatiate`)

:::tip
**Note:** The flags and options below allow you to surpress prompts, skip steps or resume a deployment. This can be helpful in the case of failing deployments.
:::

```bash
archway deploy [options]
```

| Option                 | Example                     | Description                                                    |
| ---------------------- | --------------------------- | -------------------------------------------------------------- |
| -a, --args [string]    | `archway deploy -a '{}'`    | JSON encoded constructor arguments for contract deployment     |
| -l, --label [string]   | `archway deploy -l ` "Archway dApp v1.0.0" | Label to be used for this instantiation of the contract |
| --default-label        | `archway deploy --default-label` | Use the default label for instantiating the contract. Defaults to:  `"<project_name> <project_version>"` |
| -f, --from [string]    | `archway deploy -f "main"`  | Name or address of account used to sign transactions |
| --admin-address [string] | `archway deploy --admin-address "archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq"` | Address which can perform admin actions on the contract |
| --no-build             | `archway deploy --no-build` | Do not build the project before deploying; it will fail if the wasm file is not built |
| --no-verify            | `archway deploy --no-verify` | Do not verify the wasm file uploaded on-chain matches your local version |
| --no-confirm           | `archway deploy --no-confirm` | Skip tx broadcasting prompt confirmation |
| -d, --dry-run           | `archway deploy -d`        | Test deployability by building cargo wasm release binary       |
| -k, --docker           | `archway deploy -k`         | Use the docker version of `archwayd`                           |
| -h, --help             | `archway deploy -h`         | Display help for deploy command                                |

### Faucet

Request Testnet funds from faucet

```bash
archway faucet [address] [options]
```

:::caution
The `archway faucet` command is retired as of v1.1.0.

To request funds from the faucet you should use our Discord channel.

1. Join our Discord server at https://discord.gg/dnYYcKPAX5
2. Send the following message in the 🚰｜faucet channel

`!faucet <address>`
:::

### History

Convenience command to print transaction history of your project's code uploads, instantiations and metadata. Same as you get by opening `config.json` and looking at the deployments array of the developer object.

```
archway history [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -h, --help             | `archway history -h`        | Display help for history command                     |

### Instantiate

Instantiate a contract stored with `archway store`; or, resume a failed deployment made using the `archway deploy` command which finished the storage step but failed to instantiate.

```
archway instantiate [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -c, --code-id [number]             | `archway instantiate -c 101` | Instantiate a contract stored at a specific Code ID |
| -a, --args [string]             | `archway instantiate --args '{}'`    | JSON encoded constructor arguments for contract deployment     |
| -l, --label [string]             | `archway instantiate -l "Archway dApp v1.0.0"` | Label to be used for this instantiation of the contract |
| --default-label             | `archway instantiate --default-label` | Use the default label for instantiating the contract: "[project_name] [project_version]" |
| -f, --from [string]     | `archway instantiate --from "main"` | Name or address of account to sign transactions |
| --admin-address [string]     | `archway instantiate --admin-address "archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq"` | Address which can perform admin actions on the contract (e.g. "archway1...") |
| --no-confirm           | `archway instantiate --no-confirm` | Do not prompt for confirmation when broadcasting tx |
| -k, --docker           | `archway instantiate -k`       | Use the docker version of `archwayd` |
| -h, --help             | `archway instantiate -h`        | Display help for instantiate command                     |

### Metadata

Sets the contract metadata with Archway parameters such as developer premiums and configurations for gas pooling.

```bash
archway metadata [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -c, --contract [string] | `archway metadata -c archway1aacn8927thr0cuw9jdw2wvswhlyfm4z05e6uhtr2hqx6wkgq5enszqhhvx` | Optional contract address override; defaults to last deployed  |
| -f, --from [string]     | `archway metadata --from "main"` | Name or address of account to sign transactions |
| --developer-address [string] | `archway metadata --developer-address "archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq"` | Developer address which can change metadata later on |
| --reward-address [string] | `archway metadata --reward-address "archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq"` | Reward address in which rewards will be deposited |
| --collect-premium      | `archway metadata --collect-premium` | Indicates the contract will use a premium for gas rewards |
| --premium-percentage [string] | `archway metadata --collect-premium --premium-percentage 10` | Integer percentage of premium in a range between 0 and 200 |
| --gas-rebate           | `archway metadata --gas-rebate` | Indicates contract rewards should be used for gas rebates to the user |
| --no-confirm           | `archway metadata --no-confirm` | Do not prompt for confirmation when broadcasting tx |
| --dry-run              | `archway metadata --dry-run` | Perform a simulation of a transaction without broadcasting it (default: false) |
| --flags [string]        | `archway metadata --flags "--amount 1"` | Send additional flags to `archwayd`|
| -k, --docker           | `archway metadata -k`       | Use the docker version of `archwayd` |
| -h, --help             | `archway metadata -h`       | Display help for metadata command |

### Network

Print current network settings or migrate between networks

```bash
archway network [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -m, --migrate          | `archway network -m`        | Migrates the project to another network              |
| -e, --environment [string] | `archway network -m -e "testnet"` |  Environment to use for the project (choices: "testnet") |
| -t, --testnet [string] | `archway network -m -t "constantine"` | Testnet to use for the project (choices: "constantine", "titus", "augusta", "torii") |
| -h, --help             | `archway network -h`        | Display help for network command                     |

### New

Create a new project for Archway network. Projects can be created as blank slates or from starter code templates.

```
archway new [name?] [options]
```
| Argument               | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| [name]                 | `archway new "project-name"`| Project name                                         |

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -k, --docker           | `archway new -k`            | Use the docker version of `archwayd` (default: true) |
| --no-docker            | `archway new --no-docker`   | Use the binary version of `archwayd`                 |
| -e, --environment [string] | `archway new -e "testnet"` |  Environment to use for the project (choices: "testnet") |
| -t, --testnet [string] | `archway new -t "constantine"` | Testnet to use for the project (choices: "constantine", "titus", "augusta", "torii") |
| --template [string]    | `archway new --template "increment"` | Project template to use
| --no-template          | `archway new --no-template` | Do not prompt for a project template                 |
| --no-build             | `archway new --no-build`    | Do not build the project after setup                 |
| -h, --help             | `archway new -h`            | Display help for new command                         |

### Query 

Query for data on Archway network

```bash
archway query <module> [type] [options]
```

| Argument               | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| [module]               | `archway query contract-state smart` | Query module to use. Available query modules: `code`, `contract`, `contract-history`, `contract-state`, `list-code`, `list-contract-by-code` |
| [type]                 | `archway query contract-state smart` | Subcommands (if required by query module); available types: `smart`, `code_id`, `all`, `raw` |

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| *-a, --args [string]   | `archway query contract-state smart --args '{"entrypoint_name": {}}'` | JSON encoded arguments for query. Calls a contract's `query` entrypoint. |
| -f, --flags [string]   | `archway query contract-state smart --args '{"entrypoint_name": {}}' -f '--height 361880'` | Send additional flags to `archwayd` by wrapping in a string; e.g. "--height 492520 --limit 10" |
| -c, --contract [string] | `archway query contract-state smart --args '{"entrypoint_name": {}}' -c "archway1zh9gzcw3j5jd53ulfjx9lj4088plur7xy3jayndwr7jxrdqhg7jq9twww7"` |  |
| -k, --docker           | `archway query contract-state smart --args '{"entrypoint_name": {}}' -k` | Use the docker version of `archwayd` |
| -h, --help             | `archway query -h`          | Display help for query command                       |
`*` = required option

### Run

Run a custom script of your own creation. Script definitions must be added to the `developer.scripts` object of `config.json`.

```bash
archway run [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| *-s, --script [key]    | `archway run -s build`      | Name of script to be run as defined in `config.json` |
| -k, --docker           | `archway run -s scriptname -k` | Use the docker version of `archwayd`              |
| -h, --help             | `archway run -h`            | Display help for run command                         |
`*` = required option

### Store

Store and verify a contract on chain. "Storing" will upload your optimized wasm binary to the blockchain. "Verifying" will download the wasm binary stored on chain, and verify its checksum matches your locally built file.

```
archway store [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -f, --from [string]    | `archway store --from "main"` | Name or address of account to sign transactions |
| --no-confirm           | `archway store --no-confirm` | Do not prompt for confirmation when broadcasting tx |
| --no-verify            | `archway store --no-verify` | Do not verify the wasm file uploaded on-chain |
| --no-store             | `archway store --no-store` | Do not upload the wasm file on-chain (uses the latest Code ID in the deployments history of `config.json`) |
| -k, --docker           | `archway store -k`       | Use the docker version of `archwayd` |
| -h, --help             | `archway store -h`        | Display help for store command                     |

### Test

Runs your unit tests. Unless you modified your scripts in `config.json`, this command is equivalent to running `cargo unit-test`

```
archway test [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -h, --help             | `archway test -h`           | Display help for test command                        |

### Tx

Execute a transaction on Archway network

```
archway tx [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -c, --contract [address] | `archway tx -a '{"entrypoint_name":{}}' -c 'archway1gkwezqxcpyjayxvvxfnqajqvmw98w2hessy3lr'` |  Optional contract address override; defaults to last deployed |
| -f, --from [string]    | `archway tx -f "main"`      | Name or address of account used to sign transactions |
| -a, --args [string]    |`archway tx -a '{"entrypoint_name":{}}'` | JSON encoded arguments to execute in transaction; defaults to "{}" |
| --no-confirm           | `archway tx --no-confrim`   | Skip tx broadcasting prompt confirmation             |
|  --dry-run             | `archway tx --dry-run`      | Perform a simulation of a transaction without broadcasting it (default: false) |
| -f, --flags [string]   | `archway tx -f "--amount 1000uarch"` | Send additional flags to `archwayd` by wrapping in a string; e.g. "--dry-run --amount 1000uarch" |
| -k, --docker           | `archway tx -k`             | Use the docker version of `archwayd`                 |
| -h, --help             | `archway tx -h`             | Display help for tx command                          |