"use strict";(self.webpackChunkbitcoinzk_docs=self.webpackChunkbitcoinzk_docs||[]).push([[7568],{1256:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(4848),n=t(8453);const s={},o="zkBridge",a={id:"resources/ZK Asset Bridge",title:"zkBridge",description:"Overview",source:"@site/docs/resources/ZK Asset Bridge.md",sourceDirName:"resources",slug:"/resources/ZK Asset Bridge",permalink:"/resources/ZK Asset Bridge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Rollup Architecture",permalink:"/resources/Rollup Architecture"},next:{title:"Deposit BTC",permalink:"/resources/Deposit"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"BTC Bridging",id:"btc-bridging",level:2},{value:"Threshold BTC Integration",id:"threshold-btc-integration",level:2}];function h(e){const i={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"zkbridge",children:"zkBridge"}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:"zkBridge is one of the key components in BitcoinZK as it safegurads fund transition between bitcoin layer1 and BitcoinZK layer2."}),"\n",(0,r.jsx)(i.p,{children:"The natural limitation in the smart contract capability of the bitcoin scripts makes it extremely difficult to realized a totally trustless bridging scheme between BTC and EVM-compatible chains or layer2s. This is why BitcoinZK natively builds a delicately designed zkBridge to offer a safe manner for BTC users or holders to opt-in their assets to our layer2 ecosystem."}),"\n",(0,r.jsx)(i.p,{children:"The key design philosophy of zkBridge is guaranteeing that all operations on zkBridge can be proved by zk-SNARKS proofs and these proofs will be kept verifiable by any third-party."}),"\n",(0,r.jsx)(i.p,{children:"By providing ZKP for bridging activities (Deposit, Mint, Burn and Withdraw) our zkBridge is introducing minimized trust assumptions to asset bridging between Bitcoin (L1) and BitcoinZK (L2). Especially, BTC Deposit-Mint activiies can be performed with 1-of-N assumption regardless of how decentralized the notary group is."}),"\n",(0,r.jsx)(i.h2,{id:"btc-bridging",children:"BTC Bridging"}),"\n",(0,r.jsx)(i.p,{children:"We may consider BTC bridging in two directions respectively: from L1 to L2 (Deposit and Mint), from L2 to L1 (Burn and Withdraw), regarding the technical nature between Bitcoin scripts and EVM, which makes the bridging solution slightly distinguished in the two directions."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Deposit",src:t(730).A+"",width:"1690",height:"992"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Deposit and Mint"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Users deposit their BTC into the zkBridge and get 1:1 amount BTC token on bitcoinZK (the L2)."}),"\n",(0,r.jsx)(i.li,{children:"The BTC token users receive on bitcoinZK serves as the native gas fee."}),"\n",(0,r.jsx)(i.li,{children:"There will be a small portion of loss in the BTC amount bridged, which serves as the bridging fee and will be used to cover the bridging cost."}),"\n",(0,r.jsx)(i.li,{children:"When users generate a bridging request, a BTC deposit address will be created, and an EVM address shall be denoted to receive the newly minted BTC token on the L2."}),"\n",(0,r.jsx)(i.li,{children:"This bridging request uniquely creates an order in the smart contract and this order will be later fulfilled by a ZK Proof submitted from the notary group as a proof of successful deposit."}),"\n",(0,r.jsx)(i.li,{children:"The Deposit-and-Mint process will be secured even if there is only one honest node in the notary group."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Withdraw",src:t(2996).A+"",width:"1704",height:"998"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Burn and Withdraw"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Users are allowed to withdraw their L1 deposits (BTC) from L2 by anytime."}),"\n",(0,r.jsx)(i.li,{children:"Users get 1:1 amount of BTC on L1 (the Bitcoin blockchain)."}),"\n",(0,r.jsx)(i.li,{children:"There will be a small portion of loss in the BTC amount bridged, which serves as the bridging fee."}),"\n",(0,r.jsx)(i.li,{children:"When users generate a bridging request, an EVM deposit address will be created, and a BTC address shall be denoted to receive the BTC withdrawal."}),"\n",(0,r.jsx)(i.li,{children:"This bridging request uniquely creates an order in the smart contract and this order will be later fulfilled by a ZK Proof submitted from the notary group as a proof of successful withdraw."}),"\n",(0,r.jsx)(i.li,{children:"The Burn-and-Withdraw process asks for 50% or more honest nodes in the notary group. The trustlessness of the notary group will be enhanced with a combination of several approaches including Stake-and-Slash scheme, shared decentralized sequencers and ZKP-triggered mandatory withdrawal."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"threshold-btc-integration",children:"Threshold BTC Integration"}),"\n",(0,r.jsx)(i.p,{children:"It should be noted that the full design of zkBridge is still under construction and it is expected to be fully delivered by the end of the Starting Phase as suggested by BitcoinZK's Tech Roadmap. We are currently leveraging the bridging infrastructure by Threshold Network, which proved to be a battle-tested and robust bridging solution between BTC and EVM-compatible chains (e.g. Ethereum)."}),"\n",(0,r.jsx)(i.p,{children:"Existing solutions that bridge Bitcoin to Ethereum require users to send their Bitcoin to an intermediary, in exchange for an ERC-20 token that represents the original asset. This centralized model requires you to trust a third party and is susceptible to censorship, threatening the premise of Bitcoin as sovereign, secure, permissionless digital asset."}),"\n",(0,r.jsx)(i.p,{children:"The Threshold Network tBTC is a truly decentralized (and scalable) bridge between Bitcoin and Ethereum. Instead of centralized intermediaries, tBTC uses a randomly selected group of operators running nodes on the Threshold Network to secure deposited Bitcoin through threshold cryptography. That means tBTC requires a threshold majority agreement before operators perform any action with your Bitcoin. By rotating the selection of operators weekly, tBTC protects against any individual or group of operators colluding to fraudulently seize the underlying deposits."}),"\n",(0,r.jsx)(i.p,{children:"This bridging scheme could be even enhanced with ZK Proof introduced into the verification process, and a mandatory withdraw request triggrerd by ZK Proof. BitcoinZK will continue to improve the security of BTC bridging based on the current solution leveraged and head for a fully ZK-featured bridge with minimized trust."})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},730:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/Deposit-f0ed28ea556988af657b4e5f7078aeac.png"},2996:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/Withdraw-44dbca06ac8b6fd55d117dc03bc5117b.png"}}]);