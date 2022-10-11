---
sidebar_position: 1
---

# Create a new Wallet

New wallets can be created a number of ways but this guide will focus on using the `archwayd` core daemon or the [Developer CLI](/docs/create/cli/developer-cli). For installing and accessing `archwayd` see the [Archway Docker installation instructions](/docs/create/getting-started/install#install-archwayd-using-docker). For instructions on how to install and setup the developer CLI review our [installation guide](/docs/create/getting-started/install).

:::note
While additional options for creating wallets are covered in this article, 3rd party tools are not supported or maintained by Archway directly
::::

### Using the Archway Daemon

The command to add a new account using the `archwayd` daemon is:

```bash
archwayd keys add ${ACCOUNT_LABEL}
```

Where `${ACCOUNT_LABEL}` represents a human readable label for you account. Account labels help keep track of which account is which, especially pertinent if you're managing multiple Archway accounts.

Example account creation:

```bash
archwayd keys add demo
Enter keyring passphrase:

- name: demo
  type: local
  address: archway1cnfpa4n3pnrdfsrj3glmnq08u64mfmgu7nym9t
  pubkey: archwaypub1addwnpepqgr0thwj5f4yvmndeqzxw3fvc6avchgvkyufrm5uvmguqjys8zj4guqdpyh
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

# Mnemonic seed words here...
```

:::tip
After securing your mnemonic, you can delete your bash history to ensure no one can retrieve it

```bash
history -c
rm -rf ~/.bash_history`
```
:::

### Using the Developer CLI

Creating an account with the developer CLI is similar to using the daemon (`archwayd`), but has the benefit of making it easy to switch between Dockerized and native built versions of Archway core.

[Read the developer instructions for creating a wallet](/docs/create/getting-started/setup#creating-an-account)

### Using a Ledger device (hardware wallet)

When you initialize your Ledger, a 24-word mnemonic is generated and stored in the device. This mnemonic is compatible with Cosmos and Cosmos accounts can be derived from it. The following steps help make your Ledger compatible with the Archway daemon.

1. Download the _Ledger Live_ app
2. Connect your Ledger via USB and update to the latest firmware
3. From the _Ledger Live_ app store, download the _Cosmos_ application. You may have to enable _Dev Mode_ in the settings of _Ledger Live_ to be able to download it.
4. Navigate to the _Cosmos_ app on your Ledger device
5. Create your account with the `archwayd` daemon using the flag `--ledger`

```bash
archwayd keys add ${ACCOUNT_LABEL} --ledger
```

:::caution
Creating Ledger accounts will only work if the Ledger is charged, plugged in and unlocked.
::: 


### Using a Browser Extension (Keplr)

A popular wallet for Cosmos-based coins is [Keplr](https://wallet.keplr.app/), a wallet that offers a similar user experience to MetaMask on Ethereum. For instructions regarding downloading, installing and setting up [Keplr](https://wallet.keplr.app/) see Keplr's own [installation guide](https://keplr.crunch.help/getting-started/installing-keplr-wallet)


After installing the extension, open Keplr by selecting its icon from your browser toolbar. If you haven't created an account yet, you'll see a screen like this:

![](../assets/keplr02.png)

Select `Create new account` to see the following form:

![](../assets/keplr03.png)

A `Mnemonic Seed` phrase is generated specifically for your account. Use this phrase to recover your account in the case your browser extension becomes corrupted or you forget your password.

![](../assets/keplr04.png)

When logged into Keplr with a valid account, the extension presents us with the following screen where we can view account balances and perform actions like sending payments or executing calls to smart contracts.

![](../assets/keplr06.png)

#### Viewing and Switching between Cosmos tokens

Select the `Cosmos` dropdown on top of the window to switch the view to other Cosmos-based crypto tokens.

![](../assets/keplr09.png)

<!-- ### Extras

Read on for extra tips and tricks for using your new account.

#### Transferring ARCH tokens

Here's how we can transfer `ARCH` tokens between accounts using the `archwayd` daemon.


```bash
archwayd tx send $(archwayd keys show ${SENDER_ACCOUNT} -a) $(archwayd keys show ${RECEIVING_ACCOUNT} -a) 12ARCH --fees 0.1ARCH --chain-id 'titus-1'
```

Then, you should be prompted with the following confirmation question:

```json
{
  "body": {
    "messages": [
      {
        "@type": "/cosmos.bank.v1beta1.MsgSend",
        "from_address": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz",
        "to_address": "archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l",
        "amount": [
          {
            "denom": "ARCH",
            "amount": "12"
          }
        ]
      }
    ],
    "memo": "",
    "timeout_height": "0",
    "extension_options": [

    ],
    "non_critical_extension_options": [

    ]
  },
  "auth_info": {
    "signer_infos": [

    ],
    "fee": {
      "amount": [
        {
          "denom": "ARCH",
          "amount": "0"
        }
      ],
      "gas_limit": "200000",
      "payer": "",
      "granter": ""
    }
  },
  "signatures": [

  ]
}

confirm transaction before signing and broadcasting [y/N]: y
```

Enter `y` and hit the enter key.

Then we need to wait few moments for our transaction to go through. If things go well, we will see an output like this:

```json
{
  "height": "609",
  "txhash": "4F7AA2832D5190B68C5E4F2ABDC41B732BCCA582DCD27B0FD11898A3CBF48310",
  "data": "0A060A0473656E64",
  "raw_log": "[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"send\"},{\"key\":\"sender\",\"value\":\"archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l\"},{\"key\":\"sender\",\"value\":\"archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz\"},{\"key\":\"amount\",\"value\":\"12ARCH\"}]}]}]",
  "logs": [
    {
      "events": [
        {
          "type": "message",
          "attributes": [
            {
              "key": "action",
              "value": "send"
            },
            {
              "key": "sender",
              "value": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz"
            },
            {
              "key": "module",
              "value": "bank"
            }
          ]
        },
        {
          "type": "transfer",
          "attributes": [
            {
              "key": "recipient",
              "value": "archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l"
            },
            {
              "key": "sender",
              "value": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz"
            },
            {
              "key": "amount",
              "value": "12ARCH"
            }
          ]
        }
      ]
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "61028"
}
```

Now let's check again the balance of our wallet:

```bash
archwayd query bank balances $(archwayd keys show my-wallet -a)
```
```yml
balances:
- amount: "12"
  denom: ARCH
pagination: {}
``` -->
