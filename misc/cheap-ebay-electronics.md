---
layout: page
title: Cheap eBay Electronics Modules
permalink: /misc/cheap-ebay-modules/
---

A collection of information on the various cheap electronics modules available on eBay. Some may be knockoffs or fakes, but many are just trying implement technology in the cheapest way possible.

## RF Modules
### nRF24L01

## IMUs
### GY-291

![GY-291](/content/misc/cheap-ebay-electronics/GY-291-thumbnail.jpg)   
Actual size ([View Larger Image](/content/misc/cheap-ebay-electronics/GY-291.jpg))

[Schematic for GY-291](/content/misc/cheap-ebay-electronics/GY-291-schematic.jpg)

A 3DOF IMU with a [ADXL345](http://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf) three-axis accelerometer. The GY-291 isn't technically an IMU because it lacks a gyroscope. It's basically a breakout board for the ADXL345.

There are two M3 mounting holes and a holes for an 8 pin .1" header. #4 machine screws will also fit.

This module is capable of running off 3.3-5V, as it includes an onboard voltage regulator. **However, since this module does not include a level shifter, maximum logic voltage is 3.6V. 5V logic will fry the ADXL345.** Communication is done through I<sup>2</sup>C.

It is available on eBay for about ~$2-3. Search "GY-291".

### GY-521

### GY-80

![GY-80](/content/misc/cheap-ebay-electronics/GY-80-thumbnail.jpg)   
Actual size ([View Larger Image](/content/misc/cheap-ebay-electronics/GY-80.jpg))

A 10DOF IMU module that includes [L3G4200D](http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/CD00265057.pdf) (three-axis gyroscope), [ADXL345](http://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf) (three-axis accelerometer), [HMC5883L](http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Defense_Brochures-documents/HMC5883L_3-Axis_Digital_Compass_IC.pdf) (three-axis magnetometer), and [BMP085](https://www.sparkfun.com/datasheets/Components/General/BMP085_Flyer_Rev.0.2_March2008.pdf) (barometer + temperature) sensors.

There are two M3 mounting holes and holes for a 10 pin .1" header. #4 machine screws will also fit. Two variations are available. The board layout is generally the same but the silkscreen color may be red or blue. Modules with red silkscreen include extra capacitors near the mounting holes, making it impossible to use mounting screws where the head of the screw is larger than 4mm. Fillister head machine screws can be used, as they have smaller heads, or normal machine screws can be sanded down to fit.

The module is capable of running off of 3.3-5V, as it includes an onboard voltage regulator. Also includes an onboard level shifter so it can be used with 5V logic. Communication is done though I<sup>2</sup>C.

It is available on eBay for about ~$10-20. Search "10 DOF IMU" or "GY-80".

### GY-85

### GY-86

### GY-88

{% include ad.html %}