import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/App.css';

import Header from './Header';

class App extends Component {
	componentDidMount() {
		this.props.fetchQuote();
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
