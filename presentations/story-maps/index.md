---
title: 'Story Maps: Planning Outcome-oriented Solutions'
description: This presentation is an adaptation of user story mapping for transportation service development and transportation research. Slides and other resources are available. I originally presented this to researchers and staff at Texas A&M Transportation Institute on Tuesday, August 22, 2023 from 12:30pm to 1:00pm CST during a meetup for Collaboration Station.
author: Zachary Watkins
date: 2023-08-22
---

<script setup>
import { onMounted } from 'vue'
import Reveal from 'reveal.js'

// On window load, initialize the StoryMap.
onMounted(() => {
  const deck = new Reveal()
  deck.initialize({
      hash: true,
      slideNumber: true,
      embedded: true,
  })
  deck.addEventListener( 'centerText', function() {
      deck.configure({center: true})
  }, false )
})
</script>

This presentation is an adaptation of user story mapping for transportation service development and transportation research. Slides and other resources are available. It was originally presented to researchers and staff at Texas A&M Transportation Institute on Tuesday, August 22, 2023 from 12:30pm to 1:00pm CST during a meetup for Collaboration Station.

---

[[toc]]

## Slides

<div id="presentation" style="height:400px">
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>Story Maps</h1>
                <h3>Planning Outcome-Oriented Solutions</h3>
            </section>
            <section>
                <h2>Speaker: Zachary K. Watkins</h2>
                <p>Software Applications Developer III, Communications Division</p>
                <p>Previously: Texas A&M University College of Liberal Arts (2020 - 2021), Texas A&M AgriLife Communications (2015 - 2020), Reynolds Web Solutions (2009 - 2015)</p>
            </section>
            <section>
                The concepts presented here can be found in the book <cite>User Story Mapping: Discover the whole story, build the right product</cite> by Jeff Patton. &copy; 2014 O'Reilly Media, Inc.
            </section>
            <section>
                <em>"If I had asked people what they wanted, they would have said faster horses."</em> - Henry Ford
            </section>
            <section>
                <h2>What is a story map?</h2>
                <p>
                    A story map is a visualization of goals, steps, and tasks as squares with text arranged in a grid.
                </p>
            </section>
            <section>
                <h2>Example</h2>
                <p>An example story map is shown below this presentation.</p>
            </section>
            <section>
                <h2>How do we create a story map?</h2>
                <p style="font-size:0.8em">
                    Story maps are created by talking things over as a team from the start. You may find these steps helpful:
                </p>
                <ol style="font-size:0.8em">
                    <li>Frame the problem <span class="fragment fade-in"> <em>(who is it for and why are we building it?)</em></span></li>
                    <li>Map the big picture <span class="fragment fade-in"> <em>(breadth, not depth; mile wide, inch deep)</em></span></li>
                    <li>Discover <span class="fragment fade-in"> <em>(talk about the people and what might go wrong, joys, pains)</em></span></li>
                    <li>Evaluate <span class="fragment fade-in"> <em>(is my solution Valuable, Usable, and Feasible?)</em></span></li>
                    <li>Prioritize <span class="fragment fade-in"> <em>(focus on the people you're serving and plan the order of features by impact on business goals)</em></span></li>
                    <li>Refine <span class="fragment fade-in"> <em>(what features to implement or test earlier to confirm assumptions before building upon them)</em></span></li>
                </ol>
            </section>
            <section>
                <h2>How do we know when we're done story mapping?</h2>
            </section>
            <section>
                <p>A minimum viable solution is the smallest thing that achieves the desired outcome.</p>
                <p>Ask yourself: is this solution valuable, usable, and feasible?</p>
            </section>
            <section>
                <h2>Why use Story Maps?</h2>
            </section>
            <section>
                <h2>Benefits</h2>
                <ol style="font-size:0.7em">
                    <li><strong>Create Shared Understanding</strong><br />
                        Story maps give teams a shared understanding of the desired outcomes of the work.</li>
                    <li><strong>Prioritize Tasks</strong><br />
                        Story maps help teams consider the value they deliver to people when prioritizing tasks.</li>
                    <li><strong>Scope Tasks</strong><br />
                        Story maps help a team align the scope of their individual tasks with the desired outcomes.</li>
                    <li><strong>Discover Opportunities</strong><br />
                        Story maps reveal opportunities to deliver more value to people while doing less work.</li>
                    <li><strong>Flexible Planning</strong><br />
                        Story maps provide acceptance criteria alongside tasks, making it easier to change either as a team.</li>
                </ol>
            </section>
            <section>
                Minimize output.<br />
                Maximize outcome and impact.
            </section>
            <section><h2>Questions?</h2></section>
        </div>
    </div>
</div>

## What are Story Maps?

User story maps are a visualization of goals, steps, and tasks as squares with text arranged in a grid. In the first row, and first column, is a square which describes an activity a person wants to complete. In the second row, a square is placed for each step the person will take in order to complete the activity. Then a horizontal line is drawn beneath the second row. Each row beneath this line will contain tasks to be performed by the team that enable the person to perform the step above the line.

## Benefits

- **Create Shared Understanding**  
  Story maps give teams a shared understanding of the desired outcomes of the work.
- **Prioritize Tasks**  
  Story maps help teams consider the value they deliver to people when prioritizing tasks.
- **Scope Tasks**  
  Story maps help a team align the scope of their individual tasks with the desired outcomes.
- **Discover Opportunities**  
  Story maps reveal opportunities to deliver more value to people while doing less work.
- **Flexible Planning**  
  Story maps provide acceptance criteria alongside tasks, making it easier to change either as a team.

## Use Cases

If any of the following situations are true for a particular team, project, or goal, then story maps may be a good fit.

1. The project is used by or directly impacts a large number of people in different ways, and the success of the project depends on how well you understand the needs of those people.
2. Cross-functional teams collaborate on the project and would benefit from having a shared understanding of the desired outcomes of the work.
3. The project has many tasks that are able to be delivered separately, and the team would benefit from having a way to prioritize those tasks based on the value they deliver to people.
4. It is unclear when a task is considered complete without understanding the desired outcomes.
5. The team is unsure how to break down a large project into smaller, more manageable pieces.
6. The cost or risk of spending time doing the wrong work is high.
7. When the right solution will likely come from collaboration between people with varying expertise.

When creating a story map talking things over as a team from the start, you may find it helpful to discuss it in steps:

1. Frame the problem: who is it for and why are we building it?
2. Map the big picture: breadth, not depth; mile wide, inch deep.
3. Explore: talk about the people and what might go wrong, joys, pains
4. Slice out a release strategy: focus on the people you're serving and plan the order of features by impact on business goals
5. Slice out a learning strategy: what features to implement or pilot with users earlier to confirm assumptions before building upon them
6. Slice out a development strategy: what to build earlier which may require experimentation, and what to build later; plan what technical challenges need to be determined and resolved sooner rather than later

## Reference: User Story Mapping by Jeff Patton

The content on this site was taken from and inspired by Jeff Patton's book <cite>User Story Mapping: Discover the whole story, build the right product</cite>. &copy; 2014 O'Reilly Media, Inc.

For more information on the author and book, visit https://jpattonassociates.com/story-mapping/.

> "Story mapping is a technique that provides the big picture that a pile of stories so often misses. [...] A big picture helps communicate effectively with users, it helps everyone involved avoid building unnecessary features, and it provides an orientation for a coherent user experience. [...] Stories are the building blocks of communication between developers and those who use their work. Story maps organize and structure these building blocks, and thus enhance this communication process — which is the most critical part of software development itself." <cite>Foreword by Martin Fowler</cite> in <cite>User Story Mapping</cite> by Jeff Patton

<style>
@import './src/story-map.css';
@import 'reveal.js/dist/reveal.css';
@import 'reveal.js/dist/theme/beige.css';
:root {
    --gutter-width: 16px;
    --story-bg: #FFFF99;
    --story-text-color: #000;
}
</style>
