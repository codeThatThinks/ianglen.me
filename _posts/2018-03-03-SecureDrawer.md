---
title: SecureDrawer
permalink: /projects/securedrawer/
category: project
image: securedrawer-page.jpg
---

SecureDrawer is a device that can be attached to any drawer and uses Bluetooth Low Energy to automatically and painlessly lock and unlock it depending on your phone's proximity to the drawer.

<style type="text/css">
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
<p><div class="video-container"><iframe src="https://www.youtube.com/embed/_EFg5OU0XbE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></p>

During RevolutionUC 2018, we built a prototype using an Arduino Pro Mini to actuate a servo which moves the locking mechanism. A 9DOF IMU module detects vibration and can be used to determine if the drawer is being tampered with. A piezo buzzer and RGB led provide cues for when the drawer locks, unlocks, or is left open.

{% include ad.html %}
