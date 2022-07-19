"use strict";(self.webpackChunknetdb=self.webpackChunknetdb||[]).push([[757],{7319:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"ospf"},s="Open Shortest Path First (OSPF)",o={unversionedId:"ospf",id:"ospf",title:"Open Shortest Path First (OSPF)",description:"OSFP is a link state routing protocol, which means the routers exchange information with their nearest neighbors using Link State Advertisements (LSAs) and populate the Link State Database (LSDB).",source:"@site/docs/ospf.md",sourceDirName:".",slug:"/ospf",permalink:"/netdb/ospf",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"ospf"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/netdb/"}},l={},p=[{value:"LSA types",id:"lsa-types",level:2},{value:"OSPF Lab",id:"ospf-lab",level:2},{value:"Topology",id:"topology",level:3},{value:"R1",id:"r1",level:4}],u={toc:p};function h(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-shortest-path-first-ospf"},"Open Shortest Path First (OSPF)"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"460",height:"300",src:"/netdb/img/networkdiagrams/OSPF.svg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OSFP")," is a link state routing protocol, which means the routers exchange information with their nearest neighbors using Link State Advertisements (LSAs) and populate the Link State Database (LSDB). "),(0,r.kt)("h2",{id:"lsa-types"},"LSA types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type 1 - Router LSA ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"each router in the area will flood LSA type 1 to all routers within the same area. "))),(0,r.kt)("li",{parentName:"ul"},"Type 2 - Network LSA",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"}))),(0,r.kt)("li",{parentName:"ul"},"Type 3 - Summary LSA"),(0,r.kt)("li",{parentName:"ul"},"Type 4 - Summary ASBR LSA"),(0,r.kt)("li",{parentName:"ul"},"Type 5 - Autonomous System External LSA"),(0,r.kt)("li",{parentName:"ul"},"Type 6 - Multicast OSPF LSA"),(0,r.kt)("li",{parentName:"ul"},"Type 7 - Not-so-stubby area LSA"),(0,r.kt)("li",{parentName:"ul"},"Type 8 - External attribute LSA for BGP")),(0,r.kt)("h2",{id:"ospf-lab"},"OSPF Lab"),(0,r.kt)("h3",{id:"topology"},"Topology"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"500",height:"500",src:"/netdb/img/networkdiagrams/OSPFLab.svg"})),(0,r.kt)("h4",{id:"r1"},"R1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"hostname R1\n!\ninterface Ethernet1\n   no switchport\n   ip address 1.1.1.1/30\n!\ninterface Ethernet2\n   no switchport\n   ip address 2.2.2.1/30\n")))}h.isMDXComponent=!0}}]);