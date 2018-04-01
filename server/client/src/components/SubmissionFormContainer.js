import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SubmissionFormContainer extends React.Component {
	// Constructor sets initial state of form values to empty strings and takes in
	// props.

	constructor(props) {
		super(props);
		this.state = {
			text: '',
			author: '',
		};
	}

	//onChange event to handle form input into state change.

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitForm(e) {
		const values = this.state;
		console.log(values);
		e.preventDefault();
		//SubmissionHandler action
	}

	render() {
		return (
			<div>
				<form onSubmit={e => this.submitForm(e)}>
					<h5>Submit A Quote For Consideration By Your Benevolent Overlords!</h5>
					Quote:<br />
					<textarea
						rows="10"
						cols="25"
						maxlength="2000"
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
						required
					/>
					<br />
					Author Name:<br />
					<input
						type="text"
						name="author"
						maxlength="140"
						value={this.state.author}
						onChange={this.handleChange}
						required
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect(null, actions)(SubmissionFormContainer);
