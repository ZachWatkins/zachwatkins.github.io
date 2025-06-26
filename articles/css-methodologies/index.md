---
title: 'Methodologies for Style Isolation'
author: Zachary Watkins
date: 2025-06-21
tags: [web-components, remarklet]
---

When using CSS, it's important to know how to avoid side effects caused by selectors and inheritance. This article evaluates methods relevant to developers creating drop-in service integrations, browser extensions, or web components that add elements to pages they don't control.

---

I'm creating a JavaScript library which works as a bookmarklet (check it out at [remarklet.com](https://remarklet.com)). I've reached a point where I need to add more UI elements to the library for providing users with access to its features. I want to know that my styles won't affect the page users are on, and I want my elements to be protected from the page's styles as well.

Back when I worked on car dealership websites, I occasionally integrated third party code for visual features like buttons, video overlays, and pop-ups (sorry). They often used their own styles and scripts but only enough to drop in a dynamic image and link or an iframe. This worked well enough for them, but no one cared about accessibility much.

I want to see what we can do today to style drop-in components like this.

## Iframe

The only way to completely separate your component's styles from a web page is to use an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe). This keeps it in a separate document context. This sounds like overkill but it's the best way to control your feature when it's dropped into websites you don't control. Here's a checklist to follow for making iframes accessible:

1. Make the code in the iframe accessible.
2. Include a `title` attribute on the `<iframe>` tag itself.
3. Set your iframe's `scrolling` attribute to `auto` and never to `no`. A user's default text size (set in their browser or device settings) will affect how your iframe content is displayed.
4. Place the iframe in the DOM where it makes sense for the page's keyboard tab order / layout.

Benefits of using iframes include:

1. Allowing you to use styles without affecting the website using your feature, and without the website's styles affecting your feature.
2. Universal browser support, as iframes have been around since the early days of the web.
3. Giving a website owner control over what capability your `<iframe>` code has on their website using the `sandbox` attribute. This isn't as big of a benefit if an iframe feature comes with a script as part of the iframe's functionality.

This has drawbacks:

1. Loading an iframe's content is much slower than if the page included the code directly.
2. The owner of the page containing the `<iframe>` tag must rely on the iframe's owner to make their content accessible.
3. Responsive design may require effort from the website owner and/or the iframe owner.
4. Content Security Policy headers may block the iframe from loading without modification.

It's a solid choice for people who want to cut down on integration risk. Nobody wants to cause a problem during the integration phase - it can become a huge time sink and lose trust.

## Shadow DOM

"Shadow DOM enables you to attach a DOM tree to an element, and have the internals of this tree hidden from JavaScript and CSS running in the page." [#1](#1) This is part of a methodology referred to as [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). Example:

```html
<my-button></my-button>
```

```javascript
class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.textContent = 'Click me';
    shadow.appendChild(button);
  }
}
customElements.define('my-button', MyButton);
```

This creates a custom element `<my-button>` that encapsulates its own styles and functionality, preventing any interference from the global styles of the page. This is the best guarantee you can have that your HTML won't be affected by styles you don't have control over without using an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe).

## Style Scope

When you want to create styles for DOM elements, it's important to scope them to be as specific as possible. This becomes even more challenging when you're adding elements to a page that you don't control. If you're creating an integration for your service that customers can add to their website, you want to ensure that your styles don't apply to any elements on the page and the page's styles don't apply to your feature as well.


The methods I'm familiar with include:

- Styles as class names
- CSS Modules
- Block Element Modifier
- Shadow DOM

I'll briefly explain each of these methods and provide you links for further reading.

## Styles as Class Names

This approach uses class names for individual style attribute values to avoid most cascading style issues. Think `.bold {font-weight:bold;}`. I use [Tailwind CSS](https://tailwindcss.com/) but this concept is much older and originally popularized by libraries like [Bootstrap](https://getbootstrap.com/). Example:

```html
<button class="bold">Bold button</button>
```

## CSS Modules

A CSS module is a way to use a build tool to import style declarations from a CSS file as references in a JavaScript file. The class name is randomized at build time so it has the same benefits of approaches like styles as class names. Example:

```css
/* styles.module.css */
.button {
  color: blue;
}
```

```javascript
import styles from './styles.module.css';

const Button = document.createElement('button');
Button.className = styles.button;
document.body.appendChild(Button);
```

Resulting HTML:

```html
<button class="_styles__button_123456789">Button</button>
```

Further reading: [What are CSS Modules and why do we need them?](https://css-tricks.com/css-modules-part-1-need/).

## Block Element Modifier

Block Element Modifier, or BEM for short, is a naming convention for CSS classes that describes components, their parts, and variations. I haven't used it, but it's a very well documented methodology and more often used when creating design systems. Example:

```html
<button class="button widget__button button_size_s">Small button</button>
```

[BEM Methodology](https://en.bem.info/methodology/)

## References

1. <a id="1" href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM">Using shadow DOM</a>
