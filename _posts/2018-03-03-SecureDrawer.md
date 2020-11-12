---
title: SecureDrawer
permalink: /projects/securedrawer/
category: project
image: securedrawer.jpg
---

SecureDrawer is a device that can be attached to any drawer and uses Bluetooth Low Energy to automatically and painlessly lock and unlock it depending on your phone's proximity to the drawer.

{% include youtube.html url='https://www.youtube.com/embed/_EFg5OU0XbE' %}

During RevolutionUC 2018, we built a prototype using an Arduino Pro Mini to actuate a servo which moves the locking mechanism. A 9DOF IMU module detects vibration and can be used to determine if the drawer is being tampered with. A piezo buzzer and RGB led provide cues for when the drawer locks, unlocks, or is left open.
