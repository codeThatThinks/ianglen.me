---
title: All Posts
permalink: /posts/
---

{% for post in site.posts%}
<article class="post">
    <time>{{ post.date | date: "%B %e, %Y" }}</time>
    <h3><a href="{{ post.url }}">{% if post.category == "project-update" %}Project Update: {% endif %}{{ post.title }}</a></h3>
    <p>{{ post.excerpt }}</p>
</article>
{% endfor %}
