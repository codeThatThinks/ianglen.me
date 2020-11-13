---
title: Posts
---

{% for post in site.posts %}
<article>
    <time>{{ post.date | date: "%F" }}</time>
    <span><a href="{{ post.url }}">{{ post.title }}</a></span>
</article>
{% endfor %}
