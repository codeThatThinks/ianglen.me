---
title: Quadcopter Status Update
category: 400mm-x-quadcopter
bg: bg.jpg
---

It's been quite a long time since I posted anything about my quadcopter and a lot has happened. Which includes me crashing it and destroying the frame.

The original design, while it did accomplish what I had set out to do, had major issues with design and execution that I am just now beginning to realize. They say you get what you pay for, and in my case, building a quadcopter on a tiny budget meant that it would perform quite poorly. The frame was probably the weakest link. It was a good idea in theory, but I underestimated how brittle the plastic frame tubes actually were. With no integrity, all it took was one crash to completely obliterate it into a million little pieces.

I could've simply built a new frame in the next few weeks using some scrap wood, but the crash caused me to rethink some of the design decisions I'd made and replace some things that I knew were bound to fail in the near future.

It turns out that the IMU was also at fault for the crash. To keep costs down, I opted to go with a cheap (\~$10) IMU module on eBay. While many people say these modules work and are good enough for quadcopter use, I neglected to look at the rated voltage. The core of my flight controller is an Arduino Pro Mini running at 5 V. So, I powered the IMU module with the 5 V output from the Arduino, assuming that since it was sold as "Arduino compatible" it would work just fine. I failed to notice that even though the module had an on-board regulator and could accept 5 V, the I<sup>2</sup>C pins were not rated for 5 V and did not include a level shifter. Oops.

My guess is that after no longer than 20 seconds in the air, I fried the IMU module and the quad fell out of the sky, smashing into the ground and destroying the frame.

Now that I'm off for winter break and have a bunch more free time, I'll focus on building a new frame, replacing the flight controller with something more reliable, and redoing motor and prop calculations in order to boost efficiency and flight time. I'm thinking about switching to a Naze32, as I was unaware until recently how inexpensive they were and that they run [baseflight](https://github.com/multiwii/baseflight), a fork of Multiwii. I'll try to post more updates in the next few weeks as I refurbish my quad.
