---
title: Filament Tracker Concept
category: 3d-printer-filament-tracker
image: overview.jpg
bg: overview.jpg
---

We had an internal hackathon day at work, so I decided to throw together a project to track 3D printer filament. I wanted something that could track multiple spools and display the status on a dashboard. I used a load cell to measure filament spool weights. The filament runs through a photo gate sensor before going to the printer to detect when the end comes off the spool.

![Filament sensor with Arduinos and ESP8266](overview.jpg)

With some plywood and 3D printed parts, I was able to make a holder for the spool and mount the load cell and photo gate. Interestingly, having the filament positioned in the center of the photo gate does not trigger the beam, instead the beam is offset slightly towards the end of the sensor.

![Closeup of filament load cell and photo gate sensors](closeup.jpg)

![Photo gate sensor](photo_gate.jpg)

I forgot to order a load cell amplifier break-out for the event, so I threw together a quick and dirty instrumentation amplifier with a LM324 quad op-amp and fed the output into an Arduino. The performance was sub-par at best, but in the end I was able to get a usable 200mV signal. Generally load cells require a precision amplifier and ADC to measure the small change in resistance of load cell as weight is applied. Converting the ADC readings into usable weights wasn't pretty either. A simple `map()` function with the approximate ADC signal bounds and I was able to convert to pseudo-kilograms -- enough to build out the rest of the project. Ideally a real filament tracker would incorporate some sort of load cell calibration feature to get accurate weights.

![Load cell amplifier](load_cell_amplifier.jpg)

In order to tackle multiple spools and make it easy to add or remove spools, each spool sensor sits on an I2C bus. For this proof of concept, I used multiple Arduinos as slave devices and an ESP8266 as the master. Each Arduino reads digital pins 2, 3, and 4 on startup to set its I2C address, then waits for the master before reading the ADC and photo gate input. The ESP queries each spool sensor every two seconds, then displays the list of spools and their statuses.

I had initially planned for the ESP8266 to have a web interface to more easily view the filament statuses, but an eight hour hackathon flies by quick. I settled for basic serial output instead.

![ESP8266 serial output](serial_output.png)

In the end, the project demonstrates the filament tracker idea I had in my head. I might build a less-hacky version in the future with some new ideas that occurred to me while building the project. The spool holder could probably be made almost entirely out of PCBs with the load cell chip directly mounted to it, eliminating the aluminum bar. RFID would also be a neat feature, so that the system could detect the type of filament or even keep track of spool weights that are not currently in use by the printer.
