# Evan Marion Luces — Artist Portfolio

Static portfolio website for artist Evan Marion Luces.

## Structure

```
index.html        — SPA shell
styles.css        — All styles and responsive breakpoints
app.js            — Artwork data, routing, and rendering
images/
  canvas/         — Oil paintings
  space/          — Spatial/installation works
  illustration/   — Illustration work
```

## Adding Artwork

All artwork data lives in the `ARTWORKS` object at the top of `app.js`. Each entry supports:

```js
{
  id: 'slug-used-in-url',
  title: 'TITLE IN CAPS',
  year: '2026',
  medium: 'Oil on canvas, 36″ × 38″',
  dimensions: "8' H × 30' W",        // optional, for space works
  description: 'Text...',             // optional; can be a string or array of strings for multiple paragraphs
  image: 'images/section/thumb.jpg',  // thumbnail shown in gallery grid
  images: [                           // all images shown on detail page (leave empty [] to use thumbnail only)
    'images/section/image-1.jpg',
    'images/section/image-2.jpg'
  ]
}
```

Add the entry to the correct section array (`canvas`, `space`, or `illustration`) and drop the image files in the matching `images/` subfolder.

## Running Locally

```bash
python3 -m http.server 3333
```

Then open `http://localhost:3333`.

## Deployment

Hosted on GitHub Pages from the `main` branch at `/ (root)`.  
Live site: [evancmarion.github.io/Artist-Website](https://evancmarion.github.io/Artist-Website)
