import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DisplayedQuote extends Component {
	render() {
		return (
			<div id="mainQuote">
				"{this.props.auth.quote.text}"
				<br />Author: {this.props.auth.quote.author}
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(DisplayedQuote);
