import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SubmissionFormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			author: '',
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitForm(e) {
		e.preventDefault();
		axios
			.post('/api/submissions', { text: this.state.text, author: this.state.author })
			.then(alert('Congrats, you are a pope! https://en.wikipedia.org/wiki/Discordianism'))
			.then(this.setState({ text: '', author: '' }));
	}

	render() {
		return (
			<div id="submissionform">
				<form onSubmit={e => this.submitForm(e)}>
					<h5>Submit A Quote For Consideration By Your Benevolent Overlords!</h5>
					Quote:<br />
					<textarea
						className="submisField"
						rows="10"
						cols="25"
						maxLength="2000"
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
						required
					/>
					<br />
					Author Name:<br />
					<input
						className="submisField"
						type="text"
						name="author"
						maxLength="140"
						value={this.state.author}
						onChange={this.handleChange}
						required
					/>
					<br />
					<button id="submisBtn" className="button">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default connect(null, actions)(SubmissionFormContainer);
