---
title: Task
summary: A mobile-first dashboard for your tasks and reminders.
logo: ./logos/task.png
links:
  website: https://task.mubatu.com
  github: https://github.com/mubatu/task
tags: [React, TypeScript, Cloudflare]
order: 6
---

## Overview

Task is a mobile-first dashboard for planning and following up on tasks and reminders. You pick a name, add tasks with optional dates and reminders with exact or relative times, and track them from the dashboard, a monthly calendar, or the archive of completed items.

## Features

- Name-only shared profiles with a normalized, persistent identity
- Tasks with optional dates, and reminders with exact or relative times
- Edit titles, notes, task dates, and reminder times from the dashboard, calendar, or archive
- Dashboard, monthly calendar, and completed-item archive
- In-app due reminder dialog and browser notifications while the site is open
- Responsive desktop and mobile navigation
- Bundled Momo Trust Display font with Turkish glyphs and a consistent regular weight

## Under the Hood

Items are stored in Cloudflare D1, with server-side validation and ownership filtering so each profile only sees its own tasks and reminders.

The profile name is intentionally not authentication. Anyone entering the same name can access that profile's items.

## Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Cloudflare Pages Functions
- **Database:** Cloudflare D1
- **Tests:** Vitest and Testing Library
