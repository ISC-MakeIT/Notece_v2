import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import reset from 'react-style-reset';
import App from './App/App';
import Tags from './App/shared/Tags';
import * as serviceWorker from './serviceWorker';

injectGlobal(reset, {
    boxSizing: 'border-box'
});

ReactDOM.render(<Tags />, document.getElementById('root'));

serviceWorker.unregister();
