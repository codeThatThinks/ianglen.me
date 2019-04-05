---
title: Project Post Title
permalink: /projects/project-slug/project-post-slug/
category: project-post
project: project-slug
image: project-post-slug.jpg
---

Copy this to _posts folder to create a new project post. Make sure to set the project slug and permalink properly. To add a post image, copy an image to the content folder and set the image variable above.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is an example of an image:

{% include image.html src='/content/image-name.jpg' alt='Image Description' %}

This is an example of an embedded YouTube video:

{% include youtube.html url='https://www.youtube.com/embed/_EFg5OU0XbE' %}
