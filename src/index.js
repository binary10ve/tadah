import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

injectTapEventPlugin();
ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
