"use strict";(self.webpackChunkbitcoinzk_docs=self.webpackChunkbitcoinzk_docs||[]).push([[5013],{1877:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(4848),o=i(8453);const r={},s="Zero-knowledge",a={id:"resources/Zero-knowledge",title:"Zero-knowledge",description:"ZK: What and Why",source:"@site/docs/resources/Zero-knowledge.md",sourceDirName:"resources",slug:"/resources/Zero-knowledge",permalink:"/resources/Zero-knowledge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Layer2 for Bitcoin",permalink:"/resources/L2 for Bitcoin"},next:{title:"Rollup Architecture",permalink:"/resources/Rollup Architecture"}},c={},l=[{value:"ZK: What and Why",id:"zk-what-and-why",level:2},{value:"100% ZK Features",id:"100-zk-features",level:2}];function h(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"zero-knowledge",children:"Zero-knowledge"}),"\n",(0,n.jsx)(t.h2,{id:"zk-what-and-why",children:"ZK: What and Why"}),"\n",(0,n.jsx)(t.p,{children:"ZK is a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any additional information other than the truthfulness of the statement."}),"\n",(0,n.jsx)(t.p,{children:"Constructing ZK generally requires satisfying three important properties:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Completeness"}),": The prover indeed possesses the answer to a certain assertion and can convince the verifier."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Soundness"}),": If the prover does not possess the answer to the assertion, it cannot convince the verifier."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Zero-knowledge"}),": The verifier knows only the result of the assertion judgment and is ignorant of any other information."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the field of cryptography, ZK has become a relatively mature and widely accepted pattern, especially in the Layer2 scenario where Layer2 needs to prove to Layer1 that its execution is  correct. We try not to delve too much into the technical details of ZK (we don't seek to bring any innovation at the level of ZK algorithms or mathmatics), but rather focus on the advantages of ZK and the reasons for using ZK to build this Bitcoin Layer2 solution."}),"\n",(0,n.jsx)(t.p,{children:"In theory, L2s can submit all transaction data to L1 and have L1 execute all the transactions for verification. However, this approach consumes a lot of resources. The market has widely accepted the verification scheme called Fraud Proof (the Optimisim style) to save resources consumed by on-chain verification. Here, the advantages of ZK come into play because ZK proofs are succinct, meaning that verifiers only need to perform fewer computations (much less than generating ZK proofs) to complete the verification. This is perfect for L2 solutions because L2 exists to solve the performance limitations and resource shortages (mainly execution resources) of the L1. Thus, making L2s spend more resources to generate proofs while releasing L1 verifiers to with much fewer resources to verify a Validity Proof becomes a win-win situation."}),"\n",(0,n.jsx)(t.p,{children:'The difference between Bitcoin and Ethereum is that Bitcoin shows more limitation in its ability to execute smart contracts, which causes its inability to natively verify transactions submitted from L2. We have noticed some recent attempts, such as bitVM, which are considering bringing Bitcoin the ability to leverage existing scripts to verify off-chain transactions (EVM). Therefore, out of rigor, we tend to conclude that "Bitcoin\'s current scripts are unable to natively verify general purpose computation from L1 with feasiblility from an engineering point of view," rather than making absolute judgments, such as "Bitcoin will never have such capabilities in the future."'}),"\n",(0,n.jsx)(t.p,{children:"Long story short, ZK demonstrates some great advantages to meet the essential requirements of a Bitcoin L2. First, the limitations of Bitcoin's scripting capabilities make non-ZK L2 solutions extremely unfriendly to operators and verifiers. Second, the core advantages of ZK, such as succinctness, verification resource friendliness and privacy-preserving, make ZK proofs easily verifiable by any third party, providing us with a lot of flexibility and space for customization in the design. In the long run, these key features of ZK will serve  L2s better with more potential breakthrough."}),"\n",(0,n.jsx)(t.h2,{id:"100-zk-features",children:"100% ZK Features"}),"\n",(0,n.jsx)(t.p,{children:"As the name suggests, bitcoinZK is strongly committed to ZK properties. Specifically, we aim to achieve 100% ZK provability and 100% ZK verifiability."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"100% ZK provability"})," means that all actions occurring on L2, including all L2 executed ones and asset bridging operations between L1 and L2, will be able to generate ZK Proofs for its validity."]}),"\n",(0,n.jsx)(t.p,{children:"Since Bitcoin miners cannot directly verify the validity of L2 Txs, any smart contract style Bitcoin L2 cannot inherit the powerful Bitcoin PoW consensus, unless we only resort to Bitcoin's existing scripts to build L2 capabilities. Based on this fact, we believe that constructing ZK Proofs for all user actions on L2, combined with a robust and trusted verification mechanism for their state finality, is the best way to ensure the security of a Bitcoin L2."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"100% ZK verifiability"})," refers to the property that all ZK Proofs generated on L2 can be verified by any third party. The challenge for BitcoinZK lies in how we can manage the verification process in a more trustless way."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"BitcoinZK avoids introducing Client-side Verification (CSV) schemes, unless absolutely necessary. The bad thing about CSV is it introduces new trust assumptions and some extent of permission, which weakens the trust and decentralization level of the L2 network."}),"\n",(0,n.jsx)(t.li,{children:"BitcoinZK introduces trusted data availability (DA) layers for all L2 Txs and Proofs data, i.e. Bitcoin and Ethereum. BitcoinZK submits orginial ZK Proofs data to Ethereum for DA and Validity Proof validation as well as commits highly compressed data to Bitcoin."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In this section we only talk about basic principles on ZK properties for different L2 behaviors. For more implementation details, please refer to the Sovereign Rollup section (for EVM Txs) and the zkBridge section (for L1-L2 asset bridging)."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);