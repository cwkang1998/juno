"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[464],{4790:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(4848),i=s(8453);const r={slug:"/",sidebar_position:1,title:"Quick Start"},o="Sync Starknet in Two Commands",c={id:"intro",title:"Quick Start",description:"Juno is your fast and featureful Starknet client implementation.",source:"@site/versioned_docs/version-0.11.0/intro.md",sourceDirName:".",slug:"/",permalink:"/0.11.0/",draft:!1,unlisted:!1,tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Quick Start"},sidebar:"main",next:{title:"Example Configuration",permalink:"/0.11.0/config"}},a={},l=[];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"Juno is your fast and featureful Starknet client implementation."})}),"\n",(0,t.jsx)(e.p,{children:"Suitable for casual setups, production-grade indexers, and everything in between."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\ud83d\udcbe"," ",(0,t.jsx)(e.strong,{children:"Tiny database size"}),": ~156Gb on mainnet"]}),"\n",(0,t.jsxs)(e.li,{children:["\u26a1"," ",(0,t.jsx)(e.strong,{children:"Blazing fast sync"}),": constrained only by hardware and the sequencer"]}),"\n",(0,t.jsxs)(e.li,{children:["\ud83d\udcaf"," ",(0,t.jsxs)(e.strong,{children:["100% ",(0,t.jsx)(e.a,{href:"https://github.com/starkware-libs/starknet-specs/tree/master",children:"JSON-RPC spec"})," compliance"]}),": all things Starknet, in one place"]}),"\n",(0,t.jsxs)(e.li,{children:["\ud83c\udfce"," ",(0,t.jsx)(e.strong,{children:"Minimal RPC response latency"}),": to keep your applications moving"]}),"\n",(0,t.jsxs)(e.li,{children:["\ud83d\udd0e"," ",(0,t.jsx)(e.strong,{children:"Low-level GRPC database API"}),": for the most demanding workloads"]}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"sync-starknet-in-two-commands",children:"Sync Starknet in Two Commands"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# Juno's database directory. Can be any directory on the machine.\nmkdir -p junodb\n\n# Juno's HTTP server listens on port 6060.\ndocker run -d --name juno -p 6060:6060 -v junodb:/var/lib/juno nethermind/juno:latest --db-path /var/lib/juno --http --http-host 0.0.0.0\n"})}),"\n",(0,t.jsxs)(e.p,{children:["For a complete list of options and their explanations, see the ",(0,t.jsx)(e.a,{href:"config",children:"Example Configuration"})," or run:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"docker run nethermind/juno --help\n"})}),"\n",(0,t.jsx)(e.h1,{id:"juno-is-compatible-with-the-following-starknet-api-versions",children:"Juno is compatible with the following Starknet API versions:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"v0.7.0"})," (Endpoint: ",(0,t.jsx)(e.code,{children:"/v0_7"}),", ",(0,t.jsx)(e.code,{children:"/rpc/v0_7"})," or default ",(0,t.jsx)(e.code,{children:"/"}),")"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"v0.6.0"})," (Endpoint: ",(0,t.jsx)(e.code,{children:"/v0_6"}),", ",(0,t.jsx)(e.code,{children:"/rpc/v0_6"}),")"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"To interact with a specific API version, you can specify the version endpoint in your RPC calls. For example:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'curl -X POST http://localhost:6060 -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"juno_version","id":1}\'\n'})}),"\n",(0,t.jsx)(e.h1,{id:"looking-for-a-starknet-rpc-provider",children:"Looking for a Starknet RPC Provider?"}),"\n",(0,t.jsxs)(e.p,{children:["Access Nethermind's Starknet RPC service for free at ",(0,t.jsx)(e.a,{href:"https://data.voyager.online",children:"data.voyager.online"}),"."]}),"\n",(0,t.jsx)(e.h1,{id:"questions-discussions-community",children:"Questions, Discussions, Community"}),"\n",(0,t.jsx)(e.p,{children:"Find active Juno team members and users in the following places."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/NethermindEth/juno",children:"GitHub"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://discord.gg/SZkKcmmChJ",children:"Discord"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://t.me/+LHRF4H8iQ3c5MDY0",children:"Telegram"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);