---
title: 'Animated Buttons'
description: 'Example animated buttons using CSS.'
date: 2024-02-15
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    import('./src/main.js');
  });
</script>

This is a demo I made when browser support for CSS animations was above 90%. I was trying to get our web designs to stop using image-based buttons and this was a proof of concept that made good use of things like border radius, gradients, web fonts, and CSS animations.

<p><strong>No *.jpg nor *.png image files were used in the making of these buttons. Animations are rendered using the CSS transition property.</strong></p>
<p>Hover over font family names to change the button fonts:</p>
<div id="sanchez" class="webfont fontchanger">Sanchez</div>
<div id="arvo-700" class="webfont fontchanger">Arvo 700</div>
<div id="homenaje" class="webfont fontchanger">Homenaje</div>
<div id="boogaloo" class="webfont fontchanger">Boogaloo</div>
<div id="montserrat-700" class="webfont fontchanger">Montserrat 700</div>
<div id="averia-sans-libre-italic-700" class="webfont fontchanger">Averia Sans Libre Italic 700</div>
<p style="font-size: 10pt;">Hover over colors to change the button primary colors:</p>
<div id="red" class="colorchanger">&nbsp;</div>
<div id="orange" class="colorchanger">&nbsp;</div>
<div id="yellow" class="colorchanger">&nbsp;</div>
<div id="green" class="colorchanger">&nbsp;</div>
<div id="blue" class="colorchanger">&nbsp;</div>
<div id="indigo" class="colorchanger">&nbsp;</div>
<div id="violet" class="colorchanger">&nbsp;</div>
<br>
<br>
<a class="button webfont sanchez" href="#">
<hr>
<i class="fa fa-bolt"></i> <span>Quick Quote</span><span>click here</span></a> <a class="button webfont arvo-700" href="#">
<hr>
<i class="fa fa-calendar"></i> <span>Schedule Service</span><span>click here</span></a> <a class="button webfont homenaje" href="#">
<hr>
<i class="fa fa-thumbs-o-up"></i> <span>Get Pre-Approved</span><span>click here</span></a> <a class="button webfont boogaloo" href="#">
<hr>
<i class="fa fa-phone"></i> <span>Contact Us</span><span>click here</span></a> <a class="button webfont montserrat-700" href="#">
<hr>
<i class="fa fa-tag"></i> <span>New Car Specials</span><span>click here</span></a> <a class="button webfont averia-sans-libre-italic-700" href="#">
<hr>
<i class="fa fa-road"></i> <span>Used Car Specials</span><span>click here</span></a>
