import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PopeAlert from './PopeAlert';
import { Button, Fade } from 'reactstrap';
import { Form, Label, Input, FormText } from 'reactstrap';

class SubmissionFormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			author: '',
			fadeIn: false,
		};
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
		});
	};

	render() {
		return (
			<div id="submissionform">
				<Fade in={this.state.fadeIn} tag={PopeAlert} className="mt-3" mountOnEnter={false} />
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
				<br />
			</div>
		);
	}
}

export default connect(null, actions)(SubmissionFormContainer);
