---
title: Make your database go brrrrr⚡
description: After reading this blog post, your app will feel snappier.
pubDate: '6 September 2024'
draft: true
---

At the end of this article, your slow-ass database queries will get faster. 
Your app will get snappier. 
Your users won't click off after 5 seconds of waiting for

"sElEcT fRoM brrbrrSaasTable" to finally finish executing. 

Don't believe me ?

I came across a compelling talk given at - LARACON2018 about... you guessed it. 
DATABASE INDEXES

Sacre bleau!

You mean to tell me i've been building backends without understanding how indexes work ?

When to use them ?

How to measure the perfomance of my queries ?

Thankfully, this embarassing skill issue was fixed rather promptly, with a little help from claude. 

### Indexes, wtf?
The TL;DR is this 

> Indexes make your database queries go fast,
> They help you avoid the terminal sin of scanning the entire table (or collection, or database) for the values that match a query. 


> Well thought-out indexes pack the relevant data for queries into a seperate data structure that is very fast to scan through, reducing **read latency** 

> We know which data to pack into the data structure based on our slow queries. 

> Too large or too many indexes can increase **write latency**, the indexes need to be updated

