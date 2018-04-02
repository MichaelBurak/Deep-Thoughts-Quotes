import React from 'react';
import { connect } from 'react-redux';
import GeneratorButton from './GeneratorButton';
import { fetchQuote } from '../actions';

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
				<h3 id="mainQuoteText">"{this.props.quote.text}"</h3>
				<br />
				<h3> Author: {this.props.quote.author} </h3>
				<br />
				<GeneratorButton currentQuote={this.props.quote.text} fetchQuote={this.props.fetchQuote} />
				<button id="clipboardBtn" className="button" onClick={this.handleClick}>
					Copy to Clipboard
				</button>
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
