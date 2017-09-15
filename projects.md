---
layout: page
title: Projects
permalink: /projects/
---

{% for sitepage in site.pages %}
{% if sitepage.category == "project" %}
<article class="post">
	<h3><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></h3>
</article>
{% endif %}
{% endfor %}