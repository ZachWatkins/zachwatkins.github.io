---
title: 'Comparing WordPress and VitePress For Developer Blogs'
author: Zachary Watkins
date: 2024-1-15
---

Developers have many options when creating their own website. I always recommend WordPress for organizations and businesses, but I've decided to use a static site generator for zacharywatkins.com. I'll explain the tradeoffs and why I chose VitePress.

---

This year I decided to move my personal website from WordPress to VitePress for a better writing experience from my code editor. During this process, I've noticed several differences between them that I felt were worth writing about.

## Background

I've designed, developed, and maintained WordPress websites, themes, and plugins since 2011 - primarily for higher education and state agencies. I've also used it to develop business websites and web applications.

In contrast, this website is my first VitePress project. I've used Vue and Vite for a few years, and heard enough about it from Vue conference talks on [YouTube](https://youtu.be/GXr8FOssWqM?si=20IHIEMOsxi2pOj1) to look into it. The official documentation was well defined and the relevant WordPress features seem to be possible in VitePress.

## Criteria

These frameworks are very different from a developer's perspective. This is a developer blog and portfolio site and I only work on it when my kids are asleep or I have a few minutes of free time. Because my time is limited, I prioritize level of effort when deciding which framework to use. I've chosen to compare them in the following areas:

1. Writing experience
2. Content discovery
3. Custom theme development
4. Hosting
5. Maintenance
6. Cost
7. Analytics
8. Security

## Writing Experience

**Winner: VitePress**

WordPress has a great writing experience, but writing articles is much easier with my IDE (Visual Studio Code). I write articles using markdown syntax and VitePress builds them to HTML files. If that's all I was doing then WordPress has the advantage due to the limitations of markdown syntax compared to the block editor.

Generating static pages from dynamic content is easier to implement when writing a markdown file for VitePress than a post for WordPress. I can fetch data from an API or a local file using VitePress and adapt it to an HTML template within minutes. To do this in WordPress, I would need to use a custom block or a custom shortcode written in PHP and included in a custom plugin or my custom theme. This would take much longer to implement.

Co-locating assets specific to an individual article is also easier with VitePress. I can create a directory for each article and include its unique files in that directory. With WordPress, a media library page allows you to upload and manage files on the server in the `wp-content/uploads` directory and then import those files into your post using the block editor or other page features. By co-locating assets in directories, I can focus on the article without having to switch between the editor and the media library.

Regarding accessibility, this is hard to compare. If I were to compare the accessibility of all default block editor components to the accessibility of all markdown components, I'm willing to bet it's an even match. Additionally, both frameworks are capable of allowing a developer to write content with accessibility issues. This seems like a tie to me.

There's no question that I would choose WordPress for any kind of website that needed to enable a non-developer user to create or manage content. WordPress has a great writing experience and it's easy to train non-technical users to use it. It's also easier to adhere to a design system with WordPress because the block editor separates content from design fairly well.

## Content Discovery

**Winner: WordPress**

WordPress has a built-in search feature that works well, and has post tags and categories that provide dynamic routes for post collections. It's hard to argue that a website without content in a database is better at providing content discovery than a website with content in a database.

If we were only talking about full text searches then by level of effort they would be evenly matched. VitePress includes a surprisingly effective full text search feature in the default theme. Here is how I added it to my custom theme: [Add search #19](https://github.com/ZachWatkins/zachwatkins.github.io/pull/19/files). I can't say how well this will scale, since I only have 3 articles as of this writing.

I may be wrong, but to provide a search feature with filters and sorting I believe it would take significantly more effort to do this in VitePress than WordPress.

## Custom Theme Development

**Winner: VitePress**

I've developed custom themes for WordPress for years, and I've developed custom themes for VitePress for a few weeks. The challenge with developing a WordPress theme is in how long it takes to adapt a website design to the hooks and filters that allow users to customize its appearance and content. It has been far easier to develop this site's VitePress theme as a series of Vue components, which are little more than HTML templates with TailwindCSS and data loaders.

Search engine optimization (SEO) seems evenly matched between the base theme within WordPress Core (no not Twenty Twenty-Four) and a custom VitePress theme with no modifications. SEO plugins for WordPress are easy to implement and give it an advantage. I haven't implemented any SEO features in my custom VitePress theme yet aside from adhering to well-structured HTML.

Since WordPress has functions which output HTML for various front-end features, I consider it better at providing an accessible theme. I still feel confident that the disadvantage address accessibility for my VitePress theme by relying on a Vue component library with accessibility assurances or use the [USWDS](https://designsystem.digital.gov/). I can use these with either framework.

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
