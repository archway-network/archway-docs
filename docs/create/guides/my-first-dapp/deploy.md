---
sidebar_position: 4
---

# Deploying your contract on chain

:::note
Before starting, make sure that [Docker is installed and running](https://www.docker.com/get-started) on your system.
:::

When you're ready to deploy an on-chain build, we can use the `archway deploy` command.

```bash
archway deploy
```

To skip the CLI asking for default values required by your dApp, include constructor arguments using the `--args` parameter. Format your constructor parameters as a `JSON` encoded string.

```bash
archway deploy --args '{"my_key":"my value"}'
```

Since we cloned the `Increment` starter template, try deploying with your `counter` argument set to `0`:

Example:

```bash
archway deploy --args '{"count":0}'
```

:::note
If you deploy without using `--args` you'll be prompted by the CLI to enter that information. If your dApp contract doesn't take any constructor arguments use `'{}'` to denote `null` arguments.
:::

So why are we sending our constructor as `{"count":0}` and how can we verify it's correct?

From your project files open `src/contract.rs`. Near the top, you'll see the function `pub fn instantiate`, which works as a constructor and sets the initial state of the contract:

```rust
pub fn instantiate(
  deps: DepsMut,
  _env: Env,
  info: MessageInfo,
  msg: InstantiateMsg,
) -> Result<Response, ContractError> {
  let state = State {
    count: msg.count, // Here's our count declaration
    owner: info.sender.clone(), // Contract owner is wallet that sent tx
  };
  STATE.save(deps.storage, &state)?; // Save the state
  // More code...
}
```

`archway deploy` is a developer super command that produces a lot of output. It doesn't make sense to list all of it here, instead let's look at a step-by-step anatomy of what the command does.

There are 5 steps in total:

1. **MAKE WASM** - _Produces `wasm` executable optimized and compressed with `cosmwasm/rust-optimizer`_
2. **CREATE ON CHAIN WASM** - _Uploads `wasm` executable on chain_
3. **VERIFY UPLOAD INTEGRITY** - _Downloads the uploaded `wasm` and verifies on chain version matches checksum of local build_
4. **INSTANTIATE CONTRACT** - _Creates an instance of the uploaded contract_
5. **STORE DEPLOYMENT LOG** - _Creates log entries for steps 2 (upload) and 4 (instantiation) in `config.json`_

If you deployed successfully now you can query and transact with your dApp.

If you're unsure, or suspect something may have gone wrong, you can always check your deployments history using the `archway history` command, or by opening `config.json` at the root of the project and looking at the `deployments` array.

In your history you should see 2 transactions were created:

- the `create` transaction when it was uploaded to the chain
- the `instantiate` transaction which made it possible to be queried and transacted with

```bash
archway history
```

Example output:

```bash
Printing deployments...

[
  {
    type: 'instatiate',
    address: 'archway1rfa3scumm5y2lt6jku49hg52y2tk06pnsm9p6w',
    chainId: 'constantine-1',
    data: '{...}'
  },
  {
    type: 'create',
    codeId: '84',
    chainId: 'constantine-1',
    data: '{...}'
  }
]
```

# Configuring your deployment

Now that the dApp is deployed it's recommended to set its metadata. This will configure the smart contract to collect develop premiums, rewards and can be used to enable gas rebates with a pooling account.

To set contract metadata, use the command:

```bash
archway metadata
```

Example output:

```bash
$ archway metadata
✔ Send tx from which wallet in your keychain? (e.g. "main" or "archway1...") … docker
✔ Developer address which can change the metadata later on (e.g. "archway1...") … archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq
✔ Enter an address to receive developer rewards (e.g. "archway1...") … archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq
✔ Enable a premium on rewards? (enabling this feature will automatically disable gas rebate) … no
✔ Use the contract rewards for gas rebates to the user? … yes

Setting metadata for contract archway1aacn8927thr0cuw9jdw2wvswhlyfm4z05e6uhtr2hqx6wkgq5enszqhhvx on constantine-1...
Enter keyring passphrase: *[hidden]*

# Tx. logs and confirm broadcast...

Successfully set contract metadata on tx hash 6AAD95F173364D5E2E4B1715EC3A834CC8992143610B80C800D199D59D19D329
```