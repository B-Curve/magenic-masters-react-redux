import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.scss';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<App />
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();
