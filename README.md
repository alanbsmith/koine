# Koine
_a common ui component library_

## Overview
Koine is my personal component library, while it's small, it's designed to be extensible and
 reusable across multiple application.

## Installation
This package is available on npm as `koine`, and you can find it
[here](https://www.npmjs.com/package/koine).

To install the latest stable version with `yarn`:

```sh
$ yarn add koine
```

...or with `npm`:

```sh
$ npm install koine
```

This component lib is set up to use
 [styled-components](https://github.com/styled-components/styled-components),  [polished](https://github.com/styled-components/polished), and [styled-components-modifiers](https://github.com/Decisiv/styled-components-modifiers) 💅. You'll need to install those to use this lib, if you aren't already.

 ```sh
yarn add styled-components styled-components-modifiers polished
```

### File Structure
This component library borrows its structure from [BEM](http://getbem.com/introduction/) and is set
 up to use Blocks, Elements, and Modifiers. Below is a description of each.


#### Blocks
Blocks are the highest level of abstraction in the Blocks, Elements, Modifiers concept.
 They are responsible for providing the context for Elements, handling UI logic, and rendering the
 Elements within the Block. They are not connected to application state, nor do they handle any
 business logic.

#### Elements
Elements are the smallest, indivisible parts of UI. They are responsible for actually rendering the
 UI. They do not handle application logic or UI logic, but they do handle their own modifiers which
 modify the element’s style. Elements generally exist within the context of a Block (as their own
 file in the Block’s directory) allowing the reuse of that set of Elements, but they are not
 exclusively bound to blocks. An example of a stand-alone Element would be an A, Link, H3, or P.
 These common elements live in `lib/elements`.

#### Modifiers
This library utilizes
 [`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to build
 modifiers. Modifiers are small functions that allow us to alter the properties of an Element.
 They primarily live in the Element's file and are solely responsible for modifying styles.
 Some modifiers are common to multiple Elements. An example would be `fontWeights`.
 These common modifiers live in `lib/modifiers`

#### An Example Structure
```
├ lib/
├── blocks/
|   ├── Card
|   |   ├── Body.js // <- Element
|   |   ├── Footer.js // <- Element
|   |   ├── Header.js // <- Element
|   |   └── index.js // <- Block
├── elements/
|   ├── A
|   ├── Link
|   ├── H3
|   ├── P
|   └── etc.
├── modifiers/
|   ├── fontWeights
|   └── etc.
└── index.js // <- export for all Blocks & Elements
```

## Local Development

### Linting

To run the linter once:
```
$ npm run lint
```

To run the watch script:
```
$ npm run lint:watch
```

### Tests

To run the tests once:
```
$ npm test
```

To run the watch script (for only relevant test files)
```
$ npm run test:watch
```

To run the watch script (for all test files)
```
$ npm run test:watchAll
```

To view the coverage report:
```
$ npm run test:coverage:report
```

### Build
_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what users will
 interact with when they using this library library. Nothing in `lib` gets shipped with
 the published module._

Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

_**NOTE:** the build script runs in the `prepublish` script just before you publish to npm._

## Publishing
If you already have an account with npm, you can simply run:
```
$ npm login
$ npm publish
```

If you don't have an account with npm:

_**NOTE:** Your email address is public_
```
$ npm set init.author.name "Your Name"
$ npm set init.author.email "you@example.com"
$ npm set init.author.url "http://yourblog.com"
$ npm adduser
$ npm publish
```

## Contributing
I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/alanbsmith/example-component-library/blob/master/.github/CONTRIBUTING.md).

## License
[MIT](https://github.com/alanbsmith/example-component-library/blob/master/LICENSE)
