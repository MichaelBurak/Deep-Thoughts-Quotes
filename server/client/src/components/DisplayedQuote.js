import React from 'react';
import { connect } from 'react-redux';
import GeneratorButton from './GeneratorButton';
import { fetchQuote } from '../actions';
import { Jumbotron, Card, CardBody, Button } from 'reactstrap';

class DisplayedQuote extends React.Component {
	handleClick = () => {
		const q = document.getElementById('mainQuoteText');
		const range = document.createRange(); // create new range object
		range.selectNodeContents(q); // set range to encompass desired element text
		const selection = window.getSelection(); // get Selection object from currently user selected text
		selection.removeAllRanges(); // unselect any user selected text (if any)
		selection.addRange(range); // add range to Selection object to select it
		document.execCommand('copy');
	};

	render() {
		return (
			<div id="mainQuote" className="center">
				<Jumbotron>
					<Card>
						<CardBody>
							<h1 id="mainQuoteText">"{this.props.quote.text}"</h1>
							<hr />
							<h2> Author: {this.props.quote.author} </h2>
							<br />
							<GeneratorButton currentQuote={this.props.quote.text} fetchQuote={this.props.fetchQuote} />
							<Button id="clipboardBtn" className="button" onClick={this.handleClick}>
								Copy to Clipboard
							</Button>
						</CardBody>
					</Card>
				</Jumbotron>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { quote: auth.quote };
}

const mapDispatchToProps = {
	fetchQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayedQuote);
