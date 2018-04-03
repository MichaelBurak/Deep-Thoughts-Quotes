import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Form, FormText, Label, Input } from 'reactstrap';

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
		this.setState({ text: '' });
	}

	render() {
		return (
			<div id="discourse">
				<Form onSubmit={e => this.submitForm(e)}>
					<FormText>The Discourse</FormText>
					<Label for="text">"Effect" "The Discourse" "Scare Quotes" </Label>
					<Input
						type="textarea"
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
						maxLength="140"
					/>

					<br />
					<Button id="discBtn">Set the tone of The Discourse</Button>
				</Form>
				<br />
				<Button onClick={e => this.handleClear(e)}>Invoke Godwin's Law </Button>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { discourse: auth.theDiscourse };
};

export default connect(mapStateToProps, actions)(TheDiscourseForm);
