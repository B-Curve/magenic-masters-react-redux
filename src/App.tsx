import * as React from 'react';
import { Provider } from 'react-redux';
import { NavLink } from 'react-router-dom';

import store from './store';
import { AppStyles } from './App.styles';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppStyles.Container>
					<AppStyles.Navigation>
						<h3>Facebook 2</h3>
						<AppStyles.NavTabs>
							<AppStyles.NavTab to="/feed" activeClassName="active-link">
								<span>Feed</span>
								<i className="fas fa-newspaper"></i>
							</AppStyles.NavTab>
							<AppStyles.NavTab to="/profile" activeClassName="active-link">
								<span>Profile</span>
								<i className="fas fa-user-circle"></i>
							</AppStyles.NavTab>
							<AppStyles.NavTab to="/dms" activeClassName="active-link">
								<span>DMs</span>
								<i className="fas fa-envelope"></i>
							</AppStyles.NavTab>
						</AppStyles.NavTabs>
					</AppStyles.Navigation>
					<AppStyles.PageContent></AppStyles.PageContent>
				</AppStyles.Container>
			</Provider>
		);
	}
}

export default App;