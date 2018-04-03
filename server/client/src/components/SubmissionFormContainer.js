import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Fade } from 'reactstrap';
import { Form, Label, Input, FormText, Modal, ModalBody, Alert } from 'reactstrap';

class SubmissionFormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '', author: '', fadeIn: false, visible: false, modal: false };
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitForm(e) {
		e.preventDefault();
		axios
			.post('/api/submissions', { text: this.state.text, author: this.state.author })
			.then(this.toggle())
			.then(this.setState({ text: '', author: '' }));
	}

	toggle = () => {
		this.setState({
			fadeIn: !this.state.fadeIn,
			modal: !this.state.modal,
			visible: !this.state.visible,
		});
	};

	render() {
		return (
			<div id="submissionform">
				<Fade in={this.state.fadeIn} className="mt-3" mountOnEnter={false}>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalBody>
							<Alert color="dark" isOpen={this.state.visible} toggle={this.toggle}>
								<h4> You are now a pope!</h4>
								<hr />
								<a style={{ color: '#555' }} href="https://en.wikipedia.org/wiki/Discordianism">
									Get your pope card!
								</a>
							</Alert>
						</ModalBody>
					</Modal>
				</Fade>
				<Form onSubmit={e => this.submitForm(e)}>
					<FormText>
						<h5>Submit A Quote For Consideration By Your Benevolent Overlords!</h5>
					</FormText>
					<Label for="text">Quote:</Label>
					<Input type="textarea" name="text" id="text" value={this.state.text} onChange={this.handleChange} />
					<Label for="author">Author:</Label>
					<Input
						type="textarea"
						name="author"
						id="author"
						value={this.state.author}
						onChange={this.handleChange}
						required
					/>
					<br />
					<Button> Submit </Button>
				</Form>
			</div>
		);
	}
}

export default connect(null, actions)(SubmissionFormContainer);
