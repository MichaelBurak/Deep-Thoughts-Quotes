import React from 'react';
import { Alert } from 'reactstrap';

class PopeAlert extends React.Component {
	constructor(props) {
		super(props);
		this.state = { visible: true };
	}

	onDismiss = () => {
		this.setState({ visible: false });
	};

	render() {
		return (
			<Alert color="dark" isOpen={this.state.visible} toggle={this.onDismiss}>
				<h4> You are now a pope!</h4>
				<hr />
				<a style={{ color: '#555' }} href="https://en.wikipedia.org/wiki/Discordianism">
					Get your pope card!
				</a>
			</Alert>
		);
	}
}

export default PopeAlert;
