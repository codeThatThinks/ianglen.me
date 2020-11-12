---
title: Projects
permalink: /projects/
---

{% capture sorted_projects %}{% assign projects = site.posts | where:"category","project" %}{% for project in projects %}{% assign project_slug = project.title | slugify:default %}{% assign project_posts = site.posts | where:"category","project-post" | where:"project",project_slug %}{% assign total_project_posts = project_posts | size %}{% assign latest_date = project.date %}{% if total_project_posts > 0 %}{% assign latest_date = project_posts.first.date %}{% for project_post in project_posts %}{% if project_post.date > latest_date %}{% assign latest_date = project_post.date %}{% endif %}{% endfor %}{% endif %}{{ latest_date }}|{{ project.date }}|{{ project.title }}|{{ project.url }}|{{ project.excerpt }}{% if forloop.last != true %}^{% endif %}{% endfor %}{% endcapture %}{% assign sorted_projects = sorted_projects | split:"^" | sort | reverse %}

{% for project in sorted_projects %}
{% assign project_items = project | split:"|" %}
<article>
    <time>{{ project_items[0] | date: "%F" }}</time>
    <a href="{{ project_items[3] }}">{{ project_items[2] }}</a>
</article>
{% endfor %}
