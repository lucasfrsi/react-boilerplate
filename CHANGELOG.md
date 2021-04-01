# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Testing environment, along with the following libraries:
  - `jest`, as the core testing framework
  - `@testing-library/react` to provide utilities to facilitate querying the DOM in the same way a user would. It is built on top of DOM Testing Library which is where most of the logic behind the queries is
  - `@testing-library/jest-dom` extending jest by providing custom jest matchers that makes tests more declarative, clear to read and to maintain
  - `@testing-library/user-event` to simulate the real events that would happen in the browser as the user interacts with it
  - `identity-obj-proxy` to allow className lookups on the styles object to be returned as-is (e.g., `styles.foobar === 'foobar'`)
- `jest` configuration in `package.json`
- New scripts:
  - `"test": "jest --verbose"`
  - `"test:watch": "jest --verbose --watch"`
  - `"validate": "npm run lint && npm run test"`
- New package keywords: `jest` and `testing-library`

### Changed
- Scripts:
  - From `"build": "npm run lint ..."` to `"build": "npm run validate ..."`
- `.eslintrc.json` rules to get no errors when importing dev dependencies in test files
- `jsconfig.json` to allow jest autocompletion

### Removed
- Build hash in `Footer` component

<!-- No changes made yet. Check the to-dos section in [README.md] for more information of what's to come. -->

## [1.0.0] (2021-03-15)

### Added
- `redux-logger` as another debugging tool for redux
- `babel-preset-env` as dev dependecy, `core-js` and `regenerator-runtime` as dependencies, along with their configurations to support syntax transforms and browser polyfills according to browsers targets
- `stylelint` as a style linter to avoid errors and enforce conventions in sass styles, configured using sass-guidelines
- `jsconfig.json` to allow VSCode IntelliSense to work with webpack aliases by specifying the paths keys
- `browserslist` config in `package.json`
- `css-minimizer-webpack-plugin` as a substitute for optimize-css-assets-webpack-plugin
- webpack `asset modules/resource` as a substitute for file-loader
- `postcss`, `postcss loader`, `postcss-preset-env` and `postcss-flexbugs-fixes` to allow  converting modern CSS into something most browsers can understand, determining the polyfills based on target browsers (browserslist) plus autoprefixing and flexbox fixes
- webpack `output.clean: true` as a substitute for clean-webpack-plugin
- webpack `resolve aliases` to avoid path hell
- webpack `resolve symlinks: false` to avoid causing module resolution to fail when using tools that symlink packages
- webpack `optimization.runtimechunk: 'single'` in case of multiple entry points on a single html page, and to avoid [trouble](https://bundlers.tooling.report/code-splitting/multi-entry/)
- webpack `optimization.splitchunks` to extract third-party libraries to a separate vendor chunk as they are less likely to change than the local source code, this also allow clients to request even less from the server to stay up to date
- webpack `optimization.moduleids` to allow the vendor hash to stay consistent between builds despite any new local dependencies
- `meta viewport` to webpack htmlwebpackplugin config
- global constant `__webpack_devmode__` via webpack `DefinePlugin` that is configured at compile time, allowing different behavior between development builds and production builds.
- `webpack.target` because browserslist is the default for it but it also currently breaks page refresh on changes. This is an issue with webpack-dev-server that should be fixed in future releases (v4+, currently in beta)

### Changed
- all npm packages to their `latest` stable versions
- `README.md` with the newest features and changes
- entire webpack config file to match its `latest` version (v5.25.0)
- path.resolve to `path.join` in webpack config
- webpack hash to `contenthash`, since hash is now deprecated
- webpack `devtool` from 'source-map' to `'eval-source-map'` in development, and `none` in production

### Removed
- `clean-webpack-plugin` in favor of webpack output.clean: true
- `file-loader` in favor of webpack asset modules / resource
- `optimize-css-assets-webpack-plugin` in favor of css-minimizer-webpack-plugin
- `terser-webpack-plugin` is not required to be installed anymore, since webpack v5 comes with the latest version out of the box

## 0.0.1 (2020-08-05)

### **Initial non-release version**
### Added

- Boilerplate code

[//]: # (Reference Links)

[README.md]: <https://github.com/lucasfrsi/react-boilerplate#to-dos>
[Unreleased]: <https://github.com/lucasfrsi/react-boilerplate/compare/v1.0.0...HEAD>
[1.0.0]: <https://github.com/lucasfrsi/react-boilerplate/releases/tag/v1.0.0>
