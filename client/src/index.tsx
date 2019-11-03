import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import reset from 'react-style-reset';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

injectGlobal(reset, {
    boxSizing: "border-box",
})

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
