---
title: Projects
---

{% capture sorted_projects %}
	{% for project in site.projects %}
		{% assign project_slug = project.title | slugify %}
		{% assign project_posts = site.posts | where:"category",project_slug %}
		{% assign total_project_posts = project_posts | size %}
		{% assign latest_date = project.date %}
		{% for project_post in project_posts %}
			{% if project_post.date > latest_date %}
				{% assign latest_date = project_post.date %}
			{% endif %}
		{% endfor %}
		{{ latest_date }}|{{ project.url }}|{{ project.title }}
		{% if forloop.last != true %}^{% endif %}
	{% endfor %}
{% endcapture %}
{% assign sorted_projects = sorted_projects | split:"^" | sort | reverse %}

{% for project in sorted_projects %}
{% assign project_items = project | split:"|" %}
<article>
    <span><a href="{{ project_items[1] }}">{{ project_items[2] }}</a></span>
</article>
{% endfor %}
