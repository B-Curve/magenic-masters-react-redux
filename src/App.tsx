import * as React from 'react';

import { AppStyles } from './App.styles';
import Navbar from './components/Navbar';
import Modal from './components/modal/Modal';

class App extends React.Component {
	render() {
		return (
			<AppStyles.Container>
				<Navbar />
				<AppStyles.PageContent></AppStyles.PageContent>
				<Modal />
			</AppStyles.Container>
		);
	}
}

export default App;