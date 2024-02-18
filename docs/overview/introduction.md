---
id: About BitcoinZK
title: ""
slug: /
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

BitcoinZK is a layer 2 modular blockchain that interconnects and scales Bitcoin and Ethereum. It allows users to transfer and use their $BTC assets on Ethereum without sacrificing security, speed, or cost. BitcoinZK achieves this by using a decentralized sequencer network and a Threshold Signature Scheme (TSS) to bridge $BTC to its own layer 2 chain, which is compatible with Ethereum Virtual Machine (EVM) and supports zero-knowledge proofs (ZKPs). BitcoinZK enables rich Defi or other DApp scenarios for the bridged $BTC, as well as other Ethereum assets, and submits the execution result, along with their ZK proofs, to Ethereum layer 1 for on-chain verification and settlement.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/img/overview/introduction/overview.png')} style={{width: 660}} />
</div>

## Key Characteristics

### Modular Architecture

BitcoinZK takes a modular approach with chain design, where transaction execution, consensus, data availability, and settlement are handled by separate modules. The initial version of BitcoinZK functions as a L2 ZK validium with modular data availability. Hence,

- Bitviva’s execution layer provides an EVM-compatible environment for transaction execution, where the sequencer produces blocks on L2 and sends state root data and ZK proofs to L1.
- Consensus and settlement take place on Ethereum L1, where Bitviva’s smart contract verifies the ZK proofs and updates the state root accordingly. BitcoinZK leverages Ethereum’s security and finality, and benefits from its network effects and ecosystem.
- Data availability services are provided by a set of DAC (Data Availability Committee) nodes, which store and sign the L2 block data to ensure the validity and liveness of the chain. BitcoinZK also plans to integrate with some 3rd party Alt-DA (Alternative Data Availability) solutions to further enhance the data availability and decentralization of the network.

### Ethereum Security

As stated above, BitcoinZK is an Ethereum validium that uses Ethereum as its consensus and settlement layer, thus deriving security from Ethereum. BitcoinZK does not require any trust assumptions or additional validators on its own layer 2 chain, as all the state transitions are verified by ZK proofs on Ethereum. BitcoinZK also inherits the composability and interoperability of Ethereum, as users can seamlessly interact with other Ethereum-based protocols and applications using their bridged assets.

### Decentralized Sequencers

BitcoinZK employs a decentralized sequencer network to avoid the single-point failures derived from centralized sequencers. A sequencer is a node that collects and executes transactions on Bitviva’s layer 2 chain, and submits the state root data and ZK proofs to Ethereum. BitcoinZK uses a proof-of-staking mechanism to select and incentivize sequencers, and ensures that they follow the protocol rules and do not censor or manipulate transactions. Bitviva’s decentralized sequencer network also provides benefits like strong MEV (Miner Extractable Value) prevention, enhanced governance and participation, and reduced reliance on third-party operators.

### Threshold Signature Scheme

BitcoinZK uses TSS (Threshold Signature Scheme) to ensure the network has reached consensus about state transitions. TSS is a cryptographic technique that allows a group of nodes to generate a signature that is equivalent to a single signature, without revealing their individual secret keys or requiring a trusted dealer. BitcoinZK uses FROST (Flexible Round-Optimized Schnorr Threshold) signatures, which are a fast and secure variant of Schnorr signatures that support both interactive and non-interactive signing protocols. Bitviva’s TSS nodes act as a decentralized custodian of the bridged $BTC, and sign transactions that move $BTC across chains. Bitviva’s TSS reduces the trust risk and improves the efficiency of the cross-chain bridge.
