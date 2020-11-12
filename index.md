---
layout: landing
permalink: /
---
## Recent Posts

{% for post in site.posts limit: 4 %}
<article>
	<time>{{ post.date | date: "%F" }}</time>
	<a href="{{ post.url }}">{{ post.title }}</a>
</article>
{% endfor %}

[All Posts](/posts/)
