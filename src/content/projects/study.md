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

Study is a mobile-first web app for tracking study time. You pick a name, switch between studying and resting, and the app keeps your daily totals, monthly history, and a leaderboard shared with everyone else using it.

## Features

- Name-only shared profiles, remembered on the current device
- Studying/resting state with server-authoritative live timing
- Sessions that continue across page closures and devices
- Monthly calendar history with session counts
- Brief notes attached to individual study days
- Today and current-month leaderboards with live-session totals
- Press-and-hold a leaderboard profile to see that person's monthly daily hours, without their notes

## Rules

- **Study day:** Daily totals use a 06:00 to 05:59 study day in the `Europe/Istanbul` time zone, so a late-night session still counts toward the same day.
- **Session cap:** A single continuous study session is credited for at most three hours.
- **Profiles:** The profile name is intentionally not authentication. Anyone entering the same name gets access to that profile and its study history.

## Under the Hood

Timing is server-authoritative: the server, not the browser, decides when a session started and stopped, which is why a session survives closing the page or switching devices. State transitions are idempotent, and the database enforces that a profile can have only one open session at a time.

## Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Cloudflare Pages Functions
- **Database:** Cloudflare D1
- **Tests:** Vitest and Testing Library
