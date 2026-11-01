<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/assets/logo-white.png">
    <img src="src/assets/logo-black.png" alt="Batuhan Büber" width="160">
  </picture>
</h1>

<p align="center"><strong>▶ Live: <a href="https://batuhanbuber.com">batuhanbuber.com</a></strong></p>

My personal website: about me, resume, projects and a gallery of my own photos.

## Stack

- Astro 5
- React 19
- Tailwind CSS 4
- TypeScript
- React Icons

## Adding Gallery Photos

Keep the originals outside the repo and add shrunk copies (longest side 2560px, all metadata removed):

```sh
npm run photos -- <photo or folder>...
```

Then add a `src/content/gallery/YYYY-MM-DD-slug.md` file for each photo; the date comes from the file name.
