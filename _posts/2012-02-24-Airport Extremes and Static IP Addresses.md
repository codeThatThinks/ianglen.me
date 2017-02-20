---
title: Airport Extremes and Static IP Addresses
permalink: /blog/airport-extremes-and-static-ip-addresses/
image: airport-extremes-and-static-ip-addresses/post.jpg
hidden: 1
---

*Note: By static IP addresses, I mean computer with a static internal IP address. Use Google if you're having trouble with static public IP addresses.*

While configuring a Debian gateway recently, I noticed something extremely weird with the way an AirPort Extreme handles static IP addresses. In short, it doesn't like them. Fortunately, there is a solution.

{% include image.html url="/content/airport-extremes-and-static-ip-addresses/default-settings.jpg" caption="Settings that trigger weird AirPort Extreme behavior" %}

A computer on the network managed by the AirPort Extreme has it's internal IP address set manually, with a manual subnet mask, gateway, and DNS servers. The AirPort Extreme serves IP addresses to other computer on the network via DHCP.

Any intelligent individual would set the range of DHCP address served by the AirPort Extreme to **not** include the IP address in which the computer has set manually. Because of this, the AirPort Extreme doesn't see the computer on the network and therefore doesn't handle requests sent to and from it. Other computers on the network can't even ping the computer.

**To get the AirPort to see the computer with the manual address, simply add a DHCP reservation with the IP address the computer is manually set to and it's MAC address.** There isn't a need to change the DHCP range to include the manual IP address.

{% include image.html url="/content/airport-extremes-and-static-ip-addresses/dhcp-reservation.jpg" caption="Adding a DHCP reservation makes everything work" %}

{% include ad.html %}