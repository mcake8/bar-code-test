

# bar-code the QR Code Generator

This is a simple app that generates a QR code from user input, built using the most modern stack with Vue.js.

## Technologies Used

- Vue3 - the latest version of Vue
- Vite - a build tool and development server that's focused on speed and efficiency
- TypeScript - to catch many common errors at compile-time, making development faster and more efficient
- Pinia - a new store that comes with Vue3, allowing easier state management with the support of the composition API
- Vitest - an easy to set up and fast testing framework that utilizes the power of Vite and simplicity of Jest
- Vuetify - a UI library that helps to build reliable material design interfaces

## Features

- Fast, responsive, testable, and modern

## Weaknesses

- Vuetify may be reliable, good-looking, and functional, but it restricts the design pattern to material and is not very good with Vitest and TypeScript.

## To Do

- Cover all the components with unit tests
- Build a good structure to store types and interfaces.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

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

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
