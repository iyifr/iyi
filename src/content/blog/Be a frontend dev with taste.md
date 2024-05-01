---
title: 'Be a Frontend Dev with taste'
description:
  "Developing good taste as frontend developer requires a delicate balance of aesthetics, artist's
  eye and a relentless iteration habit"
pubDate: '25 April 2024'
heroImage: '/blog-placeholder-1.jpg'
---

### Good taste is acquire-able

Developing good taste as frontend dev requires a delicate balance of aesthetics, artist's eye and a
relentless iteration habit.

Pay attention to last part, 'relentless iteration' because you will continuously iterate on
refactoring UI's, interactions, navigation... and over time you want to compound these "tasteful"
decisions so they morph into raw skill and you keep getting better each time you write frontend
code.

- Understand what makes a UI bad to use.
- Understand what makes a UI hard to navigate.
- Understand what makes a UI hard on the eyes.
- Understand information architecture (what data needs to be on the page, how to best present it and
  what ways the user will interact with the data )

### More Important Bullet Points.

- Master your fundamentals (flexbox, padding, margin)
- Don't shy away from the learning curve.
- Replicate beautiful UI's.
- Learn the Web Standards and use a framework that helps you stay as close to them as possible.
- Use tailwind lol.
- Use component libraries so you don't need to re-invent the wheel every time.
- Master alignment.
- Learn that the simpler solution is always better.
- Read a lot of code.
- Steal, then steal again (Code, design, ideas)
- Obsess over tiny details but prioritize the most visible ones with higher returns for getting
  right.
- Make it work, make it fast, then clean up the component.
- Learn the container and presentational pattern.
- There's more to web dev than React, but study the mental model.. it's a powerful one.
- NEVER DO A FULL FRONTEND REWRITE

### UI that is easy on the eye

Consistency + Alignment + Visual Information Architecture

- Curved border radius (obviously)
- Don't use pure chroma of black and white - always use shades.
- Use Radix Colors for tried and tested UI colors and patters that make your app look consistent and
  vibrant. (If that's your vibe)
- [Shadcn]("https://shadcn.com") is a literal GODSEND, people like to hate on switching UI component
  libraries all the time but the shadcn idea was too good to ignore, makes frontend a piece of cake.
  If you don't javascript.. avoid re-implementing UI components. If there aren't any good ones in
  your own ecosystem, build your own! If it's really bad, a couple of better devs will address it
  and you'll merge some PR's, if it's really good congrats, you're the shadcn of your ecosystem.
- Train your spacing intuition by studying UI's you use and love on a daily basis (I fell in love
  with the [todoist](https://todoist.com) UI, Spotify and the windows 11 notes UI.. to name a few)
- Start with way more space than you need (Let your UI breathe bro)

#### UI that's nice to use.

Fast + Good Feedback + Graceful

Keep your database close to your users. Do you even need a database ? Have you tried local first ?

Another cool trick is to show the user feedback on actions that take some time to complete.

Find a good toast library and use toasts when errors occur. Send contextual error messages from the
server when you can so the user has an idea what went wrong.

Send contextual error messages so that you, the developer, can read application logs and immediately
know what needs fixing.

When querying your db for data a piece of UI will display, ask yourself.. If i was waiting in line
at KFC for an order and they had to go through the entire inventory or stock list to find the
ingredients for every single person's order, how long would i be willing to wait ?

What I'm trying to say is, optimize those db queries, understand which data you need to query for
often and implement indexing. Same goes for data that is infrequently accessed, just cache it bro
(later on)

Okay one very important disclaimer, iteration is key! You will not get all of these "good practices"
right when you're trying to ship the first draft. If you're already experienced, resist the urge to
check off all the boxes at first. Just do the more visible clean ups and you should be able to ship
quality, fast.

### Sorry, I'm a beginner

Build lots of clones. Build a spotify clone, build a twitter clone. Forget about the functionality.
Just hard code most parts of it and learn how to present a USER INTERFACE. Make it look like a 100
percent replica. Your intuition will be forged from fire, because it's pretty hard to do what i just
said!

But you'd obviously learn a ton more.

Don't go replicate the [linear]("https://linear.app") landing page though, start with some thing
simple and I'm begging you please don't install 200 libraries, and don't use React.

Don't listen to the puncher downers on Twitter and LinkedIn saying you're ngmi, you're building
valuable skills. Companies need great frontend coders to present their product in a beautiful way so
that their customers can get the most value for it, what you're doing is important and useful and
will serve you very well if you decide to venture off and build something of your own someday,
certainly has served me.

Never stop shipping chad.

Now that i'm writing more articles on frontend dev i should probably put more work into this site..
or maybe i wont :)
