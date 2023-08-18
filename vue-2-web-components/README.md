# Vue 2 Web Components

This template should help get you started developing with Vue 2 in Vite.

## Run

```
$ npm i
$ npm start
```

## Stack

- Vue: https://v2.vuejs.org/
- Web Components: https://vuejs.org/guide/extras/web-components.html
- Seam Components: https://docs.seam.co/latest/seam-components/overview/vue

## Setup

_https://github.com/vuejs/create-vue_

### Bootstrap

Generate a new project with

```
$ npm create vue@legacy
```

### Configuration

Vue supports Web Components with no additional setup.
However, it is recommended to
[Skip Component Resolution](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)
by setting the `ignoredElements` option:

```js
Vue.config.ignoredElements = [/^seam-/]
```

For a step-by-step walkthrough,
see the Seam guide for [getting started with Vue](https://docs.seam.co/latest/seam-components/overview/vue).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
