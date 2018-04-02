import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TheDiscourseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	componentDidMount() {
		this.setState({ text: this.props.discourse });
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitForm(e) {
		e.preventDefault();
		const theNewDiscourse = this.state.text;
		this.props.updateDiscourse(theNewDiscourse);
	}

	handleClear() {
		this.props.clearDiscourse();
	}

	render() {
		return (
			<div id="discourse">
				<p>The Discourse </p>
				<br />
				<form onSubmit={e => this.submitForm(e)}>
					"Effect the discourse"
					<textarea
						className="discourseField"
						rows="10"
						cols="25"
						maxlength="2000"
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
						required
					/>
					<br />
					<button id="discBtn">Submit To The Discourse</button>
				</form>
				<button onClick={e => this.handleClear(e)}>Clear The Room </button>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { discourse: auth.theDiscourse };
};

export default connect(mapStateToProps, actions)(TheDiscourseForm);
