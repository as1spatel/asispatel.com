# asispatel.com

The Drawn To Life homepage as plain HTML and CSS, ready to host on GitHub Pages. There's no build step and no framework.

```
index.html            the homepage
styleguide.html       pattern library: colours, type, buttons, components
assets/css/styles.css every style, with design tokens at the top
assets/js/main.js     fade-in on scroll (the only JavaScript)
assets/images/        artwork, resized and saved as WebP
.nojekyll             tells GitHub to serve the files as they are
```

## Preview on your computer

Double-click `index.html`. It opens in your browser and works offline, except the fonts, which load from Google Fonts.

## Put it on GitHub Pages

1. Create a new repository on github.com (for example `asispatel.com`). It can be public, or private on a paid plan.
2. Upload everything in this folder, including `.nojekyll`. It's hidden on a Mac: press **Cmd + Shift + .** in Finder to show it. Then commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, then **main** and **/ (root)**, then Save.
4. Give it a minute, then open the `https://<your-username>.github.io/<repo>/` address GitHub shows you to check it.

## Point asispatel.com at GitHub (moving off Carrd)

Do this last, once the GitHub version looks right. It's the step that switches visitors over.

1. In **Settings → Pages → Custom domain**, enter `asispatel.com` and save. GitHub adds a `CNAME` file to the repository for you.
2. At your domain registrar (where you bought asispatel.com), replace the records that currently point at Carrd with these:
   - Four **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A **CNAME** record for `www` pointing to `<your-username>.github.io`
3. Wait for DNS to update. It's often minutes but can take up to a day. Then tick **Enforce HTTPS** in Settings → Pages.
4. Cancel or unpublish the Carrd site only after asispatel.com loads from GitHub.

The email address and every link stay the same. Email delivery isn't affected as long as you only change the A and `www` records, not any MX records.

## Editing

- **Words:** edit `index.html`. Each section is marked with a comment, for example `<!-- The Good News -->`.
- **Colours and fonts:** change the tokens at the top of `assets/css/styles.css`. `styleguide.html` shows the result.
- **New hand-lettered heading:** export a PNG, convert it to WebP (around 1100px wide), put it in `assets/images/`, and use the `.lettering` pattern from the style guide. Put the words in the `alt` text.
- **New animation:** add `data-reveal` to any block.
