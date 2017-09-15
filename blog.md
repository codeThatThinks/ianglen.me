---
title: Blog
permalink: /blog/
---

{% for post in site.posts %}
<article class="post">
	<time>{{ post.date | date: "%B %e, %Y" }}</time>
	<h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
	<p>{{ post.excerpt }}</p>
</article>
{% endfor %}
