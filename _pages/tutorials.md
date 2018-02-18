---
layout: page
permalink: /tutorials/
title: tutorials
description: Materials for tutorials and courses taught.
---


{% for tutorial in site.tutorials %}

{% if project.redirect %}
<div class="tutorial">
    <div class="thumbnail">
        <a href="{{ tutorial.redirect }}" target="_blank">
        {% if tutorial.img %}
        <img class="thumbnail" src="{{ tutorial.img | prepend: site.baseurl | prepend: site.url }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ tutorial.title }}</h1>
            <br/>
            <p>{{ tutorial.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}