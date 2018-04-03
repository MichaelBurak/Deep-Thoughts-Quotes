import React from 'react';
import TheDiscourseForm from './TheDiscourseForm';
import { Button, Modal, ModalBody } from 'reactstrap';

class DiscourseContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
		};
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal,
		});
	};

	render() {
		return (
			<div id="discourseEntry">
				<Button color="danger" onClick={this.toggle}>
					Enter The Discourse
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalBody>
						<TheDiscourseForm />
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
export default DiscourseContainer;
