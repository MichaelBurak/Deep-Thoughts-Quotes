import React from 'react';

const GeneratorButton = ({ fetchQuote, currentQuote }) => {
	const quoteGen = () => {
		fetchQuote(currentQuote);
	};

	return (
		<div>
			<button id="genBtn" className="button" onClick={quoteGen}>
				Generate A Quote
			</button>
			<br />
		</div>
	);
};

export default GeneratorButton;
