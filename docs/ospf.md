---
sidebar_position: 1
slug: ospf
---

# Open Shortest Path First (OSPF)

<p align="center">
    <img width="460" height="300" src="/netdb/img/networkdiagrams/OSPF.svg"/>
</p>

**OSFP** is a link state routing protocol, which means the routers exchange information with their nearest neighbors using Link State Advertisements (LSAs) and populate the Link State Database (LSDB). 

## OSFP neighbor relationship

There are 5 types of messages 

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


## Link State exchange 

* Link State Request (LSR)

* Link State Advertisement (LSA)

* Link State Update (LSU)


## Basic OSPF Lab 

### Topology

<p align="center">
    <img width="500" height="500" src="/netdb/img/networkdiagrams/OSPFLab.svg"/>
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
!
ip routing
!
router ospf 1
   network 1.1.1.0/30 area 0.0.0.1
   network 2.2.2.0/30 area 0.0.0.1
   max-lsa 12000
!
```

#### R2

```java
hostname R2
!
interface Ethernet1
   no switchport
   ip address 1.1.1.2/30
!
interface Loopback0
   ip address 172.16.1.1/16
!
ip routing
!
router ospf 2
   network 1.1.1.0/30 area 0.0.0.1
   network 172.16.0.0/16 area 0.0.0.2
   max-lsa 12000
!
```

#### R3

```java
hostname R3
!
interface Ethernet2
   no switchport
   ip address 2.2.2.2/30
!
interface Loopback0
   ip address 10.0.0.1/16
!
ip routing
!
router ospf 3
   network 2.2.2.0/30 area 0.0.0.1
   network 10.0.0.0/16 area 0.0.0.3
   max-lsa 12000
!
```

### Show commands to confirm 

#### R1

```java
R1#show ip ospf neighbor
Neighbor ID     Instance VRF      Pri State                  Dead Time   Address         Interface
172.16.1.1      1        default  1   FULL/BDR               00:00:29    1.1.1.2         Ethernet1
10.0.0.1        1        default  1   FULL/DR                00:00:38    2.2.2.2         Ethernet2

R1#show ip route

VRF: default
Codes: C - connected, S - static, K - kernel,
       O - OSPF, IA - OSPF inter area, E1 - OSPF external type 1,
       E2 - OSPF external type 2, N1 - OSPF NSSA external type 1,
       N2 - OSPF NSSA external type2, B - Other BGP Routes,
       B I - iBGP, B E - eBGP, R - RIP, I L1 - IS-IS level 1,
       I L2 - IS-IS level 2, O3 - OSPFv3, A B - BGP Aggregate,
       A O - OSPF Summary, NG - Nexthop Group Static Route,
       V - VXLAN Control Service, M - Martian,
       DH - DHCP client installed default route,
       DP - Dynamic Policy Route, L - VRF Leaked,
       G  - gRIBI, RC - Route Cache Route

Gateway of last resort is not set

 C        1.1.1.0/30 is directly connected, Ethernet1
 C        2.2.2.0/30 is directly connected, Ethernet2

```
R1 is only learning connected routes becuase is not part of OSPF area2 or OSPF area3

#### R2
```java
R2#show ip ospf neighbor
Neighbor ID     Instance VRF      Pri State                  Dead Time   Address         Interface
2.2.2.1         2        default  1   FULL/DR                00:00:36    1.1.1.1         Ethernet1

R2#show ip route

VRF: default
Codes: C - connected, S - static, K - kernel,
       O - OSPF, IA - OSPF inter area, E1 - OSPF external type 1,
       E2 - OSPF external type 2, N1 - OSPF NSSA external type 1,
       N2 - OSPF NSSA external type2, B - Other BGP Routes,
       B I - iBGP, B E - eBGP, R - RIP, I L1 - IS-IS level 1,
       I L2 - IS-IS level 2, O3 - OSPFv3, A B - BGP Aggregate,
       A O - OSPF Summary, NG - Nexthop Group Static Route,
       V - VXLAN Control Service, M - Martian,
       DH - DHCP client installed default route,
       DP - Dynamic Policy Route, L - VRF Leaked,
       G  - gRIBI, RC - Route Cache Route

Gateway of last resort is not set

 C        1.1.1.0/30 is directly connected, Ethernet1
 O        2.2.2.0/30 [110/20] via 1.1.1.1, Ethernet1
 C        172.16.0.0/16 is directly connected, Loopback0
```

R2 is learning connected routes and OSPF routes from R1

#### R3
```java
R3#sh ospf neighbor
R3#sh ip ospf neighbor
Neighbor ID     Instance VRF      Pri State                  Dead Time   Address         Interface
2.2.2.1         3        default  1   FULL/BDR               00:00:33    2.2.2.1         Ethernet2

R3#show ip route

VRF: default
Codes: C - connected, S - static, K - kernel,
       O - OSPF, IA - OSPF inter area, E1 - OSPF external type 1,
       E2 - OSPF external type 2, N1 - OSPF NSSA external type 1,
       N2 - OSPF NSSA external type2, B - Other BGP Routes,
       B I - iBGP, B E - eBGP, R - RIP, I L1 - IS-IS level 1,
       I L2 - IS-IS level 2, O3 - OSPFv3, A B - BGP Aggregate,
       A O - OSPF Summary, NG - Nexthop Group Static Route,
       V - VXLAN Control Service, M - Martian,
       DH - DHCP client installed default route,
       DP - Dynamic Policy Route, L - VRF Leaked,
       G  - gRIBI, RC - Route Cache Route

Gateway of last resort is not set

 O        1.1.1.0/30 [110/20] via 2.2.2.1, Ethernet2
 C        2.2.2.0/30 is directly connected, Ethernet2
 C        10.0.0.0/16 is directly connected, Loopback0
```

R3 is learning connected routes and OSPF routes from R1


## Basic OSPF Lab 2

### Topology

<p align="center">
    <img width="500" height="500" src="/netdb/img/networkdiagrams/OSPFLab.svg"/>
</p>

#### R1

```java
hostname R1
!
interface Ethernet1
   no switchport
   ip address 11.11.11.1/30
!
interface Ethernet2
!
interface Ethernet3
   no switchport
   ip address 33.33.33.2/30
!
interface Loopback0
   ip address 1.1.1.1/32
!
interface Management1
!
ip routing
!
router bgp 1111
   neighbor 11.11.11.2 remote-as 7777
!
router ospf 1
   redistribute bgp
   network 33.33.33.0/30 area 0.0.0.0
   max-lsa 12000
!
end
```

#### R2

```java
hostname R2
!
interface Ethernet1
!
interface Ethernet2
   no switchport
   ip address 22.22.22.1/30
!
interface Ethernet7
   no switchport
   ip address 77.77.77.2/30
!
interface Ethernet8
!
interface Loopback0
   ip address 2.2.2.2/32
!
interface Management1
!
ip routing
!
router bgp 1111
   neighbor 77.77.77.1 remote-as 7777
!
router ospf 1
   network 22.22.22.0/30 area 0.0.0.0
   max-lsa 12000
!
end
```
#### R3

```java
hostname R3
!
interface Ethernet1
!
interface Ethernet2
   no switchport
   ip address 22.22.22.2/30
!
interface Ethernet3
   no switchport
   ip address 33.33.33.1/30
!
interface Ethernet4
   no switchport
   ip address 44.44.44.2/30
!
interface Ethernet5
   no switchport
   ip address 55.55.55.2/30
!
interface Loopback0
   ip address 3.3.3.3/32
!
interface Management1
!
ip routing
!
router ospf 1
   network 22.22.22.0/30 area 0.0.0.0
   network 33.33.33.0/30 area 0.0.0.0
   network 44.44.44.0/30 area 0.0.0.0
   network 55.55.55.0/30 area 0.0.0.0
   max-lsa 12000
!
end
```
#### R4

```java
hostname R4
!
interface Ethernet1
!
interface Ethernet2
!
interface Ethernet3
!
interface Ethernet4
   no switchport
   ip address 44.44.44.1/30
!
interface Ethernet5
!
interface Ethernet6
   no switchport
   ip address 88.88.88.1/30
!
interface Ethernet7
!
interface Ethernet8
!
interface Ethernet9
!
interface Loopback0
   ip address 4.4.4.4/32
!
interface Management1
!
ip routing
!
router ospf 1
   network 44.44.44.0/30 area 0.0.0.0
   network 88.88.88.0/30 area 0.0.0.2
   max-lsa 12000
!
end
```
#### R5

```java
hostname R5
!
interface Ethernet5
   no switchport
   ip address 55.55.55.1/30
!
interface Ethernet6
!
interface Ethernet7
!
interface Ethernet8
   no switchport
   ip address 66.66.66.2/30
!
interface Ethernet9
!
interface Loopback0
   ip address 5.5.5.5/32
!
interface Management1
!
ip routing
!
router ospf 1
   network 55.55.55.0/30 area 0.0.0.0
   network 66.66.66.0/30 area 0.0.0.2
   max-lsa 12000
!
end
```

#### R6

```java
hostname R6
!
interface Ethernet1
!
interface Ethernet6
   no switchport
   ip address 88.88.88.2/30
!
interface Ethernet7
!
interface Ethernet8
   no switchport
   ip address 66.66.66.1/30
!
interface Ethernet9
!
interface Loopback0
   ip address 6.6.6.6/32
!
interface Management1
!
ip routing
!
router ospf 1
   network 66.66.66.0/30 area 0.0.0.2
   network 88.88.88.0/30 area 0.0.0.2
   max-lsa 12000
!
end
```

#### NYSE

```java
hostname NYSE
!
interface Ethernet1
   no switchport
   ip address 11.11.11.2/30
!
interface Ethernet7
   no switchport
   ip address 77.77.77.1/30
!
interface Ethernet8
!
interface Loopback0
   ip address 7.7.7.7/32
!
interface Management1
!
ip routing
!
router bgp 7777
   neighbor 11.11.11.1 remote-as 1111
   neighbor 77.77.77.2 remote-as 1111
   redistribute connected
!
router ospf 1
   network 7.7.7.7/32 area 0.0.0.1
   network 11.11.11.0/30 area 0.0.0.1
   max-lsa 12000
!
end
```
