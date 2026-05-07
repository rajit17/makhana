# Netlify Deployment Configuration for Makhana Website

This project is configured for static export and deployment on Netlify.

## Deployment Steps:

1. **Connect your GitHub repository to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account and select this repository

2. **Netlify will automatically detect the settings from `netlify.toml`**
   - Build command: `npm run build`
   - Publish directory: `out/`

3. **No additional configuration needed** - the site is configured for static export

## Configuration Details:

- **next.config.ts**: Enabled static export with `output: "export"`
- **netlify.toml**: Specifies build command and publish directory
- **Images**: Unoptimized for static export compatibility

## To test locally:

```bash
npm run build
npm start
```

Or preview the static build:

```bash
npm run build
# Files will be in the 'out' directory
```
