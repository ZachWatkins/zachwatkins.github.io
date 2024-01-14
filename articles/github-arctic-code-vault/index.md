---
title: 'Github preserved my WordPress code on film in the Arctic'
author: Zachary K. Watkins
date: 2022-11-4
---

It’s old news, but on February 2, 2020 (02/02/2020) Github preserved a snapshot of every active public repository. This code was compressed as individual TAR files, QR-encoded, and then preserved in film. They believe the preservation process will allow the code to be preserved in this state for 1,000 years.

---

https://github.com/users/ZachWatkins/achievements/arctic-code-vault-contributor

> _The GitHub Arctic Code Vault is a data repository preserved in the Arctic World Archive (AWA), a very-long-term archival facility 250 meters deep in the permafrost of an Arctic mountain. The archive is located in a decommissioned coal mine in the Svalbard archipelago, closer to the North Pole than the Arctic Circle. GitHub captured a snapshot of every active public repository on 02/02/2020 and preserved that data in the Arctic Code Vault._
>
> https://archiveprogram.github.com/arctic-vault/

## Most of my archived code was for WordPress plugins and themes.

While at AgriLife I developed custom plugins and themes for a network of more than 1,000 websites and more than 3,000 users. When I arrived they still uploaded changes via FTP and had to remember which sites had which repositories. I developed and implemented a continuous deployment pipeline that automated the process and cut the time down from 30-90 minutes of manual uploads to 3-5 minutes of automated uploads. You can read more about that here: https://goweb.tamu.edu/continuous-deployment-with-codeship-and-wp-engine/

I gave two conference presentations on my development and CD processes and you can check out my slides from my 2019 presentation here:

[Streamline Building, Deploying, and Maintaining Your (Higher-Ed) Websites with WordPress](/pdf/Presentation-2019-WP-Higher-Ed-WordPress.pdf)

Download I also created a set of files for facilitating this process, although it could definitely use some modernization and is specific to git push deployments: https://github.com/ZachWatkins/Template-Continuous-Deployment-Repo

## Are you using Github Actions?

I am! I deploy projects to Azure and WP Engine this way and will do so with this cPanel managed site as well once I get my content set up and figure out what custom features I want to apply first. I’ve used the [Husky NPM package](https://www.npmjs.com/package/husky) recently and really like how easy it makes scripting code checks based on Git hooks. I wish I had that 6 years ago when I was using the native Git hook system to check projects for WordPress Coding Standards and Sass style guide issues. I’ve set up my most important project at work with Composer dependency caching for faster jobs, zip deploy for faster upload times, and I also create an artifact of the deployment manifest so I know what files were included in the upload.

When I get the chance I’ll look for ways to integrate unit tests into Actions, although most of the tests I do right now require a database and none of my projects are ready for that – yet.
