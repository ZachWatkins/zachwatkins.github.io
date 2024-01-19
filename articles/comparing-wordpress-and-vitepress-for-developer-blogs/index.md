---
title: 'Comparing WordPress and VitePress For Developer Blogs'
author: Zachary Watkins
date: 2024-1-17
---

Developers have many options when creating their own website. I always recommend WordPress for organizations and businesses, but I decided to move my personal website to a static site generator called VitePress. I'll explain the tradeoffs.

---

[[toc]]

This year I want to start writing more for my personal website, and I'm pretty sure that it will be easier and faster if I can use my code editor to write articles. I also wanted to see how much time it would actually save me to build a custom theme this way. I've noticed several differences between WordPress and VitePress that I felt were worth writing about.

**_I'm not trying to convince anyone to use one framework over the other. I'm just sharing my experience and opinions. I'm also leaving plenty of opinions out and I may update this article later._**

## Background

I've designed, developed, and maintained WordPress websites, themes, and plugins since 2011 - primarily for higher education and state agencies. I've also used it to develop business websites and web applications.

In contrast, this website is my first VitePress project. I've used Vue and Vite for a few years, and heard enough about it from conference talks on [YouTube](https://youtu.be/GXr8FOssWqM?si=20IHIEMOsxi2pOj1) to look into it. The official documentation was well defined and the essential WordPress features for a blog seem to be possible in VitePress.

## Criteria

These frameworks are very different from a developer's perspective. This is a developer blog and portfolio site and I only work on it when my kids are asleep or I have a few minutes of free time. Because my time is limited, I prioritize level of effort when deciding which framework to use. WordPress solves problems that I don't have when making a developer blog and portfolio website.

I've chosen to compare them in the following areas:

1. Writing experience
2. Content discovery
3. Custom theme development
4. Forms and Email
5. Cost, Hosting, and Maintenance
6. Analytics
7. Security

There are many dimensions that I could compare them on, but I'm focused on these:

1. Which saves me the most **time**?
2. Which takes the least amount of **effort**?
3. Which is the most **affordable**?

I've given each framework a number score out of 3 for each area. Low scores are better. If an area doesn't make sense to compare, then I've left it blank.

## Writing Experience for Developer Content

|           | Time | Effort |
| --------: | :--: | :----: |
| VitePress |  1   |   1    |
| WordPress |  2   |   2    |

**Preferred: VitePress**

WordPress has a great writing experience, but writing articles is much easier with my IDE (Visual Studio Code). I write articles using markdown syntax and VitePress builds them to HTML files. If that's all I was doing then WordPress has the advantage due to the limitations of markdown syntax compared to the block editor.

Generating static pages from dynamic content is easier to implement when writing a markdown file for VitePress than a post for WordPress. I can fetch data from an API or a local file using VitePress and adapt it to an HTML template within minutes. To do this in WordPress, I would need to use a custom block or a custom shortcode written in PHP and included in a custom plugin or my custom theme. This would take much longer to implement.

Co-locating assets specific to an individual article is also easier with VitePress. I can create a directory for each article and include its unique files in that directory. With WordPress, a media library page lets me upload and manage files on the server in the `wp-content/uploads` directory and then import those files into a post using the block editor or other page features. By co-locating assets in directories, I can focus on the article without having to switch between the editor and the media library.

Regarding accessibility, this is hard to compare. If I were to compare the accessibility of all default block editor components to the accessibility of all markdown components, I'm willing to bet it's an even match. Additionally, both frameworks are capable of allowing a developer to write content with accessibility issues. This seems like a tie to me.

There's no question that I would choose WordPress for any kind of website that needed to enable a non-developer user to create or manage content. WordPress has a great writing experience and it's easy to train non-technical users to use it. It's also easier to adhere to a design system with WordPress because the block editor separates content from design fairly well.

## Content Discovery

|           | Time | Effort |
| --------: | :--: | :----: |
| VitePress |  2   |   2    |
| WordPress |  1   |   1    |

**Preferred: WordPress**

WordPress has a built-in search feature that works well, and has post tags and categories that provide dynamic routes for post collections. It's hard to argue that a website without content in a database is better at providing content discovery than a website with content in a database.

If we were only talking about full text searches then by level of effort they would be evenly matched. VitePress includes a surprisingly effective full text search feature in the default theme. Here is how I added it to my custom theme: [Add search #19](https://github.com/ZachWatkins/zachwatkins.github.io/pull/19/files). I can't say how well this will scale, since I only have 3 articles as of this writing.

I may be wrong, but to provide a search feature with filters and sorting I believe it would take significantly more effort to do this in VitePress than WordPress.

## Custom Theme Development

|           | Time | Effort |
| --------: | :--: | :----: |
| VitePress |  1   |   2    |
| WordPress |  2   |   3    |

**Preferred: VitePress**

I've developed custom themes for WordPress for years, and I've developed custom themes for VitePress for a few weeks. That being said, my comparison is based on making an identical custom theme with both frameworks.

It's been quick and easy to develop this site's VitePress theme as a series of Vue components, which are little more than HTML templates with TailwindCSS and data loaders. If I were to write the same HTML templates in a WordPress theme, I would need to write them in PHP and use WordPress hooks, filters, and templates to output the HTML with data sanitization. This would take longer to implement, and would be more verbose markup.

Hot module reloading with VitePress can speed up development with a faster feedback loop.

Search engine optimization (SEO) seems pointless to compare, but I'll say that it's easier to have good SEO with a WordPress site than if I'm writing my own HTML in a custom VitePress theme. The only real way to test SEO is to publish a site and check out the results using a tool like Google Search Console.

Accessibility is also difficult to compare. Since I don't need a UI to write content, the only accessibility I care about is the public-facing website. Neither framework makes it easier or harder to write accessible HTML. I can use a component library with accessibility assurances with either framework.

Overall, I prefer VitePress for custom theme development because it's faster and easier to write HTML templates with Vue components than PHP templates with WordPress hooks and filters.

## Forms and Email

|           | Time | Effort |
| --------: | :--: | :----: |
| VitePress |  3   |   2    |
| WordPress |  2   |   1    |

**Preferred: WordPress**

Without server scripting, I can't send email, receive form submissions, or store them in a database. I can use a third party service for these things, but I have to consider the financial cost and level of effort to implement and maintain each service. With WordPress, I can send email, receive form submissions, and store them in a database by writing my own PHP scripts or using plugins. I've implemented these features for long enough to know it's a piece of cake with WordPress and just takes some time to set up plugins.

If I had to pick an ideal solution for doing this with VitePress, I would use Google Forms and manually send emails on a schedule. I could also try using push notifications or RSS feeds instead of sending general audience notification emails.

## Cost, Hosting, and Maintenance

|           | Time | Effort | Cost |
| --------: | :--: | :----: | :--: |
| VitePress |  1   |   1    |  1   |
| WordPress |  3   |   2    |  3   |

**Preferred: VitePress**

A static website is quick, easy, and more affordable to host and maintain than a Linux server running Apache or NGINX, MySQL, and PHP.

The only thing I actually need to pay for in a VitePress site is the domain name, unless I need a third party service for things like sending emails or handling form submissions. For a WordPress website hosting is typically the highest cost, but affordable shared hosting plans are available from several hosting providers. I was using Namecheap's Stellar Plus plan for $42.88 / year ($3.57 / month). The VitePress site is hosted for free on GitHub Pages. In either case I pay about $10 / year for a custom domain and get an SSL certificate for free.

When using a static site generator like VitePress, I don't have to worry about server security, database backups, or server updates. I can focus on writing content and developing the theme. Deployment from GitHub Actions is simple and fast, but is a pain to set up for most WordPress hosts. WP Engine makes it easy with their own GitHub Action but the cost of their hosting plans are outside of the budget for my developer blog.

One of the nice things about a static site is how easy it is to look at or revert to a previous version of the site since it's all in version control. I can only do this with a WordPress site if I develop my theme and content in a way where all of the content and media files are in version control. This is possible, but the extra time and complexity doesn't seem worth it to me.

It might take close to the same amount of time to create a WordPress website as a VitePress website if I'm using a good WordPress hosting provider. Both take similar effort to assign a custom domain and SSL certificate. Long term maintenance effort for a WordPress website is possibly even to a VitePress website if I enable automatic updates, use a good hosting provider, and don't install plugins that I can't set to auto-update.

If I use page caching for WordPress to improve load times, then I'll need to ensure the feature that provides this caching can update the cache when I change the site's content. I'll also need Wordfence or another security plugin to protect the site from malicious activity that can lead to denial of service for legitimate users. Theoretically I could also need this for a VitePress site, but it's less likely to be a target for attacks from the start.

## Analytics

|           | Time | Effort |
| --------: | :--: | :----: |
| VitePress |  2   |   2    |
| WordPress |  1   |   1    |

**Preferred: WordPress**

Hands-down the easiest time I'll have adding analytics to a blog is with WordPress. I can self-host analytics logic and data, or use a plugin (Jetpack, Monster Insights, etc.) and configure the third party service's credentials. Plugins can embed analytics data in the WordPress admin user interface which makes it quick and easy to check. If the content writing experience for my developer blog weren't so much better with VitePress, I would have stuck with WordPress for its ease of implementation for site analytics and content discovery.

It's easy enough to add Google Analytics to a VitePress site and check it in the Google Analytics dashboard. That being said it adds time and effort long-term to check analytics in a third party service instead of in the WordPress admin user interface where I'm already logging in anyway.

## Security

|           | Time | Effort |
| --------: | :--: | :----: |
| VitePress |  1   |   1    |
| WordPress |  3   |   2    |

**Preferred: VitePress**

Without a database, users, or public forms, there's not much to secure with a VitePress site. I just need an SSL certificate and a good hosting provider. If and when I need forms, like a newsletter or contact form, then I can try a third party service, but if the level of effort or cost is too high then I may consider switching back to WordPress.

When installed correctly and on a good hosting provider, WordPress Core is generally secure. Problems arise when a plugin or theme has a security vulnerability, the WordPress installation and PHP version aren't kept up to date, or the site isn't with a good hosting provider. Additional measures I recommend are to install and configure the Wordfence plugin, turn off user account creation and post comments, turn off XML RPC, and use Wordfence's two-factor user authentication feature.

## Conclusion

|           | Time | Effort | Cost |
| --------: | :--: | :----: | :--: |
| VitePress |  11  |   11   |  1   |
| WordPress |  14  |   12   |  3   |

It's close but I'm not that surprised. The best way I can explain this score is that the time saved with using WordPress to provide the features that most developer blogs have is offset by the additional time and effort to develop its custom theme and maintain the site long-term.

VitePress has been great to work with, and I'm happy with it so far. If I get to a point where I need server-side features that would cost more than a WordPress hosting plan or take too much of my time away from writing, then I'll reconsider using WordPress. I'm happy with the tradeoffs for now and I'm trying to keep things simple.
