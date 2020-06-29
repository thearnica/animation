#Info

* node v10.15.3
* react 16.8.6

# Setup

* yarn

# Start dev server

* yarn start

# Deploy

* yarn build
* no deploys except demo at now.sh are configured.

# Deploy to now.sh

* npm i -g now
* yarn now:deploy

# What should I know?

TypeScript, React, Redux, Redux-Saga, BEM/SCSS

# Schema

* `common` - utility helpers
* `components` - all components
* `data` - mocks for storybook
* `hooks` - react hooks
* `pages` - all pages
* `static` - fonts and so on
* `containers` - helper context containers
* `core` - state management
* `core/state` - state "ducks"

### State duck

(https://github.com/erikras/ducks-modular-redux) - a state slice

* `reducer` - how to "write" to the slice
* `selectors` - how to "read" from the slice
* `state` - the slice
* `types` - data types
* [`saga`] - how slice should "react" on actions
* [`actions`] - actions
