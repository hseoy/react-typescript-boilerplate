# 🌐 React TypeScript Boilerplate

This is a React & Type Script boilerplate built without a CRA.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Features

- React & TypeScript
- Webpack & Babel
- ESLint & Prettier
- Jest & React Testing Library
- Husky & Lint-Staged

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

I built a test environment using jest and react-testing-library.

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
