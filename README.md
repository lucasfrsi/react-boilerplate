# react-boilerplate

This project is meant to be used as a boilerplate code for web projects based on React. It comes with an opinionated base folder structure and all libraries and webpack pre-configured.

## Technologies and Libraries

### UI and Navigation
- [react]
- [react-router-dom]

### State Management and Side-Effects
- [redux]
  - Pre-configured to use Redux DevTools [extension] (you **must** install it for it to work) and [redux-logger].
- [redux-saga]

### HTTP Requests
- [axios]

### Styling
- [sass]
  - [PostCSS] configured with [postcss-preset-env] to support modern CSS and autoprefixing based on targeted browsers.

### Minification, Compression and Bundling
- [webpack] - using [babel] to parse JSX

### Linting
- [eslint] - based on [Airbnb]
- [stylelint] - based on [sass-guidelines]

### Browser Support
- Change the **browserslist** config inside **package.json** according to your needs. Both Babel and PostCSS will take care of polyfills and autoprefixing.

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

Create a **dist** directory with the production build of the app, ready for deployment. By default it runs the lint script right before building.

```sh
$ npm run build
```

Run the building script without linting.

```sh
$ npm run build:nocheck
```

Serve the generated assets locally using **http-server** package, for testing purposes. You **must** have it installed for it to work.

```sh
$ npm i http-server -g
$ npm run serve
```

### Utilities

**Linting**

Running the following command will run both eslint and stylelint.

```sh
$ npm run lint
```

You can also run them separately

```sh
$ npm run eslint
$ npm run stylelint
```

**Clean**

Delete **node_modules** and **dist** folder (*This script won't work on Windows*)

```sh
$ npm run clean
```

## To-dos

- [ ] Implement Jest for testing purposes
- [ ] Implement React Refresh and its webpack plugin (currently waiting for a  non-experimental release)
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
[sass]: <https://sass-lang.com/>
[PostCSS]: <https://github.com/postcss/postcss>
[postcss-preset-env]: <https://github.com/csstools/postcss-preset-env>
[webpack]: <https://webpack.js.org/>
[babel]: <https://babeljs.io/>
[eslint]: <https://eslint.org/>
[stylelint]: <https://github.com/stylelint/stylelint>
[sass-guidelines]: <https://github.com/bjankord/stylelint-config-sass-guidelines>
[Airbnb]: <https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb>

[react-base]: <https://github.com/tlima/react-base>

[MIT]: <https://github.com/lucasfrsi/react-boilerplate/blob/master/LICENSE>
