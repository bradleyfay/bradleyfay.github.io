---
layout: page
permalink: /publications/
title: publications
description: Publications by categories in reversed chronological order.
years: [2016]
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}