# zkBridge

## Overview

zkBridge is one of the key components in BitcoinZK as it safegurads fund transition between bitcoin layer1 and BitcoinZK layer2.

The natural limitation in the smart contract capability of the bitcoin scripts makes it extremely difficult to realized a totally trustless bridging scheme between BTC and EVM-compatible chains or layer2s. This is why BitcoinZK natively builds a delicately designed zkBridge to offer a safe manner for BTC users or holders to opt-in their assets to our layer2 ecosystem.

The key design philosophy of zkBridge is guaranteeing that all operations on zkBridge can be proved by zk-SNARKS proofs and these proofs will be kept verifiable by any third-party.

By providing ZKP for bridging activities (Deposit, Mint, Burn and Withdraw) our zkBridge is introducing minimized trust assumptions to asset bridging between Bitcoin (L1) and BitcoinZK (L2). Especially, BTC Deposit-Mint activiies can be performed with 1-of-N assumption regardless of how decentralized the notary group is.

## BTC Bridging

We may consider BTC bridging in two directions respectively: from L1 to L2 (Deposit and Mint), from L2 to L1 (Burn and Withdraw), regarding the technical nature between Bitcoin scripts and EVM, which makes the bridging solution slightly distinguished in the two directions.

![Deposit](/img/Deposit.png)

**Deposit and Mint**:

- Users deposit their BTC into the zkBridge and get 1:1 amount BTC token on bitcoinZK (the L2).
- The BTC token users receive on bitcoinZK serves as the native gas fee.
- There will be a small portion of loss in the BTC amount bridged, which serves as the bridging fee and will be used to cover the bridging cost.
- When users generate a bridging request, a BTC deposit address will be created, and an EVM address shall be denoted to receive the newly minted BTC token on the L2.
- This bridging request uniquely creates an order in the smart contract and this order will be later fulfilled by a ZK Proof submitted from the notary group as a proof of successful deposit.
- The Deposit-and-Mint process will be secured even if there is only one honest node in the notary group.

![Withdraw](/img/Withdraw.png)

**Burn and Withdraw**:

- Users are allowed to withdraw their L1 deposits (BTC) from L2 by anytime.
- Users get 1:1 amount of BTC on L1 (the Bitcoin blockchain).
- There will be a small portion of loss in the BTC amount bridged, which serves as the bridging fee.
- When users generate a bridging request, an EVM deposit address will be created, and a BTC address shall be denoted to receive the BTC withdrawal.
- This bridging request uniquely creates an order in the smart contract and this order will be later fulfilled by a ZK Proof submitted from the notary group as a proof of successful withdraw.
- The Burn-and-Withdraw process asks for 50% or more honest nodes in the notary group. The trustlessness of the notary group will be enhanced with a combination of several approaches including Stake-and-Slash scheme, shared decentralized sequencers and ZKP-triggered mandatory withdrawal.

## Threshold BTC Integration

It should be noted that the full design of zkBridge is still under construction and it is expected to be fully delivered by the end of the Starting Phase as suggested by BitcoinZK's Tech Roadmap. We are currently leveraging the bridging infrastructure by Threshold Network, which proved to be a battle-tested and robust bridging solution between BTC and EVM-compatible chains (e.g. Ethereum).

Existing solutions that bridge Bitcoin to Ethereum require users to send their Bitcoin to an intermediary, in exchange for an ERC-20 token that represents the original asset. This centralized model requires you to trust a third party and is susceptible to censorship, threatening the premise of Bitcoin as sovereign, secure, permissionless digital asset.

The Threshold Network tBTC is a truly decentralized (and scalable) bridge between Bitcoin and Ethereum. Instead of centralized intermediaries, tBTC uses a randomly selected group of operators running nodes on the Threshold Network to secure deposited Bitcoin through threshold cryptography. That means tBTC requires a threshold majority agreement before operators perform any action with your Bitcoin. By rotating the selection of operators weekly, tBTC protects against any individual or group of operators colluding to fraudulently seize the underlying deposits.

This bridging scheme could be even enhanced with ZK Proof introduced into the verification process, and a mandatory withdraw request triggrerd by ZK Proof. BitcoinZK will continue to improve the security of BTC bridging based on the current solution leveraged and head for a fully ZK-featured bridge with minimized trust.
