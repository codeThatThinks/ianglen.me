---
title: Projects
permalink: /projects/
---

{% capture sorted_projects %}{% assign projects = site.posts | where:"category","project" %}{% for project in projects %}{% assign project_slug = project.title | slugify:default %}{% assign project_updates = site.posts | where:"category","project-update" | where:"project",project_slug %}{% assign total_updates = project_updates | size %}{% assign latest_date = project.date %}{% if total_updates > 0 %}{% assign latest_date = project_updates.first.date %}{% for update in project_updates %}{% if update.date > latest_date %}{% assign latest_date = update.date %}{% endif %}{% endfor %}{% endif %}{{ latest_date }}|{{ project.date }}|{{ project.title }}|{{ project.url }}|{{ project.excerpt }}{% if forloop.last != true %}^{% endif %}{% endfor %}{% endcapture %}{% assign sorted_projects = sorted_projects | split:"^" | sort | reverse %}

{% for project in sorted_projects %}
{% assign project_items = project | split:"|" %}
<article class="post">
    <time>{{ project_items[0] | date: "%B %e, %Y" }}</time>
    <h3><a href="{{ project_items[3] }}">{{ project_items[2] }}</a></h3>
    <p>{{ project_items[4] }}</p>
</article>
{% endfor %}
