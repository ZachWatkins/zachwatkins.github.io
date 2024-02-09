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

    import('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js').then(() => {

      import('./gumboot.js').then(() => {

        // Override the plugin's default settings for the entire page.
        jQuery.fn.gumboot.defaults = {
          separator: "-",
        };
        // Apply the plugin to the demo.
        jQuery('#demo ol li').gumboot({
          selector: 'em',
          callback: function (settings, index, length) {
            var $this = jQuery(this)
            $this.append('<br>' + JSON.stringify($this.data('gumboot')))
          },
        });
      });
    });
  });
</script>

This presentation is an introduction to jQuery plugin development (using jQuery version 2.1.3). Slides are available. It was originally presented to developers at a meetup in College Station, Texas on July 12, 2015 from 11:00am to 11:30am CST. This was my first ever presentation to a group of developers and the slides are few but focused. I have not verified the code against later versions of jQuery.

---

[[toc]]

Would you like to learn how to create a jQuery plugin? This presentation is an introduction to jQuery plugin development. It covers the basics of creating a simple jQuery plugin which follows recommended practices. The presentation demonstrates the basic jQuery plugin structure, how to allow for user extensions, and how to document your plugin. It also covers how to publish your plugin to NPM and how to manage your plugin's source code on Github.

## Slides

[2015-jquery-plugin-development.pdf](/presentations/2015-jquery-plugin-development.pdf)

<iframe src="/presentations/2015-jquery-plugin-development.pdf" width="100%" height="600px">
  <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/presentations/2015-jquery-plugin-development.pdf">Download PDF</a>.</p>
</iframe>

## Example Plugin

The example plugin is designed to parse the text content of an element into keys and values and attach the resulting JavaScript object to each element during runtime.

```javascript
// Plugin source code.
$.fn.gumboot = function (options) {
  /**
   * The plugin instance can be configured from three different levels.
   * 1. The default settings for the plugin.
   * 1. The override default settings for the plugin.
   * 2. The settings passed to the plugin when it is called.
   *
   * Then the settings are merged together using the jQuery extend method.
   */
  var settings = $.extend(
    {
      selector: '.data',
      separator: ':',
    },
    $.fn.gumboot.defaults,
    options,
  )

  // Execute and return for chaining.
  return this.each(function (index) {
    var data = {},
      $item = $(this)

    // Parse the text content of the element.
    $item.find(settings.selector).each(function () {
      var pair = this.innerHTML.trim().split(settings.separator)
      data[pair[0].trim()] = pair[1].trim()
    })

    // Assign data object to the element.
    $item.data('gumboot', data)

    if ($.isFunction(settings.callback)) {
      // Note: $.isFunction is removed in jQuery 4.0.
      settings.callback.call(this, settings, index, length)
    }
  })
}
```

```html
<div id="demo">
  <ol>
    <li
      >Present Vehicle<br /><em>Year - 2001</em> | <em>Make - Chevrolet</em> |
      <em>Model - Tahoe</em></li
    >
    <li
      >2013 - 2014<br /><em>Year - 2011</em> | <em>Make - Toyota</em> |
      <em>Model - Prius</em> | <em>Notes - Certified Preowned</em></li
    >
    <li
      >2012 - 2013<br /><em>Year - 2012</em> | <em>Make - Nissan</em> |
      <em>Model - Juke</em></li
    >
  </ol>
</div>
```

```javascript
// Override the plugin's default settings for the entire page.
jQuery.fn.gumboot.defaults = {
  separator: '-', // The default separator is ':'.
}
// Apply the plugin to the list items.
jQuery('#demo ol li').gumboot({
  selector: 'em', // The default selector is '.data'.
  callback: function (settings, index, length) {
    var $this = jQuery(this)
    // This is where you can make use of each element's data object.
    $this.append('<br>' + JSON.stringify($this.data('gumboot')))
  },
})
```

**Results:**

<div id="demo">
  <ol>
    <li>Present Vehicle<br><em>Year - 2001</em> | <em>Make - Chevrolet</em> | <em>Model - Tahoe</em></li>
    <li>2013 - 2014<br><em>Year - 2011</em> | <em>Make - Toyota</em> | <em>Model - Prius</em> | <em>Notes - Certified Preowned</em></li>
    <li>2012 - 2013<br><em>Year - 2012</em> | <em>Make - Nissan</em> | <em>Model - Juke</em></li>
  </ol>
</div>

## Further Reading

The original code for this presentation can be found here:

- [GitHub Repository](https://github.com/ZachWatkins/Gumboot)
- [Demonstration of the plugin](https://codepen.io/zw/pen/YXLoWj)

Additional resources for jQuery plugin development:

- [Making jQuery Plugins](https://learn.jquery.com/plugins/)
- [Publishing to NPM](http://blog.npmjs.org/post/111475741445/publishing-your-jquery-plugin-to-npm-the-quick)
- [jQuery Style Guide](http://contribute.jquery.org/style-guide/)
- [Markdown Syntax Guide](http://daringfireball.net/projects/markdown/syntax)
- [Presentation Slides](https://docs.google.com/presentation/d/1xgRXiqPBDWNxUNUf3DcocO0VHZ2dJgAuSfYPvLRKlIc/pub?start=false&loop=false&delayms=15000)
- [Plugin Pattern That Avoids Redundant Attachment](http://www.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/)
- [Much More Advanced jQuery Plugin Development (YouTube)](https://www.youtube.com/watch?v=FdJINb0breE)
