---
title: Bubble Tank
image: bubble-tank.jpg
bg: bubble-tank.jpg
---

Hakron 2017 hackathon project. A robot that drives around and blows bubbles.

![Bubble Tank](bubble-tank.jpg)

This project was created in 24 hours during the University of Akron's first hackathon: Hakron 1.0.

We decided to create a remote-controlled tank with a bubble gun as a turret. The tank was constructed using tracks and motors from an old toy, paired with two servos and some dollar store foam board to mount the bubble gun. A Raspberry Pi provides a WiFi hotspot with a web interface that can be used to drive the tank and aim the bubble gun. The Pi talks to an Arduino Pro Mini which drives the DC motors using an Adafruit Motor Shield V1.

![Bubble Tank Electronics](electronics.jpg)

The web app on the Raspberry Pi is written in Go and serves out an interface that can be viewed on a phone connected to the Pi's WiFi hotspot. The web app uses JavaScript and WebSockets to relay commands back to the Pi. The Pi then forwards these commands to the Arduino, which is connected via the serial port. By using WebSockets, the web interface can maintain a persistent connection with the Pi and minimize latency. It also provides the unexpected benefit of allowing multiple instances of the interface to control the tank at the same time. The interface consists buttons to aim the bubble gun, a button to shoot bubbles, and a soft joystick to drive the tank.

![Remote Control Web Interface](web-interface.png)

The Arduino receives commands from its serial port and determines the angles of the servos and the speeds of the DC motors. It uses an Adafruit Motor Shield V1 to drive the DC motors. The servos are driven directly from the digital pins of the Arduino using the Servo library.

We initially planned on using an Arduino Leonardo as the motor and servo controller. It has the same footprint as an Arduino Uno and plugs directly in to the motor shield. Unfortunately, in the early stages of writing the Arduino software, we discovered that the DC motor library (AFMotor) would not compile on the Leonardo due to the fact that it uses a different microcontroller than the Uno. We lost a few hours trying to troubleshoot it, and then we decided to move to plan B and switch it out for the only other Arduino we had with us -- a Pro Mini. The Pro Mini is electrically identical to the Uno and has the same number of pins, so the motor library compiled and worked flawlessly. The downside, however, was messy wiring because all the pins on the motor shield had to be jumpered to the Pro Mini.

The entire tank is powered from a 3S LiPo battery. An ESC (electronic speed controller) is used to easily generate 5V to power the Raspberry Pi, Arduino, and motor shield.

Our initial tests using the ESC seemed to work, but at some point, the Pi stopped creating a WiFi hotspot and the ESC got super hot. The Pi was drawing so much current that we were exceeding the 2A limit of the ESC's integrated regulator. We attempted to add another ESC to the tank for the sole purpose of powering the Pi, but it must've had an even lower current rating because it promptly exploded and released its magic smoke. When it came time to demo the project, we ended up swapping the ESC for a 10 ft USB cable and wall charger.

This project won third place and Best Hardware Hack.

The software for this project is open source and released under the MIT License. You can find the complete Arduino firmware and Raspberry Pi web interface code on [GitHub](https://github.com/codeThatThinks/bubble-tank).

You can also check out this hackathon project on [Devpost](https://devpost.com/software/bubble-tank).
