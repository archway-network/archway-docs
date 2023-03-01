---
objectID: community|governance
parentSection: Participate
parentSectionPath: /community
title: Submit a Governance Proposal
description: Learn how to submit governance proposals and have your voice heard
---

# Governance Proposal

## On-Chain Voting Parameters

For governance proposals to enter voting, a proposal must be submitted with a deposit of the amount defined by the **min_deposit** 
param in 
the 
governance module before the deposit end time. A deposit is refunded if a proposal is approved or rejected. A deposit is burned if a 
proposal is 
vetoed.

- **Proposal minimum deposit:** 1 CONST
- **Depositing period:** 5 minutes
- **Voting period:** 7 minutes
- **Quorum** (min % of total voting power participated for results to be valid): 1%
- **Threshold** (min % of Yes excluding Abstain votes for a proposal to be accepted): More than 5% of Yes votes excluding Abstain 
votes
- **VetoThreshold**  (min % of NoWithVeto votes for a proposal to be rejected): 2.5%

If there are sufficient **NO WITH VETO** votes, the depositors will lose their funds. The depositors will also lose their funds if a 
quorum of 
over 
1% is not reached. In each case, the funds will be burned. 

You can query governance parameters through the CLI, for example with:

`archwayd q gov params --node https://rpc.constantine-1.archway.tech:443`

## **Determining Voting Power** 

Voting power is determined by stake weight at the end of the voting period and is proportional to the number of total CONST 
participating in 
the 
vote. Only bonded CONST tokens count towards the voting power for a governance proposal. 

Unbonded CONSTs will not count toward a vote or quorum.

Only tokens staked with active validators will have voting power. Inactive validators are able to cast a vote, but their voting power 
(including 
the backing of their delegators) will not count toward the vote if they are not in the active set when the voting period ends.

## **Preliminary Forum Discussion**
Proposals should be submitted to the [Discourse forum](https://gov.archway.io/) for review and discussion prior 
to 
being submitted on-chain.

This will enable preliminary exploration amongst community members to fully understand the scope of the proposal, provide input/
feedback, 
and 
ultimately improve it before pushing toward a formal on-chain vote. 

Proposals should be posted to the forum for a minimum of 3 days before being submitted for a vote on-chain.

Note: software upgrade proposals will not need to follow this process.

# **Governance Process**

## **Proposal Types**

Any proposal, idea, or initiative for the Archway protocol coming from a community member or contributor follows a governance process 
composed of 
several steps:

There are several types of proposals currently supported by Archway.

The ones that are usually most interesting for the community are:

- **Simple Proposal:** This type of proposal does not have its own specific type, and it is a general-purpose proposal.
- **Community Pool Spend Proposal** (`community-pool-spend`): This type of proposal allows valuable initiatives and projects to be 
funded by 
the 
community pool
- **Parameter Change proposal** (`param-change`): This type of proposal allows updating chain parameters

In addition to the above, Archway also supports the following proposals types:

- **Cancel Software Upgrade** (`cancel-software-upgrade`): Cancel the current software upgrade proposal
- **Clear Contract Admin** (`clear-contract-admin`):  Submit a clear admin for a contract to prevent further migrations proposal          
- **Execute Contract** (`execute-contract`): Submit a execute wasm contract proposal (it can be run by any address)
- **IBC Upgrade** (`ibc-upgrade`): Submit an IBC upgrade proposal
- **Instanciate Contract** (`instantiate-contract`): Submit an instantiate wasm contract proposal     
- **Migrate Contract** (`migrate-contract`): Submit a migrate wasm contract to a new code version proposal
- **Pin Codes** (`pin-codes`):Submit a pin code proposal for pinning a code to cache
- **Set Contract Admin** (`set-contract-admin`): Submit a new admin for a contract proposal
- **Software Upgrade** (`software-upgrade`): Submit a software upgrade proposal      
- **Sudo Contract** (`sudo-contract`): Submit a sudo wasm contract proposal (to call privileged commands)
- **Unpin Codes** (`unpin-codes`): Submit a unpin code proposal for unpinning a code to cache
- **Update Client** (`update-client`): Submit an update IBC client proposal            
- **Update Instanciate Config** (`update-instantiate-config`): Submit an update instantiate config proposal.
- **Wasm Store** (`wasm-store`): Submit a wasm binary proposal


## Stages

### **STAGE 1:** Proposal Discussion 

Proposals should be submitted to the [Discourse forum](https://gov.archway.io/) for review and discussion prior to being submitted 
on-chain. This will enable 
preliminary 
exploration amongst community members to fully understand the scope of the proposal, provide input / feedback, and ultimately improve 
it 
before 
pushing toward a formal on-chain vote. Before submitting an idea, think about how it affects other stakeholders. 

After discussion and significant support from the community on discourse, the proposal is formalized for voting. 

### **STAGE 2:** Proposal formalized for voting 

After having reached a consensus in the Temperature Check, the initial proposer or another community member can submit the idea in 
the 
proposals 
category in the Discourse governance forum. If you are using the CLI to create a proposal by 
setting 
the title and description using flags, the text may be escaped (which will have undesired effects). 

In general, **it is recommended to put the proposal text into a JSON file** and to include that file as part of the CLI proposal, as 
opposed to 
individual fields in flags. The JSON file will contain the information that will be stored on-chain as the governance proposal. Each 
proposal 
type is unique in how the JSON should be formatted. You can have a look how JSON files look for the most common proposals in the 
Proposals 
types 
guidelines section

**Create the JSON file**

It is recommended to add the proposal text into a json file and include that file as part of the CLI proposal submission.

In this section we look into creating a correct .json file for each proposal type.

**Simple proposal**

You can create a simple proposal, by specifying the path to the json file and adding the key/value `type: ”Text”` in the JSON file. 
For this proposal type, you don’t need to specify the `<proposal type>` in the CLI command.

You can use this proposal type to get feedback from the community with a question, agree on a direction and let stakeholders to 
signal their 
opinion. A signal proposal has no direct effect on the change of Archway aside from having a record of the proposal outcome on 
Archway 
chain. 
These proposals are usually posted in the form of a question such as: "Is XXX harmful to the success of Archway?"


JSON example:

```json
{

   "title": "Should we start organizing hackatons?",

   "description": "Organizing hackathons would be a great way to onboard developers to Archway!",

   "type": "Text",

   "deposit": "1000000uconst"

} 
```


**Community Pool Spend** (`community-pool-spend`)

The JSON file for this proposal type should have the following fields:

- Title - the distinguishing name of the proposal, typically the way the that explorers list proposals
- Description - the body of the proposal that further describes what is being proposed and details surrounding the proposal
- Recipient - the Archway address that will receive funding from the community pool
- Amount - the amount of funding that the recipient will receive in CONST 
- Deposit - the amount that will be contributed to the deposit (in CONST) from the account submitting the proposal

JSON example 1:
```json
{
   "title":"Let’s test a spending proposal",
   "description":"This is just a test, but happy to receive some Const :D",
   "recipient":"archway1ygltcxr7nev8h8cd60fw347vf4kaz0r3phmfry",
   "amount":"1000const",
   "deposit":"1000000const"
}
```



**Parameter Change** (`param-change`)

The JSON file for this proposal type should have the following fields:

- **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
- **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
- **Changes** - the changes that you want to apply to the key-value pair of a 
[subspace](https://docs.cosmos.network/v0.47/modules/params#subspace) 
(e.g, bank, gov, slashing, staking which can be found 
[here](https://github.com/archway-network/archway/blob/dd69fe95e3beb0696bf0eb407df34c97fd4582ce/app/app.go#L881-L892)..). To submit 
any 
changes, 
make sure your JSON includes subspace, key, and the proposed value

JSON example 2:

```json
{
   "title":"Parameter change: decrease unbonding time to 2 days",
   "description":"Change to 2 days",
   "changes":[
      {
         "subspace":"staking",
         "key":"UnbondingTime",
         "value":"172800000000000"
      }
   ],
   "deposit":"1000000const"
}

```

JSON example 3:

```json
{
   "title":"Testable network parameters for gov and staking",
   "description":"constantine-1 is a test network, with a goal to emulate mainnet as closely as possible. However, inorder to allow 
testability 
network parameters must be tuned differently from mainnet. Network parameters on constantine-1 should allow reasonably short waiting 
times 
and 
low fund requirements, this will enable developers to run quick and frequent tests and increase development velocity",
   "changes":[
      {
         "subspace":"gov",
         "key":"tallyparams",
         "value":{
            "quorum":"0.010000000000000000",
            "threshold":"0.050000000000000000",
            "veto_threshold":"0.025000000000000000"
         }
      },
      {
         "subspace":"gov",
         "key":"depositparams",
         "value":{
            "min_deposit":[
               {
                  "denom":"uconst",
                  "amount":"1000000"
               }
            ],
            "max_deposit_period":"300000000000"
         }
      },
      {
         "subspace":"gov",
         "key":"votingparams",
         "value":{
            "voting_period":"60000000000"
         }
      },
      {
         "subspace":"staking",
         "key":"UnbondingTime",
         "value":"120000000000"
      }
   ],
   "deposit":"1000000uconst"
}
```


1. **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
1. **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
1. **Subspace** - the Archway module with the parameter that is being changed
1. **Key** - the parameter that will be changed
1. **Value** - the value of the parameter that will be changed by the governance mechanism
1. **Denom** - CONST will be the type of asset used as the deposit
1. **Amount** - the amount that will be contributed to the deposit (in CONST) from the account submitting the proposal

Once you have a final draft of your proposal ready to submit, it is advisable to verify the formatting your json file by using a json 
formatter 
(e.g. [json schema validator](https://www.jsonschemavalidator.net/s/bm56YYng)). This will make sure that you won’t encounter any 
issues when 
submitting the proposal.

### **STAGE 3:** On-chain proposal

Once your JSON is properly formatted accordingly to the chosen proposal type, you can submit your proposal live on the testnet first. 

You may want to submit your proposal to the testnet chain before the mainnet for a number of reasons:

1. To see what the proposal description will look like.
1. To signal that your proposal is about to go live on the mainnet.
1. To share what the proposal will look like in advance with stakeholders.
1. To test the functionality of the governance features.

#### **Submitting the proposal**
You can use the archwayd CLI to submit your governance proposal on-chain. Submitting to the testnet is identical to mainnet 
submissions 
aside 
from a few changes:

1. The `chain-id` for Constantine is `constantine-1`
1. The list of usable endpoints can be found [here](https://docs.archway.io/docs/overview/network/)
1. You will need the CONST testnet tokens,. There is a faucet available in the developer 
[Discord](https://discord.com/channels/892203409418092615/933050911662690334). You can find the faucet links for the different 
networks also 
[here](https://docs.archway.io/docs/overview/network/)


#### **How to submit the proposal via the archwayd CLI**

Here some examples on how to use the CLI to submit and query proposals.

To submit a **simple** proposal:

`archwayd tx gov submit-proposal --from mywallet5 --node https://rpc.constantine-1.archway.tech:443 --chain-id constantine-1 --fees 
500uconst 
--proposal=/root/archway/proposals/testproposal.json`

You can also submit the proposal without the JSON and through the CLI flags directly:

`archwayd tx gov submit-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --deposit="10test" --from 
mykey`

Anyway, keep in mind that submitting a proposal through a JSON file is the recommended way

To submit a **community-pool-spend** proposal:

`archwayd tx gov submit-proposal community-pool-spend /root/archway/proposals/spendproposal.json --trace --from archwayaddress1234567 
--node 
https://rpc.constantine-1.archway.tech:443 --chain-id constantine-1 --fees 500uconst`

To submit a **param-change** proposal:

`archwayd tx gov submit-proposal param-change /root/archway/proposals/change-param.json --from mywallet5 --node 
https://rpc.constantine-1.archway.tech:443 --chain-id constantine-1 --fees 500uconst`


For the other proposals, you can check the CLI command usage:

**Cancel Software upgrade** (`cancel-software-upgrade`)   

In this case, you can propose to cancel the current software upgrade proposal, for example:

`archwayd tx gov  submit-proposal cancel-software-upgrade --node https://rpc.constantine-1.archway.tech:443 --title "test" 
--description 
"test2" --from mywallet5 --chain-id constantine-1 --fees 500uconst`

**Execute contract** (`execute-contract`)

Usage:

`archwayd tx gov submit-proposal execute-contract [contract_addr_bech32] [json_encoded_migration_args]  [flags]`

**IBC Upgrade** (`ibc-upgrade`)

Usage:

`archwayd tx gov submit-proposal ibc-upgrade [name] [height] [path/to/upgraded_client_state.json] [flags]`

**Instanciate contract** (instanciate-contract)

Usage:

`archwayd tx gov submit-proposal instantiate-contract [code_id_int64] [json_encoded_init_args] --label [text] --title [text] 
--description 
[text] --run-as [address] --admin [address,optional] --amount [coins,optional] [flags]`

**Migrate Contract** (`migrate-contract`)

Usage:

`archwayd tx gov submit-proposal migrate-contract [contract_addr_bech32] [new_code_id_int64] [json_encoded_migration_args] [flags]`

**Pin Codes** (`pin-codes`)

Usage:

`archwayd tx gov submit-proposal pin-codes [code-ids] [flags]`

**Set Contract Admin** (`set-contract-admin`)

Usage:

`archwayd tx gov submit-proposal set-contract-admin [contract_addr_bech32] [new_admin_addr_bech32] [flags]

**Software Upgrade** (`software-upgrade`)`

Usage:

`archwayd tx gov submit-proposal software-upgrade [name] (--upgrade-height [height]) (--upgrade-info [info]) [flags]`

**Sudo Contract** (`sudo-contract`)

Usage:

`archwayd tx gov submit-proposal sudo-contract [contract_addr_bech32] [json_encoded_migration_args] [flags]`

**Unpin Codes** (`unpin-codes`)

Usage:

`archwayd tx gov submit-proposal unpin-codes [code-ids] [flags]`

**Update Client** (`update-client`)

Usage:

`archwayd tx gov submit-proposal update-client [subject-client-id] [substitute-client-id] [flags]`

**Update Instanciate Config** (`update-instanciate-config`)

Example:

`archwayd tx gov submit-proposal update-instanciate-config --help --from mywallet5 --node https://rpc.constantine-1.archway.tech:443 
--chain-id constantine-1 --fees 500uconst --proposal=/root/archway/proposals/testproposal.json`

**Wasm Store** (`wasm-store`)

Usage:

`archwayd tx gov submit-proposal wasm-store [wasm file] --title [text] --description [text] --run-as [address] [flags]`


Notes:

1. `archwayd` is the command-line interface client that is used to send transactions and query the Archway Hub
1. `tx gov submit-proposal param-change` indicates that the transaction is submitting a param-change proposal
1. `--from bob` flag indicates the account key that pays the transaction fee and deposit amount is named bob. You would need to have 
added 
this 
key with archway accounts --add “bob". Alternatively, you can use the address, with  `--from archwayaddress123214wythfsdu`
1. `--gas 500000` Whatever this number is set to should be the maximum amount of gas permitted to be used to process the transaction
   1. the more content there is in the description of your proposal, the more gas your transaction will consume
   1. if this number isn't high enough and there isn't enough gas to process your transaction, the transaction will fail
   1. the transaction will only use the amount of gas needed to process the transaction
1. `--fees` is a flat-rate incentive for a validator to process your transaction
   1. the network still accepts zero fees, but many nodes will not transmit your transaction to the network without a minimum fee
   1. many nodes use a minimum fee to disincentivize transaction spamming
   1. For example, you could use `--fees 500uconst` (which is equal to 0.0001 CONST)
1. `--chain-id` constantine-1 is the flag that specifies the Constantine network
1. `--node https://rpc.constantine-1.archway.tech:443` is using a RPC endpoint provided by an Archway node to submit the tx in the 
Constantine 
network
#### Verifying the proposal transaction
After signing the transaction through your keyring passphrase, the transaction is submitted and the transaction's hash will be shown 
on the 
terminal. You can either query the tx by using the CLI or by searching the transaction hash using a [Constantine 
blockexplorer](https://explorer.constantine-1.archway.tech/).

You can query the proposals via the CLI, for example:

    archwayd q gov proposals  --node https://rpc.constantine-1.archway.tech:443

Or query the specific proposal id, for example:

    archwayd q gov proposal 8  --node https://rpc.constantine-1.archway.tech:443

If there have been issues with the proposal transaction, you can still query the tx id, for example:

    archwayd q tx 39EB4C85EC00281BB54EEE6BC87F17038F3528D5E54BF7FFBDF13E7C15DF92FE  --node https://rpc.constantine-1.archway.tech:443

and check the value of the  `raw_log` field for useful information

#### Depositing funds after a proposal has been submitted
If you have submitted the proposal without the minimum token amount deposited yet, don't worry! You are still in time to deposit more 
tokens to get the proposal into the voting stage. For example, you can launch:

`archwayd tx gov deposit 8  100000uconst --from mywallet4 --node https://rpc.constantine-1.archway.tech:443`



### **STAGE 4:** Voting on-chain (Archway Hub)

Now that the proposal is on-chain, you can engage on [Discourse](https://gov.archway.io/) and 
[Discord](https://discord.com/invite/5FVvx3WGfa) to 
make sure that the Archway community is aware and that the minimum quorum threshold is reached. Also, make sure that enough deposit 
is 
allocated 
to the proposal. 

The Community can vote either via the CLI or via the [Constantine 
blockexplorer](https://explorer.constantine-1.archway.tech/proposals). 

Remember that: 

1. By voting **YES**, you agree 
1. By voting **NO**, you disagree
1. By voting **ABSTAIN**, you formally decline to vote either for or against the proposal.
1. Voting **NO WITH VETO** expresses that you would like to see depositors penalized by revocation of their proposal deposit

### **STAGE 5:** On-chain execution

Phew! If the proposal passed, you are done :D.

If the proposal did not pass, make sure to understand why by engaging with the relevant stakeholders. You may be able to have the 
proposal 
passed 
after having made some changes :)

