---
layout: landing
permalink: /
---
## Recent

{% for post in site.posts limit: 4 %}
<article class="post">
	<time>{{ post.date | date: "%B %e, %Y" }}</time>
	<h3><a href="{{ post.url }}">{% if post.category == "project-update" %}Project Update: {% endif %}{{ post.title }}</a></h3>
	<p>{{ post.excerpt }}</p>
</article>
{% endfor %}
{% assign total_posts = site.posts | size %}
{% if total_posts > 4 %}
<nav><a href="/posts/">Older Posts</a></nav>
{% endif %}
