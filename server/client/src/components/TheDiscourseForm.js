import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Form, FormText, Label, Input, Fade, Alert, Modal, ModalBody } from 'reactstrap';

class TheDiscourseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			fadeIn: false,
			fadeInClear: false,
			visible: false,
			visibleClear: false,
			modal: false,
			modalClear: false,
		};
	}

	componentDidMount() {
		this.setState({ text: this.props.discourse });
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	toggle = () => {
		this.setState({
			fadeIn: !this.state.fadeIn,
			modal: !this.state.modal,
			visible: !this.state.visible,
		});
	};

	toggleClear = () => {
		this.setState({
			fadeInClear: !this.state.fadeInClear,
			modalClear: !this.state.modalClear,
			visibleClear: !this.state.visibleClear,
		});
	};
	submitForm(e) {
		e.preventDefault();
		const theNewDiscourse = this.state.text;
		this.toggle();
		this.props.updateDiscourse(theNewDiscourse);
	}

	handleClear() {
		this.props.clearDiscourse();
		this.toggleClear();
		this.setState({ text: '' });
	}

	render() {
		return (
			<div id="discourse">
				<Fade in={this.state.fadeIn} className="mt-3" mountOnEnter={false}>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalBody>
							<Alert color="dark" isOpen={this.state.visible} toggle={this.toggle}>
								<h4> You have changed The Discourse!</h4>
							</Alert>
						</ModalBody>
					</Modal>
				</Fade>
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
				<Fade in={this.state.fadeInClear} className="mt-3" mountOnEnter={false}>
					<Modal isOpen={this.state.modalClear} toggle={this.toggleClear} className={this.props.className}>
						<ModalBody>
							<Alert color="dark" isOpen={this.state.visibleClear} toggle={this.toggleClear}>
								<h4> You have destroyed The Discourse! Good job!</h4>
							</Alert>
						</ModalBody>
					</Modal>
				</Fade>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { discourse: auth.theDiscourse };
};

export default connect(mapStateToProps, actions)(TheDiscourseForm);
