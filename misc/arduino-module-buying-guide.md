---
layout: page
title: Arduino Module Buying Guide
permalink: /misc/arduino-module-buying-guide/
excerpt: A handy reference for cheap Arduino/RasPi/DIY electronics modules available for dirt cheap on eBay, Banggood, etc.
---

I've collected some information on cheap modules for Arduino, Raspberry Pi, etc. that can be had on eBay, Banggood, etc. for just a few bucks. There boards available for all kinds of sensors and chips, and for each chip or sensor there are many variants of breakout boards, some which are better than others. Hopefully this page helps you determine which one is best for your project as well as get it to do something useful.

If you discover a module that isn't yet on this page, please [let me know](mailto:ian@ianglen.me) so that I can add it.


## Table of Contents

* [IMU](#imu)
* [GPS](#gps)
* [Light Sensor](#light-sensor)
* [Rangefinder](#rangefinder)
* [Wireless](#wireless)


<a name="imu"></a>
## IMU

Inertial measurement units (or IMUs) are able to measure relative motion. Accelerometers measure linear acceleration along an axis, gyroscopes measure the rate of rotation about an axis, magnetometers measure the strength of Earth's magnetic field (or any magnetic field) along an axis, and barometers measure air pressure (and sometimes air temperature). Using sensor fusion algorithms, relative position and attitude can be calculated. Most of the time these calculations must be performed by the device reading the sensor, such as an Arduino, although certain sensors include digital motion processing (DMP) and can perform these calculations themselves. Degrees of freedom (DOF) are the total number of measurement axes. For example, an IMU with a three-axis accelerometer and a three-axis gyroscope would have 6 degrees of freedom.

<div class="table"><table>
	<tr><th>Name</th><th>DOF</th><th>Accel.</th><th>Gyro.</th><th>Mag.</th><th>Baro.</th><th>DMP</th><th>Price</th></tr>
	<tr><td><a href="#cjmcu-9dof">CJMCU-9DOF</a></td><td>9</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td></td><td></td><td>$4-6</td></tr>
	<tr><td><a href="#gy-80">GY-80</a></td><td>10</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td></td><td>$10-20</td></tr>
	<tr><td><a href="#gy-81">GY-81</a></td><td>10</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td></td><td>$10-20</td></tr>
	<tr><td><a href="#gy-85">GY-85</a></td><td>9</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td></td><td></td><td>$11-16</td></tr>
	<tr><td><a href="#gy-88">GY-88</a></td><td>10</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>$10-20</td></tr>
	<tr><td><a href="#gy-291">GY-291</a></td><td>3</td><td>&#10003;</td><td></td><td></td><td></td><td></td><td>$2-3</td></tr>
	<tr><td><a href="#gy-521">GY-521</a></td><td>6</td><td>&#10003;</td><td>&#10003;</td><td></td><td></td><td>&#10003;</td><td>$2-4</td></tr>
</table></div>

<a name="cjmcu-9dof"></a>
### CJMCU-9DOF

[![CJMCU-9DOF](/content/misc/cheap-ebay-electronics/CJMCU-9DOF-thumbnail.jpg)](/content/misc/cheap-ebay-electronics/CJMCU-9DOF.jpg)

A 9-DOF IMU module with a [BMX055](https://www.bosch-sensortec.com/bst/products/all_products/bmx055) three-axis accelerometer, three-axis gyroscope, and three-axis magnetometer.

It is available on eBay for about $4-6. Search "9DOF IMU" or "BMX055 IMU".

<a name="gy-80"></a>
### GY-80

[![GY-80](/content/misc/cheap-ebay-electronics/GY-80-thumbnail.jpg)](/content/misc/cheap-ebay-electronics/GY-80.jpg)

[Schematic](/content/misc/cheap-ebay-electronics/GY-80-schematic.jpg)

A 10-DOF IMU module that includes the following sensors:

* [L3G4200D](http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/CD00265057.pdf) three-axis gyroscope
* [ADXL345](http://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf) three-axis accelerometer
* [HMC5883L](http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Defense_Brochures-documents/HMC5883L_3-Axis_Digital_Compass_IC.pdf) three-axis magnetometer
* [BMP085](https://www.sparkfun.com/datasheets/Components/General/BMP085_Flyer_Rev.0.2_March2008.pdf) barometer + temperature sensor

There are two M2.5 mounting holes and holes for a 10 pin .1" header. #4 machine screws will also fit in the mounting holes. Two variations are available. The board layout is generally the same but the silkscreen color may be red or blue. Modules with red silkscreen include extra capacitors near the mounting holes, making it impossible to use mounting screws where the head of the screw is larger than 4mm. Fillister head machine screws can be used, as they have smaller heads, or normal machine screws can be sanded down to fit.

The module is capable of running off of 3.3-5V, as it includes an onboard voltage regulator. Also includes an onboard level shifter so it can be used with 5V logic. Communication is done though I<sup>2</sup>C.

It is available on eBay for about $10-20. Search "10DOF IMU" or "GY-80".

<a name="gy-81"></a>
### GY-81

A 10-DOF IMU module that is identical to the GY-80 except that it includes an [ITG3205](http://www.tinyosshop.com/datasheet/itg3205.pdf) (three-axis gyroscope) instead of the L3G4200D, and a [BMA180](https://www.sparkfun.com/datasheets/Sensors/Accelerometer/BST-BMA180-DS000-03.pdf) (three-axis accelerometer) instead of the ADXL345. The GY-81 has the same [HMC5883L](http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Defense_Brochures-documents/HMC5883L_3-Axis_Digital_Compass_IC.pdf) (three-axis magnetometer) and [BMP085](https://www.sparkfun.com/datasheets/Components/General/BMP085_Flyer_Rev.0.2_March2008.pdf) (barometer + temperature) sensors.

There are two M2.5 mounting holes and holes for a 10 pin .1" header. #4 machine screws will also fit in the mounting holes.

The module is capable of running off of 3.3-5V, as it includes an onboard voltage regulator. Also includes an onboard level shifter so it can be used with 5V logic. Communication is done though I<sup>2</sup>C.

It is available on eBay for about $10-20. Search "10DOF IMU" or "GY-81".

<a name="gy-85"></a>
### GY-85

[![GY-85](/content/misc/cheap-ebay-electronics/GY-85-thumbnail.jpg)](/content/misc/cheap-ebay-electronics/GY-85.jpg)

[Schematic](/content/misc/cheap-ebay-electronics/GY-85-schematic.jpg)

A 9-DOF IMU module that includes the following sensors:

* [ITG3205](http://www.tinyosshop.com/datasheet/itg3205.pdf) three-axis gyroscope
* [ADXL345](http://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf) three-axis accelerometer
* [HMC5883L](http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Defense_Brochures-documents/HMC5883L_3-Axis_Digital_Compass_IC.pdf) three-axis magnetometer

There is one M2.5 mounting hole and holes for an 8 pin .1" header. #4 machine screws will also fit in the mounting holes.

The module is capable of running off of 3.3-5V, as it includes an onboard voltage regulator. Also includes an onboard level shifter so it can be used with 5V logic. Communication is done though I<sup>2</sup>C.

It is available on eBay for about $11-16. Search "GY-85".

<a name="gy-88"></a>
### GY-88

[![GY-88](/content/misc/cheap-ebay-electronics/GY-88-thumbnail.jpg)](/content/misc/cheap-ebay-electronics/GY-88.jpg)

A 10-DOF IMU module that includes the following sensors:

* [MPU6050](https://www.invensense.com/products/motion-tracking/6-axis/mpu-6050/) three-axis accelerometer, three-axis gyroscope
* [HMC5883L](http://www51.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Defense_Brochures-documents/HMC5883L_3-Axis_Digital_Compass_IC.pdf) three-axis magnetometer
* [BMP085](https://www.sparkfun.com/datasheets/Components/General/BMP085_Flyer_Rev.0.2_March2008.pdf) barometer + temperature sensor

It is available on eBay for about $10-20. Search "10DOF IMU" or "GY-88".

<a name="gy-291"></a>
### GY-291

[![GY-291](/content/misc/cheap-ebay-electronics/GY-291-thumbnail.jpg)](/content/misc/cheap-ebay-electronics/GY-291.jpg)

[Schematic](/content/misc/cheap-ebay-electronics/GY-291-schematic.jpg)

A 3-DOF IMU with a [ADXL345](http://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf) three-axis accelerometer. The GY-291 isn't technically an IMU because it lacks a gyroscope. It's basically a breakout board for the ADXL345.

There are two M2.5 mounting holes and holes for an 8 pin .1" header. #4 machine screws will also fit in the mounting holes.

This module is capable of running off 3.3-5V, as it includes an onboard voltage regulator. **However, since this module does not include a level shifter, maximum logic voltage is 3.6V. 5V logic will fry the ADXL345.** Communication is done through I<sup>2</sup>C.

It is available on eBay for about $2-3. Search "GY-291".

<a name="gy-521"></a>
### GY-521

[![GY-521](/content/misc/cheap-ebay-electronics/GY-521-thumbnail.jpg)](/content/misc/cheap-ebay-electronics/GY-521.jpg)

[Schematic](/content/misc/cheap-ebay-electronics/GY-521-schematic.jpg)

A 6-DOF IMU with an [InvenSense MPU-6050](https://www.invensense.com/products/motion-tracking/6-axis/mpu-6050/) three-axis accelerometer and three-axis gyroscope that includes a digital motion processor (DMP) to perform sensor fusion. It is available on eBay for about $2-4. Search "6DOF IMU" or "GY-521".

Pinout: **I/O pins are not 5V tolerant! A level shifter is required if powering with 5V.**
* VCC: 2.375 to 5.5V (onboard regulator provides 3.3V to MPU-6050)
* SDA/SCL: I2C Bus
* XDA/XCL: I2C Bus for external sensors
* AD0: Change I2C address (LOW: 0x68, HIGH: 0x69)
* INT: Digital output interrupt

Specs:
* Gyroscope Sensitivity: &#177;250 &#176;/s, &#177;500 &#176;/s, &#177;1000 &#176;/s, &#177;2000 &#176;/s
* Accelerometer Sensitivity: &#177;2g, &#177;4g, &#177;8g, &#177;16g
* Dimensions: 20.5mm x 16mm
* Weight: 1.1g

### TODO

* GY-82
* GY-86
* GY-87
* GY-89
* GY-91
* 9DOF LSM303DLHC L3GD20
* 10DOF LSM303DLHC L3GD20 BMP180
* 6DOF Digital ADXL345 ITG3205
* ITG3205 breakout
* MPU6050 breakout
* MPU6050 mini breakout
* GY-6500
* GY-9250
* LSM9DS0 breakout
* CJMCU-32005
* GY-BMP280-3.3
* GY-BME280-3.3
* GY-BME280-5
* GY-25
* GY-26
* GY-282
* GY-511
* GY-63
* GY-652
* GY-50
* CJMCU-LIS3DH


<a name="gps"></a>
## GPS

GPS modules provide absolute position, speed over ground, and accurate time.

### TODO

* GY-GPSV3-NEO-6M
* GY-GPSV3-NEO-7M
* GY-GPSV3-NEO-M8N
* GY-GPSV5-NEO-6M
* GY-GPSV5-NEO-7M
* GY-GPSV5-NEO-M8N
* GY-GPS6MV2
* UCTRONICS UC-300


<a name="light-sensor"></a>
## Light Sensor

### TODO

* GY-2561
* GY-30
* GY-ML8511
* GY-302


<a name="rangefinder"></a>
## Rangefinder

### TODO

* HC-04


<a name="wireless"></a>
## Wireless

### TODO

* ESP8266
* ESP32
* nRF24L01
* nRF24L01+
* nRF24L01+ SMD
* HC-06
* RXB6
* RXB8
* RXC6
* SYN480R


{% include ad.html %}