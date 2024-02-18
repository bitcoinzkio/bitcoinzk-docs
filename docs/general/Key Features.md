# Key Features  

## 100% Zero-knowledge

The fact is, so far, Bitcoin cannot natively validate transactions executed on the Layer2s in an engineering feasible manner. ZK has become our best choice.  

ZK is a real game changer in the Layer2 scenario because this technology ensures that any behavior occurring on Layer2s can be verified at considerably low cost, guaranteed by mathmaticals.  

Therefore, we pursue "100%*100%" ZK features: 100% of user behavior is ZK provable, and 100% of ZK proofs are publicly verifiable.  

Although we have not fully achieved this requirement yet, the essence and characteristics of ZK technology determine that they can be achieved. More importantly, ZK technology gives our solution more flexibility and scalability, such as interoperability with more blockchains/Layer2s.  

## BTC-native Support  

BitcoinZK provides native support for Bitcoin and their users to reduce onboarding barriers and enhance smoothness. These supports include:

**BTC gas fee**: Users do not need to purchase other tokens to pay for gas on the Layer2.  

**BTC Wallet Abstraction**: Users do not need to download or use any wallet other than their own Bitcoin wallet.  

**BTC zkBridge**: This is a minimal-trust BTC bridge for BTC deposits and withdrawals. Additionally, more alternative assets based on BTC, such as BRC20, BRC420, etc. will be introduced by zkBridge.  


## Full EVM Compatibility  

As described in the previous chapter on Design Philosophy, we believe that bringing Turing-complete smart contract capabilities, along with significantly increased throughput, is crucial for scaling the Bitcoin ecosystem. Smart contracts will bring services that Bitcoin users need, such as DeFi and asset issuing.  

The significance of Full EVM Compatibility lies in its immediate and real-existing application ecosystem. Cultivating and maturing an application ecosystem takes a very long time. It's difficult for us to tell whether Bitcoin can cultivate a usable application ecosystem based on its native script capabilities in the next 5 or 10 years, but we do know that the EVM ecosystem is able to serve Bitcoin users right now.  

We recognize that introducing EVM to the Bitcoin ecosystem may raise some controversy, as some believe that using only Bitcoin's native script capabilities is of more "orthodox". We refrain from making any value judgments; we just want to bring this Turing-complete contract system to Bitcoin.  

## Modular & Sovereign Design

As mentioned at the beginning of the previous chapter, we cannot yet clearly define what a Bitcoin Layer2 should look like. What matters to us is how to meet the needs of Bitcoin users and introduce minimal trust assumptions to ensure the security of the Layer2. This design approach led us to seriously consider a modular, sovereign rollup-like framework.  

Sovereign Rollup is a Layer2 network that deploys consensus and data availability to another blockchain (rather than the orifinal Layer1 chain). A Sovereign Rollup has the capability to decide its own consensus mechanism and how to secure its settlement. We will talk about later why a Sovereign Rollup-like Layer2 becomes a reasonable solution for Bitcoin.  

The advantages of this design will manifest in both short term and long term. In the short term, it allows us to utilize the most powerful consensus and data availability to ensure the security of our Layer2. In the long term, it gives us the potential for continuous upgrades to maximize the utilization of ZK's magic verification and privacy capabilities.  

