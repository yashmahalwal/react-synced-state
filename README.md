# React Synced State

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

## Overview

A simple utility to synchronise state updates across your React app.

## Documentation

For detailed documentation and API reference, please visit our [official documentation](https://yashmahalwal.github.io/react-synced-state). This readme page contains the instructions for setting up the code locally and maintaining it.

## Table of Contents

- [Installing dependencies](#installing-dependencies)
- [Running tests](#running-tests)
- [Developing documentation](#developing-documentation)
- [Building code](#building-code)
- [License](#license)

## Installing dependencies

To work with the code, start by cloning the repository on your local machine. To set up dependencies, run 

```bash
npm install
```

React is a peer dependency of the hook. Since it relies on `Providers` and simple `useState` and `useEffect` constructors, this package can work with any version of React from `v16`. 
However, documentation is written using React `v18`. If you wish to to work with documentation, please ensure `v18` is installed.

```json
{
    "peerDependencies": {
      "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
    }
}
```

### Running tests

Tests can be run by using jest:

```bash
npm run test
```

### Developing documentation

Source code for documentation is kept under [`docs-source`](docs-source). Examples for the documentation are used for test cases. Documentation is bundled using `parcel`. To run the development server for documentation,

```bash
npm run docs
```

To build a static version of the documentation, run 
```bash
npm run docs:build
```
This generates the artifacts under `docs` folder. The relative path for documentation is `/react-synced-state` since the repository is hosted on github pages which are accessed by url of the form `<username>.github.io/<repo-name>`. So simply running a `http` server might not be enough to host the build locally. 

### Building Code

Code can build for distribution by running

```bash
npm run build
```

This created a distribution build under `build`. Code is transpiled down to `javascript` with `es module` imports.

## License

This project is licensed under the MIT License

---