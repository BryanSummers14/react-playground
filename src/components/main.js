import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';

import './css/main.css';

class Main extends Component {
	render() {
		return (
			<main className="view-main">
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
			</main>
		);
	}
}

export default Main;