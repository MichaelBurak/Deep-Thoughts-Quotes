import React from 'react';
import { Button } from 'reactstrap';

const GeneratorButton = ({ fetchQuote, currentQuote }) => {
	const quoteGen = () => {
		fetchQuote(currentQuote);
	};

	return (
		<div>
			<Button id="genBtn" className="button" onClick={quoteGen}>
				Generate A Quote
			</Button>
			<br />
			<br />
		</div>
	);
};

export default GeneratorButton;
