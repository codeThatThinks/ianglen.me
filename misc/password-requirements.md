---
layout: page
title: Password Requirements for Various Websites
permalink: /misc/password-requirements/
excerpt: I'm trying to fix bad password requirements, one website at a time.
---

I'm trying to fix bad password requirements, one website at a time. So many websites have terrible password requirements that force user to choose insecure but hard to remember passwords. Ideally, a password should be __very long__ and __memorable__.

[Relevant XKCD](https://xkcd.com/936/).

## What is "secure"?

I'm not a security expert, but based on what I've read, these requirements are what I consider secure enough for the basic internet user.

Think you know better? I'd like to hear your point of view, so [shoot me an email](mailto:ian@ianglen.me). I'll try to keep this page updated as I learn more.

### Minimum Length

__8__

This should be the absolute minimum. Password length is the number one priority when protecting against a brute force attack, and as the length increases, the time required to crack it (and therefore it's level of security) increases exponentially.

### Maximum Length

__infinite*__

In a perfect world, a password of infinite length is immune to brute force attacks, because after a while it gets ridiculous to attack a password of a certain length. Websites should allow any length for a password as long as it meets the minimum length requirement.

*Obviously, it is impossible to allow infinitely long passwords, as there are technical issues with storing it (e.g. disk space, memory, etc.). However, if the password is hashed with SHA-256 and then stored using bcrypt (the recommended password hashing function at the moment), you shouldn't have to worry about users entering passwords that are too long. By hashing with SHA-256 first, which can accept a maximum input size of ~2091752 terabytes (!!!), we can overcome the 55 character limit that bcrypt requires.

If you *must* choose a number for maximum length, go with at least __64__. But please, don't do that if you aren't absolutely forced to.

### Other Requirements

__[zxcvbn](https://github.com/dropbox/zxcvbn)__

People used to think that having a complex password meant that it was a secure password. Unfortunately, password crackers have come a long way, and they are now capable of many of the common substitutions and weird tricks people use to create complex passwords, which makes them insecure.

There are many different ways to go about creating a password that can defend against password crackers, so it is generally a good idea to use a library that focuses on determining password strength rather than creating some abritrary requirements.

I recommend [zxcvbn](https://github.com/dropbox/zxcvbn), a library created by the brilliant pepople over at Dropbox. It makes it easy to compute password strength and does all the work of juggling different password schemes for you. I'm sure there are other libraries that do a similar job, but zxcvbn is definitely the simplest.

{% include ad.html %}


## List of Password Requirements

### Accutrace PCB4U <small>(<span style="color:#c94114">BAD</span>)</small>
[http://www.pcb4u.com](http://www.pcb4u.com)

* Min. length: 5 characters
* Max. length: 12 characters


### ACT Student Web Services <small>(<span style="color:#c94114">BAD</span>)</small>
[https://www.actstudent.org](https://www.actstudent.org)

* Min. length: 7 characters
* Max. length: 12 characters
* Must contain at least 3 of the following:
  * uppercase letter
  * lowercase letter
  * a number
  * a symbol
* Cannot have more than 2 repeating characters


### AdFly <small>(<span style="color:#7fcb5c">GOOD</span>)</small>
[https://adf.ly](https://adf.ly)

* Min. length: 8 characters
* Max. length: infinite
* Must contain:
  * a letter
  * a number


### Afraid.org FreeDNS <small>(<span style="color:#c94114">BAD</span>)</small>
[http://freedns.afraid.org](http://freedns.afraid.org)

* Min. length: 4 characters
* Max. length: 16 characters


### Algorithmia <small>(<span style="color:#c94114">BAD</span>)</small>
[https://algorithmia.com](https://algorithmia.com)

* Min. length: 6 characters
* Max. length: infinite


### Analog Devices myAnalog <small>(<span style="color:#c94114">BAD</span>)</small>
[https://analog.com](https://analog.com)

* Min. length: 6 characters
* Max. length: 12 characters
* Cut, copy, and paste are disabled
* Must contain:
  * uppercase letter
  * lowercase letter
  * a number


### Autodesk <small>(<span style="color:#c94114">BAD</span>)</small>
[https://www.autodesk.com](https://www.autodesk.com)

* Min. length: 8 characters
* Max. length: 50 characters
* Must contain:
  * a letter
  * a number
* Must have at least 3 unique characters


### BitcoinCZ <small>(<span style="color:#c94114">BAD</span>)</small>
[https://mining.bitcoin.cz](https://mining.bitcoin.cz)

* Min. length: 1 character
* Max. length: infinite


### Cars.com <small>(<span style="color:#c94114">BAD</span>)</small>
[https://www.cars.com](https://www.cars.com)

* Min. length: 6 characters
* Max. length: infinite
* No spaces


{% include ad.html %}