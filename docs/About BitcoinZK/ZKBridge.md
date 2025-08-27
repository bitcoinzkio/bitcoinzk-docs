---
sidebar_position: 3
---

zkBridge is one of the key components in BitcoinZK as it safeguards fund transition between Bitcoin Layer-1 and BitcoinZK Layer-2.

The natural limitation in the smart contract capability of the Bitcoin scripts makes it extremely difficult to realize a totally trustless bridging scheme between BTC and EVM-compatible chains or Layer-2s. This is why BitcoinZK natively builds a delicately designed zkBridge to offer a safe manner for BTC users or holders to opt-in their assets to our Layer-2 ecosystem.

The key design philosophy of zkBridge is guaranteeing that all operations on zkBridge can be proved by zk-SNARKS proofs, and these proofs will be kept verifiable by any third party.

By providing ZKP for bridging activities (Deposit, Mint, Burn, and Withdraw), our zkBridge is introducing minimized trust assumptions to asset bridging between Bitcoin (Layer-1) and BitcoinZK (Layer-2). In particular, BTC Deposit-Mint activities can be performed with a  1-of-N assumption regardless of how decentralized the notary group is.

We may consider BTC bridging in two directions, respectively: from Layer-1 to Layer-2 (Deposit and Mint), from Layer-2 to Layer-1 (Burn and Withdraw), regarding the technical nature between Bitcoin scripts and EVM, which makes the bridging solution slightly distinguished in the two directions.

## **Deposit and Mint**:

* Users deposit their BTC into the zkBridge and get a 1:1 BTC token on bitcoinZK (the Layer-2).

* The BTC token users receive on bitcoinZK serves as the native gas fee.

* There will be a small portion of loss in the BTC amount bridged, which serves as the bridging fee and will be used to cover the bridging cost.

* When users generate a bridging request, a BTC deposit address will be created, and an EVM address will be denoted to receive the newly minted BTC token on Layer-2.

* This bridging request uniquely creates an order in the smart contract, and this order will be later fulfilled by a ZK Proof submitted from the notary group as proof of successful deposit.

* The Deposit-and-Mint process will be secured even if there is only one honest node in the notary group.

![](/img/diagram-3.png)

## **Burn and Withdraw**:

* Users are allowed to withdraw their Layer-1 deposits (BTC) from Layer-2 at any time.

* Users get 1:1 of BTC on Layer-1 (the Bitcoin blockchain).

* There will be a small portion of loss in the BTC amount bridged, which serves as the bridging fee.

* When users generate a bridging request, an EVM deposit address will be created, and a BTC address will be denoted to receive the BTC withdrawal.

* This bridging request uniquely creates an order in the smart contract, and this order will be later fulfilled by a ZK Proof submitted from the notary group as proof of successful withdrawal.

* The Burn-and-Withdraw process asks for 50% or more honest nodes in the notary group. The trustlessness of the notary group will be enhanced with a combination of several approaches, including the Stake-and-Slash scheme, shared decentralized sequencers, and ZKP-triggered mandatory withdrawal.

![](/img/diagram-4.png)