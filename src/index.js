import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import reducers from './reducers';

import './index.css';

const initialState = { 
  sideNav : false 
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers, initialState)}>
	  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<Router>
			<App />
		</Router>
	  </MuiThemeProvider>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
