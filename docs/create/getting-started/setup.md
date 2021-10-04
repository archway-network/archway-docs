---
sidebar_position: 2
---

# Setup

A new Archway project is a Rust project that will compile to `wasm` using the `wasmd` binary, which is an implementation of a cosmos zone with `wasm` smart contracts enabled.

Let's setup a new project, using the [Archway developer CLI](https://github.com/archway-network/archway-cli)

## Creating a project

The `archway new` command starts a new project. You can press `enter` to accept the default options for any of the project configuration questions.

```
archway new
```

Outputs: 
```
> Creating new Archway dApp...
> Configure environment (Y/N default: N)?:
> Use starter template (Y/N default: N)?:
```

## Configuring a project

When you've created a new project, navigate to the folder where the project was installed and print your config using the command `archway configure`. 

If this configuration isn't to your liking, you can modify it by editing the `config.json` file in the root folder of the project.

```
cd my-project
archway configure
```

Outputs:
```
> Printing environment settings...
> {
>   title: 'My Project',
>   version: '0.0.1',
>   network: {...},
>   developer: {...},
>   path: '/home/my-system-path/my-project',
>   type: 'Increment'
> } 
```

The `type` parameter simply keeps track of which "starter template" you used during project creation.

The `network` parameter refers to environment specific settings for the network you're working. Supported network types are `mainnet`, `testnet` and `localhost`.

The `developer` object contains a history of your deployments. It also holds default and custom scripts for Archway commands for building, testing, optimizing and deploying your project. While the `scripts` parameter gives you granular control over how your project is compiled and executed, at the same time it already "just works" and doesn't require tinkering.

## Network settings and migrating between networks

During a project's development cycle you'll likely want to migrate or change your network settings. For example, switching from `testnet` to a `mainnet` deployment.

To which network you're currently working on use the command `archway network`. This will print your network settings and give you the option to migrate to another network

```
archway network
```

Outputs:
```
> Printing network settings...
> 1. Testnet*
> 2. Localhost
> 3. Mainnet
> Migrate to another network (Y/N default: N)?:
> Ok!
```

If you migrate between networks by answering `y` or `yes` to the migration question and following the additional questions, your previous deployments history and script customisations will remain in tact. 