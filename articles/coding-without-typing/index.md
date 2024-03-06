---
title: 'Coding without typing'
author: Zachary Watkins
date: 2024-2-29
tags: [development, accessibility, productivity]
---

On the advice of an orthopedic surgeon, I am taking a break from typing For the next eight weeks. Here are some tools and techniques I've found to help maintain productivity as a lead application developer and manager.

---

[[toc]]

My hands and wrists have hurt for over a year now. I knew something was wrong when I had trouble turning the pages in my kids' story books; I couldn't feel the pages. Last December, I finally saw an orthopedic surgeon. They ordered scans and tests and diagnosed some of my symptoms as carpal tunnel syndrome. I received a steroid injection in each wrist next to the nerve, a referral to another specialist for possible rheumatoid arthritis, and a note.

`Patient may return to work on Monday 3/4/2024 with the following restrictions:

- No typing
- Limited use of both hands [...] The patient will follow up in 8 weeks.`

I have to find a way to get my work done without typing, or as little as I can get away with. I tried to do this once before, many years ago, when I had tendonitis in both of my forearms. I probably bothered a lot of people in the cubicles next to mine as they heard me say things like "show grid ... 6 ... click" and "open brace ... new line ... position colon absolute". It's a good thing I didn't have any confidential emails to send.

I've had a few days to think about how I can make things easier on myself. I have listed below the tools and techniques I considered to solve this problem. If you can think of any others, please send me a message on X (@zachwatkinsv1).

## GitHub Copilot

I've used GitHub Copilot since 2021 and have found several ways to use it effectively.

The code auto completion is exceptional. It routinely saves me 15 to 30 seconds of typing several times a minute when I'm in the flow. One limitation is that it has a smaller character limit on the text it generates than the co-pilot chat interface's responses.

I expect to get a lot more use out of the Copilot Chat feature by using the `@workspace` agent to increase the scope of my questions. It helps to keep queries simple, specific, and short (see this excellent advice: https://www.youtube.com/watch?v=hh1nOX14TyY).

A new voice to text feature was released in February which lets you toggle on and off dictation mode when using the separate speech extension from Microsoft. The automatic punctuation is not working very well yet but I'm hopeful that it will improve. I would use this feature frequently if I weren't already using the native operating system voice to text features.

## Touchpad

Touchpads reduce the travel distance and resistance of my fingers for mouse inputs and gestures. It does have the drawback of keeping my hand in a rotated, flat position. So I plan to use it sparingly and when I'm not using it actively I will keep my hand in a more neutral position.

## Mouse

I prefer a rollerball mouse so my forearm isn't needed to move the cursor, but the angle of my hand while resting on the mouse is not as close to neutral as I would like.

## Windows and Mac voice control

I've had a few days to get familiar with the voice command features of both operating systems. I use Mac at work and Windows at home. To anyone else who wants to try these out, I recommend to try whispering commands to save your voice over time. Both OS's have feature parity as far as I can tell, except for one thing: Windows doesn't allow you to set custom commands specific to an application. It's likely a small thing, but I felt it was worth noting.

## Keyboard shortcuts in visual studio code that save time

- Select All Occurences of Find Match: Ctrl + Shift + L (Windows); Cmd + Shift + L (Mac)
- Go to Next Problem (Error, Warning, Info): Alt + F8
- Go to Next Problem in Files (Error, Warning, Info): F8
- Go to Previous Problem (Error, Warning, Info): Shift + Alt + F8
- Go to Previous Problem in Files (Error, Warning, Info): Shift + F8
- Go to Next Reference: F4
- Go to Symbol in Workspace: Ctrl + T (Windows); Cmd + T (Mac)
- Markdown: Open Preview to the Side: Ctrl + K V (Windows)
- Rename Symbol: F2
- Command Bar: Ctrl + P (Windows); Cmd + P (Mac)

## Custom code snippets

It'll likely save me time if I can decide on code snippets that I'm likely to use often enough. The nice thing about custom voice commands is that I can make them to paste code snippets.

## Input devices to consider

- **Foot pedal**  
  Ordered, will add feedback here later.
- **Headset with microphone**  
  This allows me to turn down the sensitivity of my microphone so that it doesn't pick up the sound of others' voices.
- **Keyboard macros**  
  I haven't tried this yet but it's an option to reduce typing. It doesn't avoid typing altogether, but it could help.

## UI component libraries

I don't want to have to write basic HTML elements again if I can help it. I'll rely on UI component libraries to save time and typing.

## Drink plenty of water

I've read that it's good to drink plenty of water to help with joint pain and inflammation.

## Hand therapy

I've been doing hand exercises and taking breaks to rest my hands and wrists. I also wear wrist braces at night to keep my wrists straight.

## Avoid rewrites

I'll try to avoid rewriting code as much as possible by clarifying requirements and getting feedback as early as possible.

## Automate

I use things like code formatters and GitHub Actions to automate tasks and reduce the amount of typing I have to do.

## Conclusion

I'm optimistic that I can maintain my productivity and hope to improve on it during this process of reevaluating my tools and techniques. I'm documenting what I learn from this here to remind myself and educate others about this subject.

If you liked this article, I'd like to hear from you on X (@zachwatkinsv1).
