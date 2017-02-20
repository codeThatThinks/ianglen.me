---
title: The Internet Should Be Distributed
permalink: /blog/the-internet-should-be-distributed/
image: the-internet-should-be-distributed.jpg
hidden: 1
---

Let's face it: the internet, and computer networks in general, are still centralized systems. I don't care how many different routes may be available for a computer to take in order to access another computer—it's still a centralized system. Every computer connected to a network has to rely on a single router or switch to handle and reroute traffic on the internet.

This is a problem. It creates bottlenecks and weaknesses that limit the performance and expandability of itself. It is a threat to the security and reliability of our devices' ability to communicate with each other. Attack one specific routing device on the network, and a great many people will suffer.

In the real world, centralized systems fail. Take the power grid for example. If someone nukes the power plant, we all lose electricity. A centralized government is another example. If a governing body has to constantly issue orders and monitor everything, how could anything else get done?

With a distributed system, the responsibility doesn't fall onto a single entity. If something goes wrong, the entire system isn't at risk because each individual part of the system is self-sustaining. In the power grid example, replace the power plant with solar panels on each home and bingo! You've got yourself a distributed system. Now, if something goes wrong with one of the solar panels, only that one person loses power.

Our computer networks should be the same way. Have each device on the network be able to route data and connect to other devices directly. Forget DNS servers. Have each device hold it's own cache of domain names, similar to how each node on the Bitcoin network has a copy of the block chain. Speed would increase dramatically because to access another device, a request no longer needs to be sent to the DNS server, as it would be processed on the device itself.

This kind of a networking already exists. It is known as mesh networking.

In a perfect world, each device would connect via WiFi to a few other devices. Those devices, in turn, would be connected to other devices. Due to each device being directly connected to the open 'internet', IPv6 would have to supported natively. With this, a maximum of 3.4 x 10<sup>38</sup> devices could be supported, or about 4.9 x 10<sup>28</sup> times the total population of the world.

Security would be a big concern if the internet was a mesh network. There wouldn't be any router or firewall to protect individual devices. All data sent between two devices would have to be checked against it's MD5 checksum and a public/private key system would be employed to make sure devices are what they say they are. Encryption would be a must.

Since a distributed internet would lack DNS servers, the threat of censorship would be almost nonexistent. No SOPA, woot!

A distributed internet would be awesome. Just a thought. To be continued...

{% include ad.html %}