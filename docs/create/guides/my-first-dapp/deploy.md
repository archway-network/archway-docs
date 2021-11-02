---
sidebar_position: 4
---

# Deploying your dApp on chain

When you're ready to deploy an on chain build we can start Docker and use the `archway deploy` command.
```bash
sudo service docker start
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

From your project files open `src/contract.rs`. Near the top you'll see `pub fn instatiate` which sets state in the contract at instatiation:
```javascript
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

<!-- XXX TODO: put a video here in place of output -->

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
    address: 'wasm1rfa3scumm5y2lt6jku49hg52y2tk06pnsm9p6w',
    chainId: 'pebblenet-1',
    data: '{...}'
  },
  {
    type: 'create',
    codeId: '84',
    chainId: 'pebblenet-1',
    data: '{...}'
  }
]
```