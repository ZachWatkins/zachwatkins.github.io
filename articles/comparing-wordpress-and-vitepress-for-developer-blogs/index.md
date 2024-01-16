---
title: 'Comparing WordPress and VitePress For Developer Blogs'
author: Zachary Watkins
date: 2024-1-15
---

Developers have many options when creating their own website. I always recommend WordPress for organizations and businesses, but I've decided to use a static site generator for zacharywatkins.com. I'll explain the tradeoffs and why I chose VitePress.

---

While migrating my personal website to VitePress, I've noticed several things WordPress does well by default that (for now) I'm missing in VitePress. Where both systems are capable of accomplishing a feature, I use "level of effort" as the deciding factor. I'm not willing to spend a lot of time on developing features that should be included in a blog site.

I'll spend most of my time creating technical content for this site, so I want to write it from my code editor. That was the most compelling reason for me to choose a static site generator over WordPress. I specifically chose VitePress because it's focused on frontend development, and because I like Vue and Vite's focus on performance and simplicity. I also wanted to co-locate all code specific for each post, which is not easily accomplished with WordPress due to how it stores post data and media files. Post data is spread across several database tables and media files are stored in the `wp-content/uploads` directory.

## What WordPress Does Better than VitePress

1. SEO

## What VitePress can do after some work

### Dynamic routing for post collections by tag

I was able to use the dynamic routing feature of VitePress to define a route for all article tags. The current limitation not found in WordPress is that I must define the tags used by articles in `articles/tags/[tag].paths.js`. I don't intend to have many tags, but if it becomes a challenge then I can write a script to generate the list of used tags.

### Full text search

I was **very** surprised to find that VitePress has a full-text search feature. It's part of the default theme and works great, but I've implemented it into my custom theme and it works great after adding the proper CSS variables and theme configuration.

## What I haven't solved yet

### Paginated post list pages

I haven't made time to find a way to limit post archive pages to 10 posts per page and dynamically generate the subsequent pages. I'm sure it's possible, but I have a feeling the level of effort would be significant. It's not worth it yet for me because I have very few posts.
