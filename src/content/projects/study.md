---
title: Study
summary: A mobile-first study timer with daily history and shared leaderboards.
logo: ./logos/study.png
links:
  website: https://study.mubatu.com
  github: https://github.com/mubatu/study
tags: [React, TypeScript, Cloudflare]
order: 5
---

## Overview

Study is a mobile-first web app for tracking study time. You sign in with Google, switch between studying and resting, and the app keeps your daily totals, monthly history, and a leaderboard shared with everyone else using it.

## Features

- Google sign-in with server-side, cookie-based sessions
- Studying/resting state with server-authoritative live timing
- Sessions that continue across page closures and devices
- Monthly calendar history with session counts
- Day details showing the time range of each study session
- Brief notes attached to individual study days
- Today and current-month leaderboards with live-session totals
- Press-and-hold a leaderboard profile to see that person's monthly daily hours, without their notes

## Rules

- **Study day:** Daily totals use a 06:00 to 05:59 study day in the `Europe/Istanbul` time zone, so a late-night session still counts toward the same day.
- **Session cap:** A single continuous study session is credited for at most three hours.
- **Profiles:** On first sign-in you either create a new profile or link an existing name-only profile by typing its name. A name can be linked only once.

## Under the Hood

Timing is server-authoritative: the server, not the browser, decides when a session started and stopped, which is why a session survives closing the page or switching devices. Every API request needs the session cookie and acts on the signed-in user, so clients never send their own user ID. State transitions are idempotent, and the database enforces that a profile can have only one open session at a time.

## Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Cloudflare Workers
- **Database:** Cloudflare D1
- **Tests:** Vitest and Testing Library
