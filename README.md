# 🌐 React TypeScript Boilerplate

This is a React & Type Script boilerplate built without a CRA.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Features

- [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/) & [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Husky](https://typicode.github.io/husky/#/) & [Lint-Staged](https://github.com/okonet/lint-staged)

## Getting Started

### Installation

```bash
$ npx degit https://github.com/hseoy/react-typescript-boilerplate <project name>
$ cd <project name>
$ yarn install
```

### Development server

Webpack dev server runs at `localhost:8080`.

```bash
$ yarn dev
```

### Production build

Build outputs are created in `build`.

```bash
$ yarn build
```

### Test

The test environment was built using the jest and react testing library.

```bash
$ yarn test
$ yarn test:watch
$ yarn test:coverage
```

### Lint

It uses eslint and pretier and follows the rules of airbnb.

```bash
$ yarn lint
$ yarn lint:fix
$ yarn prettier:write
```
