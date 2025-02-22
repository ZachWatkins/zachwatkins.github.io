---
canonicalLink: https://zacharywatkins.com/presentations/document-automation-with-adobe-indesign
title: Document Automation with Adobe InDesign
description: Texas A&M Tech Summit 2025
author: Zachary Watkins
date: 2025-02-25 11:00 am
published: false
publishdateuncertain: true
---

Can we get this report for every county in the state? Yes! Learn how Adobe InDesign can quickly turn every row in a spreadsheet into documents for decision-makers. Hear how we use this process to provide county-level rail safety incident reports for rail safety personnel with just an hour of work for each update. We will go over solutions for charts, overflow text, image selection, and accessibility which are crucial for most use cases. Slides are available. It was originally presented to the Texas A&M University System on Tuesday, February 25, 2025 from 11:00am to 11:45am CST at the annual Tech Summit conference.

---

[[toc]]

Getting the right information to the right people at the right time is no small task. I'm going to show you how we generate hundreds of unique PDFs in less than an hour from a public federal database that can change every day.

## The Web Application

The web application is focused on rail safety in Texas. It provides a map with search filters for Form 54 rail equipment accidents / incidents reported to the Federal Railroad Administration within Texas. It also provides downloadable data visualizations. This includes factsheets for 5 different categories of incident cause across the state.

## The Request

The client requested the state's 5 cause factsheets for each county along with the state factsheet. This would allow people responsible for rail safety to prioritize their efforts within a given county by comparing it with the state. The source dataset updates daily so update requests can happen at any time.

The state factsheets were made in Adobe InDesign so I chose to use its data merge feature.

## NodeJS Command Line Tool

I wrote a NodeJS command line application to automate some of this process. It performs the following tasks:

1. Reads the researcher's Excel workbook data.
2. Filters out any counties with no incidents to report.
3. Formats numbers and currency to be more reader-friendly.
4. Shortens and formats text to be more reader-friendly and fit better into the InDesign template's fields.
5. Creates the bar charts to embed in the InDesign template and adds their file paths to each county's data entry.
6. Writes the formatted and filtered county data to a CSV file for the InDesign template to use.

Once the InDesign documents are exported, the script has a second routine which:

1. Copies the county PDFs to a published directory and gives them a file name which includes the county and the date of export.
2. Appends the statewide PDF page to each county PDF file.

Now we deploy the documents to the server!

I can't share the exact script because it's under contract, but I can share a similar script I made for processing Texas Lottery Winner data: https://github.com/ZachWatkins/document-automation-with-adobe-indesign/blob/main/cli.js

[Source dataset from data.texas.gov](https://data.texas.gov/dataset/Winners-List-of-Texas-Lottery-Prizes/54pj-3dxy/about_data)

My analysis of the Texas Lottery data grouping winners by game category for each county: [texas-lottery-analysis.csv](https://github.com/ZachWatkins/document-automation-with-adobe-indesign/blob/main/public/texas-lottery-analysis.csv)

Here is an example graph generated from the Lottery data:

![Texas Lottery Winners by County](https://raw.githubusercontent.com/ZachWatkins/document-automation-with-adobe-indesign/main/public/images/game-category-winners-in-harris-county.svg)

## Adobe InDesign Template

The county factsheet was adapted from the statewide factsheet, which was made in Adobe InDesign and uses 65 different data merge fields. Since I don't own a personal license for Adobe InDesign, I can't share the template nor a video demonstrating the process. You can read about it in depth here: https://helpx.adobe.com/indesign/using/data-merge.html.

## Benefits of Data Merge

- Quickly create and update document variations using a template that is not feasible when done manually.
- Keep data private and secure by working offline.
- Easy to customize document appearance in InDesign.
- Can email a link to the document or attach it to an email.

## Challenges of Data Merge

- Long column names make template layout difficult.
- Formatting data – can be done in Excel.
- Handling text overflow – shorten words and use text flow.
- Character encoding – use UTF16 and choose Unicode for accents or other special characters.
- Conditional content – use a separate InDesign template and data file.
- File names – always uses a number for each filename.
  - I use a script to replace numbers with county names in the filename.
  - Colin Flashman created an InDesign plugin script for this: https://exchange.adobe.com/apps/cc/100404
  - You may be able to use InDesign's table of contents feature with bookmarks and Acrobat Pro's organize pages feature to split the file using bookmark names for file names. See here: https://community.adobe.com/t5/indesign-discussions/naming-pdf-files-created-via-data-merge/td-p/10314812
- Charts, Graphs
  - I use a script to generate graph images.
  - Other solutions like Excel, PowerBI, or R Studio may help generate graph images without writing code.
  - Embed titles and descriptions in the document, not the graph image.
  - Check your final document using Acrobat Pro's accessibility scanner: https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html

## Resources

[Document Automation with Adobe InDesign (GitHub repository)](https://github.com/zachwatkins/document-automation-with-adobe-indesign)

[Form 54 - Railroad Equipment Accident/Incident Report](https://data.transportation.gov/Railroads/Railroad-Equipment-Accident-Incident-Source-Data-F/aqxq-n5hy/about_data)

[Colin Flashman's InDesign plugin for renaming data merge exports](https://exchange.adobe.com/apps/cc/100404)

[Alternate method for controlling file names for data merge exports](https://community.adobe.com/t5/indesign-discussions/naming-pdf-files-created-via-data-merge/td-p/10314812)

[Using Acrobat Pro to create accessible PDFs](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html)

[My crossword puzzle website which I prerender PDFs for inside of GitHub Actions](https://crossword.zacharywatkins.com)
