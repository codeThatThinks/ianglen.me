---
title: All Posts
permalink: /posts/
---

{% for post in site.posts %}
<article>
    <time>{{ post.date | date: "%F" }}</time>
    <a href="{{ post.url }}">{{ post.title }}</a>
</article>
{% endfor %}
