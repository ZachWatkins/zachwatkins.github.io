---
title: 'Remarklet - Make Mockups Easier'
description: 'Visual editor bookmarklet that makes modifying and commenting on web pages remarkably easy!'
date: 2024-02-20
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    const main = await import('./app/src/remarklet.js');
    main.createRemarklet();
  });
</script>

Remarklet makes modifying and commenting on websites remarkably easy! Activate it, then make changes to your website by dragging things around and editing text. You can even add notes! Then send these changes on so your team can implement them.

# Keyboard Shortcuts: Drag Mode

- Enter Text Mode: T
- Enter Drag Mode: V
- Resize Element: Ctrl + Alt + T
- Finish Resizing Element: Enter
- Delete Element: Delete

# Keyboard Shortcuts: Text Mode

- Return to Drag Mode: Ctrl + Enter

If you enjoy using this tool, I'd love to know! You can email me at <a href="mailto:zach@zachwatkins.dev">zach&#64;zachwatkins.dev</a>.

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

Copyright 2024 Zachary Kendall Watkins <zwatkins.it@gmail.com> (https://github.com/zachwatkins)
