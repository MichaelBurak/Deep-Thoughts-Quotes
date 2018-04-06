import React from 'react';
import { connect } from 'react-redux';
import { fetchAuthQuotes } from '../actions';
import { Collapse, Button, CardText, Card } from 'reactstrap';

class AuthorQuotesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
		};
	}

	toggle = () => {
		this.setState({ collapse: !this.state.collapse });
	};

	handleClick = () => {
		this.props.fetchAuthQuotes(this.props.quote.author);
		this.toggle();
	};

	render() {
		return (
			<div id="sidebar">
				<Button id="authQBtn" onClick={this.handleClick}>
					See all of the current author's quotes.
				</Button>
				<br />
				<br />
				<ul>
					<Collapse isOpen={this.state.collapse}>
						{this.props.authQuotes.map((quote, i) => {
							return (
								<div
									key={i}
									style={{ overflow: 'hidden', backgroundColor: '#d6d8d9', borderColor: '#c6c8ca' }}
								>
									<p style={{ color: '#555555', wordWrap: 'break-word' }}>
										"{quote.text}" <br /> Author: {quote.author}
										<hr />
									</p>
								</div>
							);
						})}
					</Collapse>
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
