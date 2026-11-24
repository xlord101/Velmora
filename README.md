# Velmora Design Studio

Open `index.html` directly to preview the site. The built homepage and project pages work with relative links and local fonts. For an HTTP preview, run `python -m http.server 4186 --bind 127.0.0.1` in this folder and visit `http://127.0.0.1:4186`.

## Replace the illustrated studies

1. Place approved room views and detail photographs in `assets/renders/`. Use optimised WebP or AVIF files and retain the original masters elsewhere.
2. Edit `content.mjs`. Each project has a title, slug, material line, cover, detail, alt text, caption and design note. Change the provisional enquiry email here as well.
3. Update the illustrated-study labels in `scripts/build.mjs` when switching to real work. Confirm service and process copy with the studio.
4. Run `node scripts/build.mjs` from the project root. The generator writes the homepage and a static page per project. It regenerates the original preview illustrations in `assets/`; keep final renders in their own folder.

The form prepares a draft in the visitor’s email application. The visitor sends it there. A direct email link is also available. Review the recipient before launch.

For static hosting, distribute the generated `index.html`, `work/`, `assets/`, `style.css` and `site.js`. When removing or renaming a study, exclude its previous generated directory from deployment.

## GitHub Pages

In the repository settings, open Pages, choose **Deploy from a branch**, select **main** and **/ (root)**, and save. GitHub Pages serves the checked-in HTML and assets at https://xlord101.github.io/Velmora/ after the deployment completes. For content or template changes, run the build and commit the regenerated pages before pushing.
