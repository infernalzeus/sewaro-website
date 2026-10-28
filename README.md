# Sewaro — A Taste of Nepal

Mobile-friendly static restaurant website preview.

Expected public preview: https://InfernalZeus.github.io/sewaro-website/

## Publish the preview
1. Create an empty public repository named `sewaro-website` under **InfernalZeus**. Do not initialize it with another README.
2. Push this folder's clean `main` branch to that repository.
3. In the GitHub repository, go to **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Under **Actions**, run **Deploy website preview to GitHub Pages**, or push a commit to `main`.
5. Wait for the deployment to succeed, then share the Pages URL above.

The workflow publishes only `dist/`. All asset and menu paths are relative, so they work under `/sewaro-website/`. No custom domain, hosting purchase, build dependencies or secrets are required for the preview. The URL is expected, not verified live until your GitHub deployment succeeds. GitHub Pages is the review preview; production domain/hosting will be agreed separately.

## Local preview and checks
Run `python -m http.server 8767 --directory dist`, then open http://localhost:8767. Run `npm run check` for JavaScript syntax validation. Use HTTP rather than opening the HTML file directly because the menu is fetched from JSON.

## Website files
- `dist/index.html`: copy, call/WhatsApp contacts, social links and opening hours.
- `dist/style.css`: desktop and mobile styles.
- `dist/app.js`: menu search and category filters.
- `dist/assets/menu.json`: 24 dishes and eat-in/collection prices.
- `dist/assets/logo.jpg`, `momo.jpg`: restaurant leaflet image crops.

Original menu photographs, private proposals, local packaging backups and ChatGPT Sites metadata are ignored. A new public-ready Git history excludes those files. Production alternatives are already configured in `netlify.toml` and `vercel.json`; Cloudflare Pages can publish `dist` without a build command.

Before customer launch, confirm menu prices, hours and other business details with the restaurant. Both supplied numbers have call and WhatsApp links. The site does not process payments or send WhatsApp messages automatically.
