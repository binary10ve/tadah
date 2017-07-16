import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';

//const muiTheme = getMuiTheme({
//    palette: {
//        accent1Color: deepOrange500,
//    },
//});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render( <MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
