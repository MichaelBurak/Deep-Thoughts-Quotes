import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import '../styles/App.css';

import Header from './Header';
import DisplayedQuote from './DisplayedQuote';
import SubmissionFormContainer from './SubmissionFormContainer';
import AuthorQuotesContainer from './AuthorQuotesContainer';
import DiscourseContainer from './DiscourseContainer';
// import TwitterAuth from './TwitterAuth';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchQuote();
		this.props.fetchDiscourse();
		//this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<Header />
				<DisplayedQuote />
				<SubmissionFormContainer />
				<AuthorQuotesContainer />
				<DiscourseContainer />
			</div>
		);
	}
}

export default connect(null, actions)(App);
