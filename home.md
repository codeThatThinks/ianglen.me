---
layout: home
permalink: /
---
<h2>Recent Posts</h2>
{% for post in site.posts limit: 4 %}
<article class="post">
	<time>{{ post.date | date: "%B %e, %Y" }}</time>
	<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
	<p>{{ post.excerpt }}</p>
</article>
{% endfor %}
{% assign total_posts = site.posts | size %}
{% if total_posts > 4 %}
<nav><a href="/blog/">Older Posts</a></nav>
{% endif %}