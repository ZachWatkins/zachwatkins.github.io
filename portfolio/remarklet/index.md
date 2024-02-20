---
title: 'Remarklet - make mockups easier'
description: 'Visual editor bookmarklet that makes modifying and commenting on web pages remarkably easy!'
date: 2024-02-20
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    const main = await import('./src/main.js');
    main.createApp();
  });
</script>

# Remarklet

Copyright 2024 Zachary Kendall Watkins <zwatkins.it@gmail.com> (https://github.com/zachwatkins)

Visual editor bookmarklet that makes modifying and commenting on web pages remarkably easy!

Built with jQuery and jQuery UI.

This JavaScript bookmarklet is built on jQuery and jQuery UI and will allow you to rapidly prototype web site changes and more easily communicate web site revisions with others. More enhancements are planned for the future (such as copying page elements), but I wanted to make this first version available to the public as soon as I felt it was ready with the basic, essential features.

# Keyboard Shortcuts:

Note: The "Delete" keyboard shortcut only works on Windows; Mac support is planned.

[Drag Mode]

- Enter Text Mode: T
- Enter Drag Mode: V
- Resize Element: Ctrl + Alt + T
- Finish Resizing Element: Enter
- Delete Element: Delete

[Text Mode]

- Return to Drag Mode: Ctrl + Enter

If you enjoyed using this tool, I would appreciate hearing from you! watkinza@gmail.com

JavaScript and CSS code that were created by jQuery and jQuery UI (custom build) are attributed and separated from the author's code by notes in the source files.

# Features:

- Export
- Save
- Restore
- View Grid
- View Outlines
- View CSS Changes
- Insert Image
- Insert Note
- Insert Code
- Drag Elements
- Resize Elements
- Delete Elements
- Edit Text

# What is a bookmarklet?

A bookmarklet is a bookmark that executes JavaScript when clicked instead of sending you to another web page. Example bookmarklet link: javascript:(function(d){var%20r='remarklet',e='//yourdomain.com/rm/',m=d.createElement('link'),a=d.createElement('script');a.src=e+'require.js';a.setAttribute('data-main',e+r+'.js');m.type='text/css';m.rel='stylesheet';m.href=e+r+'.css';d.head.appendChild(a);d.head.appendChild(m);})(document);
