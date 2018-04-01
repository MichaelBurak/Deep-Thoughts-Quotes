import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/App.css';

import Header from './Header';
import DisplayedQuote from './DisplayedQuote';
import SubmissionFormContainer from './SubmissionFormContainer';

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
						<DisplayedQuote />
						<SubmissionFormContainer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
