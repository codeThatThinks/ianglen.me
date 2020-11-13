---
title: HHS Makerspace Sign
image: hhs-makerspace-sign.jpg
---

__Check out this project on [GitHub](https://github.com/codeThatThinks/hhs-makerspace-sign).__

An LED sign for the Hudson High School makerspace. It features the HHS ship and "MAKERSPACE" spelled out in LEDs.

![The completed sign lit up](/img/content/hhs-makerspace-sign/illuminated-sign.jpg)

![Sign PCB layout](/img/content/hhs-makerspace-sign/pcb-layout.png)

I imported a vector image of the HHS Ship into gEDA and constructed it out of PCBs. Each board was hand etched and cut out with a Dremel. Everything is mounted to an acrylic sheet.

![Etching PCBs](/img/content/hhs-makerspace-sign/etching-pcbs.jpg)

The main board has the text 'MAKERSPACE' spelled out using individual LEDs. There are three different sections of LEDs: the boat, the sails, and the flags. I've included pads on the main board so that transistors can be added in the future if I ever wanted to control the sign with an external microcontroller.

![Microcontroller inputs](/img/content/hhs-makerspace-sign/microcontroller-inputs.jpg)

![Testing LED current draw](/img/content/hhs-makerspace-sign/led-testing.jpg)

The original design used a 12V zener diode as a crude voltage regulator to protect the sign from higher voltages. After some testing, I realized that it wasn't going to cut it, so I cut some traces and added an LM2940 linear regulator. It might not look pretty, but it's mostly hidden and gets the job done.

![Linear regulator modification](/img/content/hhs-makerspace-sign/linear-regulator.jpg)

![Sign side view](/img/content/hhs-makerspace-sign/side-view.jpg)

I initially had trouble with the LEDs getting too hot to touch. They were operating near the maximum forward current, but still within spec. The issue was the PCB was unable to dissipate enough heat. Being only 1/2 oz^2, there just wasn't enough copper on the board to act as a heatsink. I replaced all the current limiting resistors with ones of double value, and while the brightness only decreased slightly, the power dissipation dropped dramatically.

![PCBs are mounted to acrylic with spacers and #2 screws](/img/content/hhs-makerspace-sign/pcb-mounting.jpg)

This project is open source hardware. It is released under the MIT license. You can find the complete schematics, board layouts, and bill of materials over on [GitHub](https://github.com/codeThatThinks/hhs-makerspace-sign).
