---
title: SecureDrawer
permalink: /projects/securedrawer/
category: project
image: securedrawer-page.jpg
---

SecureDrawer is a device that can be added to any drawer to enable it to locked with your phone. It uses Bluetooth Low Energy to automatically and painlessly lock and unlock depending on your proximity to the drawer.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_EFg5OU0XbE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

During RevolutionUC 2018, we built a prototype using an Arduino Pro Mini to actuate a servo which moves the locking mechanism. A 9DOF IMU module detects vibration and can be used to determine if the drawer is being tampered with. A piezo buzzer and RGB led provide cues for when the drawer locks, unlocks, or is left open.

{% include ad.html %}
