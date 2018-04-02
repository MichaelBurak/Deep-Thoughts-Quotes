import React from 'react';
import { PortalWithState } from 'react-portal';
import TheDiscourseForm from './TheDiscourseForm';

class DiscourseContainer extends React.Component {
	render() {
		return (
			<div id="discourseEntry">
				<PortalWithState closeOnOutsideClick closeOnEsc>
					{({ openPortal, closePortal, isOpen, portal }) => [
						<button key="foo" onClick={openPortal}>
							Enter The Discourse
						</button>,
						portal(
							<div>
								<TheDiscourseForm />
								<br />
								<button onClick={closePortal}>Begone Discourse</button>
							</div>
						),
					]}
				</PortalWithState>
			</div>
		);
	}
}
export default DiscourseContainer;
