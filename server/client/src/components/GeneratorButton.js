import React from 'react';

const GeneratorButton = ({ fetchQuote }) => {
	const quoteGen = () => {
		fetchQuote();
	};

	return (
		<button id="genbtn" onClick={quoteGen}>
			Generate Quote
		</button>
	);
};

export default GeneratorButton;
