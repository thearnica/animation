import 'core/polyfills';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { rehydrateMarks, drainHydrateMarks } from 'react-imported-component';
// import chunk definition

import 'common/global-styles.scss';

import Example from 'pages/Example';

const root = document.getElementById('reactRoot') || document.createElement('div');

if (!root.parentNode) {
  document.body.appendChild(root);
}

rehydrateMarks(window.__IMPORTED_COMPONENTS__).then(() => {
  root.innerHTML = '';
  root.className = '';

  ReactDOM.render(<Example />, root);
});

// save used marks
window.snapSaveState = () => ({
  __IMPORTED_COMPONENTS__: drainHydrateMarks(),
});
