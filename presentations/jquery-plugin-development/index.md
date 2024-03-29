---
title: 'jQuery Plugin Development: Getting Started'
description: 'Slides and code for "jQuery Plugin Development: Getting Started" which I originally presented in 2015 at a meetup in College Station, Texas.'
author: Zachary Watkins
date: 2015-07-12 11:00 am
published: 2024-02-07 10:19 pm
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    import('./main.js');
  });
</script>

This presentation is an introduction to jQuery plugin development (using jQuery version 2.1.3). Slides are available. It was originally presented to developers at a meetup in College Station, Texas on July 12, 2015 from 11:00am to 11:30am CST. This was my first ever presentation to a group of developers and the slides are few but focused. I have not verified the code against later versions of jQuery.

---

[[toc]]

## Example Plugin

The example plugin is designed to parse the text content of an element into keys and values and attach the resulting JavaScript object to each element during runtime.

::: code-group

```html [index.html]
<div id="demo">
  <ol>
    <li>
      Customer A <br />
      <em>Joined - 2001</em> | <em>Last Rental - SUV</em> |
      <em>Purpose - Business</em>
    </li>
    <li>
      Customer B <br />
      <em>Joined - 2009</em> | <em>Last Rental - Hybrid</em> |
      <em>Purpose - Business</em> | <em>Current Customer - Yes</em>
    </li>
    <li>
      Customer C <br />
      <em>Joined - 2012</em> | <em>Last Rental - Minivan</em> |
      <em>Purpose - Personal</em>
    </li>
  </ol>
</div>
<script src="main.js" type="module"></script>
```

<<< @/presentations/jquery-plugin-development/main.js

<<< @/presentations/jquery-plugin-development/jquery-plugin.js

:::

Result:

<div id="demo">
  <ol>
    <li
      >Customer A<br /><em>Joined - 2001</em> | <em>Last Rental - SUV</em> |
      <em>Purpose - Business</em></li
    >
    <li
      >Customer B<br /><em>Joined - 2009</em> | <em>Last Rental - Hybrid</em> |
      <em>Purpose - Business</em> | <em>Current Customer - Yes</em></li
    >
    <li
      >Customer C<br /><em>Joined - 2012</em> | <em>Last Rental - Minivan</em> |
      <em>Purpose - Personal</em></li
    >
  </ol>
</div>

## Slides

[2015-jquery-plugin-development.pdf](/presentations/2015-jquery-plugin-development.pdf)

<iframe src="/presentations/2015-jquery-plugin-development.pdf" width="100%" height="600px">
  <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/presentations/2015-jquery-plugin-development.pdf">Download PDF</a>.</p>
</iframe>

## Further Reading

- https://github.com/ZachWatkins/Gumboot
- https://codepen.io/zw/pen/YXLoWj
- https://learn.jquery.com/plugins/
- http://contribute.jquery.org/style-guide/
- http://blog.npmjs.org/post/111475741445/publishing-your-jquery-plugin-to-npm-the-quick
- http://www.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
