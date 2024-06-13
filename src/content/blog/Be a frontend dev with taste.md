---
title: 'Software Artisan'
description: 'Notes to myself about software and craftmanship'
pubDate: '25 April 2024'
heroImage: '/blog-placeholder-1.jpg'
draft: true
---

Hi, I'm Iyi. These are some notes i've taken for myself to improve at work and drill craftmanship
into my spirit. I hope they can help you too.

It sounds like i'm giving advice to you, but it's actually a ( hopefully smarter ) version of my
future self trying to steer me in the direction of doing great work by applying some of the best
ideas i've read in books to my career as a technologist.

### Good taste can be acquired.

Having good taste as frontend engineer is a delicate balance of aesthetics, precision and raw
technical skills.

As a developer in general, you want to be growing. If you're not growing, you're roddy ricch.

Everytime you touch a frontend you want to leave your mark on it.

Every project should leave you better than you were before it. Over time, it compounds.

If you work very hard, early in your career on a specific theme, you become armed with specific
knowledge and you can use that as leverage to get a better job, build a better product for your
company, Get a raise.. the list goes on.

How can you achieve this ?

<br />

> Do a lot of scattered work across the stack, reflect constantly and stay up to date on where the
> industry is going.

> In a short while, the things you should spend more time on will emerge.

When it clicks, you want to attack it viciously. You want to become an expert on the topic.

You want to take the best explanations available on the subject and make your own explanation better
or just as good.

Remmember that good explanations are hard to vary and you have to put in the work to arrive at them.

It shouldn't be superficial knowledge either, it should be deep seated principles that you can call
on to help solve difficult problems and make difficult tradeoffs.

This is _software engineering_

These are not empty words, I'm urging you to _try_, I'm urging myself to **try**.

### Passion is Leverage

I realise that if you can trick yourself into becoming irrationally obsessed with something that
moves the needle for your company, you can command insane leverage.

When it comes to software that people take for granted, there are two things that are king.

- **Performance**

- **Reliability**

For maximum leverage, You should be striving to be your company's performance nerd, or your
company's reliability nerd.

<br />

> Perfomance Nerd - Make sure code scales and the speed metrics never drop below a certain quota (in
> ms).

> Reliability Nerd - Feels personally insulted when broken code is shipped to prod. Amazing at
> writing tests, knows everything about CI, is a beast at making fixes.

Which one can you explore more fully ? Remmember to take it one at a time because the more you
tinker the more you gain an intuition of when to commit.

To some devs, CI/CD is a chore. To some others, it's their obsession. They know everything about it.
They know all the key metrics and try to stay on top of them.

This is valuable in the companies that need to ship reliable software.

My point is, you really have to want to explore that thing deeply.

<br />

> Once you catch the [ insert domain ] bug, it's over. There's no going back.

Find your bug and catch it.

**Do not settle**.

<br />

### Finding your bug.

How do you find the thing that calls you to do your best work ?

I like the concept of having a _life's work_. No matter how small it may be, I think it is intensely
fulfilling to point to a technology or achievement or a big family or whatever thing at some point
and say..

> I started that.

> I built that.

> I wrote that.

> I was a part of that.

...and to be genuinely proud of it.

Are you doing work that you take pride in ?

**Don't settle**

Oh did i mention people should take your software for granted ? Yes, they should be totally
oblivious to the amount of work that goes into it. Because it works. It's painless.

This is the **standard** we should **strive** for.

Without passion we'd never have gotten this far in this field. The infrastructure behind the
internet is pure blood, tears and sweat. It's passion, it's talent. It's madness.

IF somehow your business has come to rely on your passion to move it forward, congrats you're now in
the driving seat of your own career.

But let's not toss around buzzwords, how can i get here ? You need to find **domain-coder** fit. You
need to find that problem that you cannot stop thinking about. That problem that has you whipping
out pen and paper and drawing out systems.

Natural curiosity and a tinkering spirit should get you there. All you have to do is refuse to
settle.

### Bottom-Up.

No

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

I know you're ambitious, so maybe you can take it a step further if you get bored and move the
needle for the \*whole industry\*\*
