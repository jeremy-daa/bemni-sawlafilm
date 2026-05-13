ADD BEFORE LAUNCH: favicon and icon files
==========================================

Required files:
- /public/favicon.ico            (16×16 and 32×32 combined ICO)
- /public/assets/icons/icon-32.png        (32×32 PNG)
- /public/assets/icons/icon-192.png       (192×192 PNG — Android/PWA)
- /public/assets/icons/apple-touch-icon.png (180×180 PNG — iOS)

Generation tools:
- https://favicon.io — upload the Sawla Films logo and download all sizes
- https://realfavicongenerator.net — advanced generator with all platform variants

Once generated, place favicon.ico in /public/ (root, not in a subfolder).
Place all PNG icons in /public/assets/icons/.

The metadata.ts and layout.tsx files already reference these paths — 
no code changes needed once the files are in place.
