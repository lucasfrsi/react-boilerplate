This project is **archived** and no longer maintained. Please refer to [react-template](https://github.com/lucasfrsi/react-template) instead.

# react-boilerplate

This project is meant to be used as a boilerplate code for web projects based on React. It comes with an opinionated base folder structure and all libraries and webpack pre-configured.

## Technologies and Libraries

### UI and Navigation
- [react]
- [react-router-dom]

### Styling
- [styled-components]

### State Management and Side-Effects
- [redux]
  - Pre-configured to use Redux DevTools [extension] (you **must** install it for it to work) and [redux-logger].
- [redux-saga]

### HTTP Requests
- [axios]

### Minification, Compression and Bundling
- [webpack]

### Linting
- [eslint] - based on [Airbnb]
- [stylelint]

### Testing
- [jest]
- [@testing-library/react]

### SEO
- [react-helmet] - to allow dynamically management of the document's head section.

## Browser Support
Change the **browserslist** config inside **package.json** according to your needs.

## Dockerr

## Installation

```sh
$ cd react-boilerplate
$ npm install
```

## Scripts

### Development

Run the project locally by using **webpack-dev-server**, also providing live reloading.

```sh
$ npm start
```

### Building

Create a **dist** directory with the production build of the app, ready for deployment. By default it runs the validate script right before building.

```sh
$ npm run build
```

Run the building script without validating the project.

```sh
$ npm run build:nocheck
```

Serve the generated assets locally using **http-server** package, for testing purposes. You **must** have it installed for it to work.

```sh
$ npm i http-server -g
$ npm run serve
```

### Linting and Testing

**Lint**

Running the following command will run both eslint and stylelint.

```sh
$ npm run lint
```

You can also run them separately

```sh
$ npm run eslint
$ npm run stylelint
```

**Jest**

Run all tests.

```sh
$ npm test
```

Run watch mode.

```sh
$ npm run test:watch
```

**Validation**

Run both test and lint scripts.

```sh
$ npm run validate
```

### Utilities

**Clean**

Delete **node_modules** and **dist** folder (*This script won't work on Windows*)

```sh
$ npm run clean
```

## To-dos

- [x] Implement React Refresh
- [ ] Browserslist is the default for webpack target, however it currently breaks page refresh on changes. This is an issue with webpack-dev-server that should be fixed in future releases (v4+)

## Contributing

Feel free to contribute and open pull requests or issues.

## Credits

Based on [react-base], from Thiago L. Lima.

## License

[MIT]


[//]: # (Reference Links)


[react]: <https://reactjs.org/>
[react-router-dom]: <https://reactrouter.com/web>
[redux]: <https://redux.js.org/>
[redux-logger]: <https://github.com/LogRocket/redux-logger>
[extension]: <https://github.com/zalmoxisus/redux-devtools-extension>
[redux-saga]: <https://redux-saga.js.org/>
[axios]: <https://github.com/axios/axios>
[styled-components]: <https://styled-components.com/>
[PostCSS]: <https://github.com/postcss/postcss>
[postcss-preset-env]: <https://github.com/csstools/postcss-preset-env>
[webpack]: <https://webpack.js.org/>
[babel]: <https://babeljs.io/>
[eslint]: <https://eslint.org/>
[stylelint]: <https://github.com/stylelint/stylelint>
[Airbnb]: <https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb>
[jest]: <https://github.com/facebook/jest>
[@testing-library/react]: <https://github.com/testing-library/react-testing-library>
[react-helmet]: <https://github.com/nfl/react-helmet>

[react-base]: <https://github.com/tlima/react-base>

[MIT]: <https://github.com/lucasfrsi/react-boilerplate/blob/master/LICENSE>
