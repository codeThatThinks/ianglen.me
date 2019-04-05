---
title: All Posts
permalink: /posts/
---

{% for post in site.posts%}
<article class="post">
    <time>{{ post.date | date: "%B %e, %Y" }}</time>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
</article>
{% endfor %}
