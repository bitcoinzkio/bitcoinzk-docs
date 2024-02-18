# Layer2 for Bitcoin

To better demostrate the architecture and design principals of BticoinZK, we need to discuss about the concepts of "a Bitcoin's Layer2" and clearly identify the problems we are going to solve.

## Layer2s and Rollups

"Layer2" and "Rollup" are concepts in the context of Ethereum, explored by the community to better address Ethereum's scalability issues. Because Ethereum has now largely established a "rollup-centric" scaling roadmap, these concepts have been widely accepted by the market.  

In the context of Bitcoin, we have long been discussing the concept of "Scaling". For example, Lightning Network is an early exploration of scaling Bitcoin payments, which if taken from today's perspective can be defined as a Bitcoin Layer2 solution. Although the concept of Layer2 is not yet cleary characterized, we observe that the market has begun to draw extensive parallels with Ethereum's L2/Rollup solutions to Bitcoin's scaling issues. Therefore, for ease of understanding, we as well position BitcoinZK as a Layer2 solution for Bitcoin.

It is important to discuss the concept of "Rollup". In definition, Rollup is not an equivalent expression to Layer2; Rollup is a specific implementation that makes a Layer2 work. It's worth noting that we can establish a Layer2 without using Rollup; even if we use Rollup, we can consider several completely different technical solutions to implement the Rollup.

Even today there are still many debates about Rollup and Layer2 in the regards of how they should be defined. For us, we are more concerned about scaling Bitcoin, bringing real value to Bitcoin users, and addressing the security concern within a Layer2 solution. Therefore, we will not attempt to answer questions such as "what is the best Rollup solution" or "what kind of scaling solution should be considered Layer2". Instead, we will try to explain how we can use the technologies available to us to construct a complete solution and future development path for scaling Bitcoin with a Layer2 network. 

## The Bottlenecks  

In this chapter, we will talk about why we are here and why we want to build bitcoinZK as a Bitcoin Layer2 solution。  

In our philosophy, "Scaling Bitcoin" exactly means helping Bitcoin achieve what users expect it to do (yet cannot accomplish by itself because of certain limitations).  

From this definition, we can easily enumerate the two main user expectations that Bitcoin has not met:

* **Higher throughput** (which implies higher TPS and lower transaction fees)
* **Stronger contract capabilities** (preferably Turing-complete ones for building application ecosystems)

BitcoinZK is here for solving these two problems. We bring much higher throughput and much stronger smart contract capability to Bitcoin. This is the very mission of bitcoinZK.  

However, we recognize that by largely enhancing Bitcoin's throughput and contract capability, we are inevitably bringing additional trust assumption (which is a bad thing) to this Layer2. 

The inevitability comes from two inherent limitations of Bitcoin:  

* Bitcoin's current scripting schemes cannot natively verify transactions submitted by a rollup layer2, regardless of its verification style (Validity Proof or Fraud Proof).
* Bitcoin's scripting and UTXO design have posed very strong limitation on its capability boundary, making it difficult to support more complex and diversified user scenarios such as DeFi.

The design details of bitcoinZK are primarily drived by its mission and the core  limitations faced by Bitcoin. Please proceed to the next chapter to learn more about the details in the architecture.

