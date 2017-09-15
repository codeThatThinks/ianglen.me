---
layout: page
title: Older Posts
permalink: /blog/
---

{% for post in site.posts offset:5 %}
<article class="post">
	<time>{{ post.date | date: "%B %e, %Y" }}</time>
	<h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
	<p>{{ post.excerpt }}</p>
</article>
{% endfor %}