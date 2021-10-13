---
sidebar_position: 10
---

# CLI

## Installation
The first thing we need to in order to delegate our stake is to install the archwya CLI, you can find how to do this in our [installation guide](./create/getting-started/install.md)

## Create Account
### Using a ledger device
When you initialize your ledger, a 24-word mnemonic is generated and stored in the device. This mnemonic is compatible with Cosmos and Cosmos accounts can be derived from it. Therefore, all you have to do is make your ledger compatible with gaiad. To do so, you need to go through the following steps:

1- Download the Ledger Live app here (opens new window).
2- Connect your ledger via USB and update to the latest firmware
3- Go to the ledger live app store, and download the "Cosmos" application (this can take a while). Note: You may have to enable Dev Mode in the Settings of Ledger Live to be able to download the "Cosmos" application.
4- Navigate to the Cosmos app on your ledger device
5- To create an account, use the following command:
```
archwayd keys add <yourAccountName> --ledger
```

- `<yourKeyName>` is the name of the account. it is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction.
- You can add the optional `--account` flag to specify the path (0, 1, 2, ...) you want to use to generate your account. By default, account 0 is generated.

#### Warning
This process will only work while the Ledger is plugged in and unlocked.

### Computer 
To generate an account, use the following command:

```
archwayd keys add <yourKeyName>
```

The command will generate a 24-words mnemonic and save the private and public keys for account 0 at the same time. Each time you want to send a transaction, you will need to unlock your system's credentials store. If you lose access to your credentials storage, you can always recover the private key with the mnemonic.

- `<yourKeyName>` is the name of the account. it is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction.
- You can add the optional `--account` flag to specify the path (0, 1, 2, ...) you want to use to generate your account. By default, account 0 is generated.

### Warning
After securing your mnemonic, you can delete your bash history to ensure no one can retrieve it
```
history -c
rm -rf ~/.bash_history`
```

# Keplr

This quick guid shows you how to setup a wallet and manage your tokens with it. One of the widely used wallets for Cosmos based coins is `Keplr` which is similar to [MetaMask](https://metamask.io/).

Let's install it.

## Install 
Open you _Google Chrome_ browser and head over to this website: https://wallet.keplr.app/ 

If you have not already installed Keplr, it shows you a message box saying that you should click on it and install it.

Once you click on the message box, it redirects you to the chrome web store page to install the Keplr extension.
Click on `Add to Chrome` and install the extension.

When the extension is installed, you should see the Keplr icon on your browser corner. 

![](./assets/keplr01.png)


## Open Keplr
Click on the Keplr icon; then, you will see a screen like this:

![](./assets/keplr02.png)


## Create account
Click on the `Create new account` to see the following form:

![](./assets/keplr03.png)

Here you can see a `Mnemonic Seed` phrase that is generated specifically for your account which is used to recover your account in case you loose your extension or forget your password.

**Attention**: Make sure to write it down, print it or make several copies of it and keep them in a safe place.

You can select either 12 or 24 words; both are good, but 24 is only more secure.

Fill in an account name, write your password and click on the `Next` button.

## Confirm mnemonic phrase

Once the following screen appears, you need to select the mnemonic phrase exactly as the same order of what we just saw in the previous screen.

![](./assets/keplr04.png)

## Register

When all the words are put in the right order, click on the `Register` button and we are all set.

![](./assets/keplr05.png)

## Working with Keplr

When we click on the Keplr icon, since we have an account this time, this window is shown.

![](./assets/keplr06.png)

In this window we can see our total balance in the middle and we are able to do multiple actions with our account.

### Our wallet address

If we hover the mouse pointer on the text starting with `cosmos`, we can see and copy our so called wallet address. We need to share this address with the people who wants to transfer some tokens to our account.

![](./assets/keplr07.png)

### Make a Deposit

If you click on the `Deposit` button, the wallet address is shown in a [QR Code](https://en.wikipedia.org/wiki/QR_code) format. If a person wants to transfer some crypto to your wallet, they can simply scan this QR code.

![](./assets/keplr08.png)

### Other Cosmos tokens

If you click on the `Cosmos` dropdown on top of the window, you can switch to other Cosmos based cryptos.

![](./assets/keplr09.png)

### Account management

If you click on the account icon on top right corner, you will see this screen. 
Here you can manage your account and even see the mnemonic phrase in case you have not saved it yet.

![](./assets/keplr10.png)


## CLI Wallet

First we need to have our node running one validator, so please set it up here: [Running a Validator Node](./validator/running-a-validator-node.md).

### Querying the balance of the wallet

Now let's see the balance of our wallet. 
We can query any account with the following command:

```bash
archwayd query bank balances <Wallet_Address>
```

If we forget our wallet address we can retrieve its details via this command:

```bash
archwayd keys show my-wallet
```

So in our example we can see the balance of our wallet by running this command:

```bash
archwayd query bank balances $(archwayd keys show my-wallet -a)
```

### Transferring ARCH tokens to our wallet

Now let's transfer some `ARCH` tokens from our validator account to our newly created wallet.


```bash
archwayd tx send $(archwayd keys show my-validator-account -a) $(archwayd keys show my-wallet -a) 12ARCH --fees 0.1ARCH --chain-id my-chain
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
```
