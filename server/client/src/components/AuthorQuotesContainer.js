import React from 'react';
import { connect } from 'react-redux';
import { fetchAuthQuotes } from '../actions';

class AuthorQuotesContainer extends React.Component {
	handleClick = () => {
		this.props.fetchAuthQuotes(this.props.quote.author);
	};

	render() {
		return (
			<div id="sidebar">
				<button id="authQBtn" onClick={this.handleClick}>
					See all of the current author's quotes.
				</button>
				<ul>
					{this.props.authQuotes.map((quote, i) => {
						return (
							<li key={i}>
								"{quote.text}", author: {quote.author}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { quote: auth.quote, authQuotes: auth.authQuotes };
}

const mapDispatchToProps = {
	fetchAuthQuotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorQuotesContainer);
