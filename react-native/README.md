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

## Setup

_https://reactnative.dev/docs/environment-setup_

### Bootstrap

Generate a new project with

```
$ npx create-expo-app MyApp
```

### Configuration

1. Update the to the latest dependency versions.
2. Set the bundler in `app.json` to use [Metro](https://facebook.github.io/metro/):
   ```json
   "web": {
     "bundler": "metro"
   }
   ```
3. Configure Metro to resolve `mjs` extensions in `metro.config.js`:
   ```js
   config.resolver.sourceExts.push("mjs");
   ```
