---
sidebar_position: 1
slug: ospf
---

# Open Shortest Path First (OSPF)

<p align="center">
    <img width="460" height="300" src="/img/networkdiagrams/OSPF.svg"/>
</p>

**OSFP** is a link state routing protocol, which means the routers exchange information with their nearest neighbors using Link State Advertisements (LSAs) and populate the Link State Database (LSDB). 

## LSA types 

* Type 1 - Router LSA 
    * each router in the area will flood LSA type 1 to all routers within the same area. 
* Type 2 - Network LSA
    * 
* Type 3 - Summary LSA
* Type 4 - Summary ASBR LSA
* Type 5 - Autonomous System External LSA
* Type 6 - Multicast OSPF LSA
* Type 7 - Not-so-stubby area LSA
* Type 8 - External attribute LSA for BGP

## OSPF Lab 


### Topology

<p align="center">
    <img width="500" height="500" src="/img/networkdiagrams/OSPFLab.svg"/>
</p>

#### R1

```java
hostname R1
!
interface Ethernet1
   no switchport
   ip address 1.1.1.1/30
!
interface Ethernet2
   no switchport
   ip address 2.2.2.1/30
```
