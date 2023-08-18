# React Native

## Run

```
$ npm i
$ npm start
```

## Stack

- React Native: https://react.dev/
- Expo: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- Seam Components: https://docs.seam.co/latest/seam-components/overview/get-started-with-client-side-components

## Special Setup

### Use Metro

1. Update the to the latest dependency versions.
2. Set the bundler in `app.json`:
  ```json
    "web": {
      "bundler": "metro"
    }
  ```
3. Configure Metro to resolve `mjs` extensions in `metro.config.js`:
  ```js
  config.resolver.sourceExts.push("mjs");
  ```
