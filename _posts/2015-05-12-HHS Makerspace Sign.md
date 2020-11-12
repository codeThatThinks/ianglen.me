---
title: HHS Makerspace Sign
permalink: /projects/hhs-makerspace-sign/
category: project
image: hhs-makerspace-sign.jpg
---

An LED sign for the Hudson High School makerspace. It features the HHS ship and "MAKERSPACE" spelled out in LEDs.

Check this project out on [GitHub](https://github.com/codeThatThinks/hhs-makerspace-sign).

{% include image.html src='/content/hhs-makerspace-sign.jpg' alt='The completed sign.' %}

{% include image.html src='/content/hhs-makerspace-sign-pcb.png' alt='The finished PCB layout.' %}

I imported a vector image of the HHS Ship into gEDA and constructed it out of PCBs. Each board was hand etched and cut out with a Dremel. Everything is mounted to an acrylic sheet.

{% include image.html src='/content/hhs-makerspace-sign-etched.jpg' alt='All PCBs have been etched.' %}

The main board has the text 'MAKERSPACE' spelled out using individual LEDs. There are three different sections of LEDs: the boat, the sails, and the flags. I've included pads on the main board so that transistors can be added in the future if I ever wanted to control the sign with an external microcontroller.

{% include image.html src='/content/hhs-makerspace-sign-uc-inputs.jpg' alt='Transistors can be added so that an external microcontroller can individually control each section of LEDs.' %}

{% include image.html src='/content/hhs-makerspace-sign-testing.jpg' alt='Testing LED current draw.' %}

The original design used a 12V zener diode as a crude voltage regulator to protect the sign from higher voltages. After some testing, I realized that it wasn't going to cut it, so I cut some traces and added an LM2940 linear regulator. It might not look pretty, but it's mostly hidden and gets the job done.

{% include image.html src='/content/hhs-makerspace-sign-regulator.jpg' alt='The zener diode was replaced with a linear regulator.' %}

{% include image.html src='/content/hhs-makerspace-sign-side-view.jpg' alt='Side view.' %}

I initially had trouble with the LEDs getting too hot to touch. They were operating near the maximum forward current, but still within spec. The issue was the PCB was unable to dissipate enough heat. Being only 1/2 oz^2, there just wasn't enough copper on the board to act as a heatsink. I replaced all the current limiting resistors with ones of double value, and while the brightness only decreased slightly, the power dissipation dropped dramatically.

{% include image.html src='/content/hhs-makerspace-sign-mounting.jpg' alt='Each PCB is mounted to the acrylic using spacers and #2 screws.' %}

This project is open source hardware. It is released under the MIT license. You can find the complete schematics, board layouts, and bill of materials over on [GitHub](https://github.com/codeThatThinks/hhs-makerspace-sign).
