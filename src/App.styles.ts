import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const navHeight = '70px';

const tabStyles = `
	height: ${navHeight};
	padding: 0 20px;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-evenly;
	font-size: 0.8em;
	cursor: pointer;
	transition: 300ms ease-in-out;
	text-align: center;
	color: rgba(10, 10, 10, 0.7);
	text-decoration: none;

	&:hover {
		box-shadow: inset 170px 200px 300px 111px rgba(204,204,204,1);
	}

	&.active-link {
		box-shadow: inset 170px 200px 300px 111px rgba(204,204,204,1);
	}
`;

const Container = styled.div`
	font-size: 1.5em;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	max-height: 100vh;
`;

const Navigation = styled.nav`
	height: ${navHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	padding: 0 1.5em;
	color: rgba(10, 10, 10, 0.7);
	box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);

	h3 { margin: 0; }
`;

const NavTabs = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	list-style: none;
	align-items: center;
	height: ${navHeight};
`;

const Link = styled(NavLink)`${tabStyles}`;

const NavTab = styled.li`${tabStyles}`;

const PageContent = styled.div`
	flex-grow: 1;
	background-color: #ddd;
	padding: 0 1.5em;
`;

export const AppStyles = {
	Container,
	Navigation,
	PageContent,
	NavTabs,
	NavTab,
	NavLink: Link,
};