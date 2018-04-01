import React, { Component } from 'react';
import { connect } from 'react-redux';
import GeneratorButton from './GeneratorButton';
import { fetchQuote } from '../actions';

class DisplayedQuote extends Component {
	render() {
		return (
			<div id="mainQuote">
				"{this.props.auth.quote.text}"
				<br />Author: {this.props.auth.quote.author}
				<br />
				<GeneratorButton fetchQuote={this.props.fetchQuote} />
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

const mapDispatchToProps = {
	fetchQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayedQuote);
