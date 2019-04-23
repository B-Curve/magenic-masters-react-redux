import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import store from './store';
import App from './App';
import './index.scss';

ReactDOM.render(
	<Provider store={store}>
		<Router history={createBrowserHistory()}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
