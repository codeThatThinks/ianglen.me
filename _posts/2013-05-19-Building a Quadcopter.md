---
title: Building a Quadcopter
category: 400mm-x-quadcopter
image: building-a-quadcopter.jpg
---

Well, I've finally decided to build a quadcopter: an awesome robotic flying machine that is quite an improvement on the traditional RC helicopter.

Robots are awesome, and I've been wanting to build something robotic forever. Anytime I'd see an RC helicopter or something else robotic on Hackaday or Make Magazine, I'd always think to myself, *I really need to build something like that*.

Of course, building a quadcopter is no small task. Even for someone that has spent countless hours tinkering with Arduinos and hobby electronics, building a quadcopter from scratch (and cheaply) takes a lot of skill. This will be a good test of my abilities.


## Goals

**Inexpensive**: I find it depressing when people spend many hundreds of dollars building a quadcopter. Sure, it's big and can carry your DSLR for you, but not much is gained between a cheap and expensive quadcopter. For this build, I'll try to keep the costs down to a minimum. As a result, I expect to build a small to medium-sized quadcopter.

**FPV**: Out of all the features that could go into thing build, I believe that first person video is a top priority. [FPV videos are awesome](http://www.youtube.com/watch?v=MhAMEmHbIMw), and having a camera on my quadcopter not only makes it easier to fly, but removes the requirement for me to have to see the quadcopter in order to fly it. It also serves as a place to overlay flight and sensor data.

**Recovery/Failsafe**: Crashes are inevitable. Many people have lost their quadcopter and all the work that has gone into it due to crashes. Whether it's a dead battery, out of range, or just human error, I want my quadcopter to survive and have another flight. I'm probably going to have to implement a partial autopilot in the control code (and possibly a GPS module) to deal with loss of signal, as well as design and build a sturdy and durable frame.

**Long Flight Time**: A while back, I bought a [Syma S107 helicopter](http://www.amazon.com/Syma-S107-S107G-Helicopter-Colors/dp/8499000606). It was a fantastically easy little helicopter to fly, and fairly inexpensive too. The only thing about it that really bugged me was the flight time. 15 minute charge time, 5 minute fly time really wasn't fitting for an ultralight, tiny helicopter. A quadcopter that can spend some time in the air would definitely be worth it to me.


## Design Considerations

After some extensive research, it is clear that there are a lot of things that need to go into the design. This includes the frame, motors, motor speed controllers, power regulation, telemetry, communications, extra sensors, video, ground control, and failsafe, just to name a few.

Power consumption is critical, which means I must use a switching regulator IC to provide 3.3v to the control board. In other projects, I've used a linear regulator IC instead, mainly because they are cheaper, easier to use, and way cheaper. Unfortunately, linear regulators convert any extra voltage to heat, which massively impacts efficiency. Switching regulators work differently, as they quickly switch power on and off to regulate voltage, much like how [PWM](http://en.wikipedia.org/wiki/Pulse-width_modulation) works.

The traditional 8-bit microcontroller, which is used in Arduinos, isn't going to cut it. Input from the ground has to be received, telemetry has to be monitored, motor speed must be regulated, and video must be streamed to the ground. More horsepower is needed, and that is why I plan on using one of Atmel's 32-bit ARM MCU. They have a much faster clock speed compared to 8-bit MCUs, can handle more I/O, and since firmware is written in pure C, it has more capability than anything ever written for Arduino.

An RF module could easily be one of the more costly parts for this project. However, after some looking around on eBay, it seems that Nordic has an inexpensive family of RF transceivers that will work well with the amount of data being transmitted. I've chosen a 2.4GHz module from them that provides six data streams, allowing video, sensor, and control data to be transmitted simultaneously.


## Possible Pitfalls

Again, building a quadcopter from scratch at home is not an easy task. The design, fabrication, and testing all pose possible pitfalls.

While ARM microcontrollers provide the much needed power for a quadcopter project, they also make prototyping and debugging a pain. Already I find myself looking through multi-hundred page datasheets to find even the simplest things, like the chip dimensions. All ARM MCUs are only available in hard to solder and extremely hard to solder SMD and BGA packages ([except this one](http://octopart.com/lpc1114fn28%2F102%2C12-nxp+semiconductors-22360689)), which prevents any easy prototyping. However, with the help of the Internet, I hope to overcome the challenges of developing on this platform and soldering this chip.

ARM and 8-bit are two different architectures. Many quadcopter projects out there use 8-bit MCUs, meaning I cannot use their code for my quadcopter. Everything needs to be hand ported-over or written from scratch. Developing firmware that ends up with a stable and easy to fly quadcopter will not be an easy task.

Due to the cheapness of this project, I'll probably find myself salvaging parts off dead electronics, including the camera. I plan on using a module from a cell phone, though interfacing with it might be difficult if I cannot find the proper datasheets (although I assume it is simply I2C).

In the end, getting something that at least flies will be a great achievement. Over the course of the next few weeks, I'll keep updated with the progress of the build. More blog posts will follow detailing each individual section of the design, as well as details on the fabrication.
