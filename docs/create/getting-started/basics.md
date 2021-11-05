---
sidebar_position: 3
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
network                          Show network settings or migrate between networks
new                              Create a new project for Archway network
query [options] <module> [type]  Query for data on Archway network
run [options]                    Run a custom script of your own creation
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
| -a, --add [string]     | `archway accounts -a 'main'`| Adds a new account with a specified keyring label    |
| -k, --docker [boolean] | `archway accounts -k true`  | Use (or, don't use) Docker keyring for accounts list |
| -h, --help             | `archway accounts -h`       | Display help for accounts command                    |

### Build

The `build` command is just a wrapper around `cargo build`. Its default behavior can be modified by editing `config.json` at the root of your project. 

```bash
archway build
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
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
|  -m, --modify [key]    | `archway configure -m 'version'`| Modify a particular setting; command will fail if `key` does not yet exist. |
| -h, --help             | `archway configure -h`          | Display help for configure command                   |

:::note
For detailed configuration changes, opening and modifying `config.json` with a text editor is preferable.
::: 

### Deploy

Deploys your contracts to a target network. It can be used in `--dryrun` mode to test if your Rust code will build to [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) (wasm). 

Running `deploy` with `--dryrun` enabled is equivalent to the Cargo native command `cargo wasm`. Without `--dryrun` enabled, `deploy` progresses through a series tasks, the order of which is:

1. **MAKE WASM**
2. **CREATE ON CHAIN WASM**
3. **VERIFY UPLOAD INTEGRITY**
4. **INSTANTIATE CONTRACT**
5. **STORE DEPLOYMENT LOG**

```bash
archway deploy [options]
```

| Option                 | Example                     | Description                                                    |
| ---------------------- | --------------------------- | -------------------------------------------------------------- |
| -a, --args [value]     | `archway deploy -a '{}'`    | JSON encoded constructor arguments for contract deployment     |
| -d, --dryrun           | `archway deploy -d`         | Test deployability by building cargo wasm release binary       |
| -k, --docker [value]   | `archway deploy -k false`   | Use, or don't use, Docker Archway daemon and keyring to deploy. Can be used to override config value in `config.json` |
| -h, --help             | `archway deploy -h`         | Display help for deploy command                                |

### Faucet

Request Testnet funds from faucet

```bash
archway faucet [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -k, --docker [value]   | `archway faucet -k true`    | Use Docker for accessing Archway daemon keyring      |
| -h, --help             | `archway faucet -h`         | Display help for faucet command                      |

### History

Convenience command to print transaction history of your project's code uploads and instantiations. Same as you get by opening `config.json` and look at the deployments array of the developer object.

```
archway history 
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -h, --help             | `archway history -h`        | Display help for history command                     |

### Network

Print current network settings or migrate between networks

```bash
archway network
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -h, --help             | `archway network -h`        | Display help for network command                     |

:::info
Support for migrating between networks is currently disabled but scheduled to roll out in release `1.0.3-beta`.
:::

### New

Create a new project for Archway network. Projects can be created as blank slates or from starter code templates.

```
archway new
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -h, --help             | `archway new -h`            | Display help for new command                         |

:::info
Support for starting blank slate projects is currently disabled but scheduled to roll out in release `1.0.4-beta`.
:::

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
| *-a, --args [value]    | `archway query contract-state smart --args '{"entrypoint_name": {}}'` | JSON encoded arguments for query. Calls a contract's `query` entrypoint. |
| -k, --docker [value]   | `archway query contract-state smart -k true` | Use Docker for accessing Archway daemon |
| -f, --flags [flags]    | *currently buggy            | Send additional query flags to archwayd by wrapping them in a string |
| -h, --help             | `archway query -h`          | Display help for query command                       |
`*` = required option

### Run

Run or call a script defined in `config.json` (including one of your own creation). Script definitions must be added to the `developer.scripts` object of `config.json`.

```bash
archway run [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| *-s, --script [key]    | `archway run -s build`      | Name of script to be run as defined in `config.json` |
| -k, --docker [value]   | `archway run -s scriptname -k true` | Use, or don't use, Docker version of Archway daemon |
| -h, --help             | `archway run -h`            | Display help for run command                         |

### Test

Runs your unit tests. Unless you modified your scripts in `config.json`, this command is equivalent to running `cargo unit-test`

```
archway test
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -h, --help             | `archway test -h`           | Display help for test command                        |

### Tx

```
archway tx [options]
```

| Option                 | Example                     | Description                                          |
| ---------------------- | --------------------------- | ---------------------------------------------------- |
| -h, --help             | `archway tx -h`             | Display help for tx command                          |
| -a, --args [value]     |`archway tx -a '{"entrypoint_name":{}}'` | JSON encoded arguments to execute in transaction, defaults to "{}". Calls a contract's `execute` entrypoint. |
| -f, --flags [flags]    | `archway tx -a '{"entrypoint_name":{}}' -f '--amount 1000uarch'` | Send additional flags to archwayd by wrapping in a string; e.g. "--dry-run --amount 1000uarch" |
| -c, --contract [address] | `archway tx -a '{"entrypoint_name":{}}' -c 'archway1gkwezqxcpyjayxvvxfnqajqvmw98w2hessy3lr'` |  Optional contract address override; defaults to last deployed |
| -k, --docker [value]   | `archway tx -a '{"entrypoint_name":{}}' -k true` | Use, or don't use, Docker version of Archway daemon |