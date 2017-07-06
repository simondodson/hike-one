import React from 'react';

import SecondaryButtonLink from '../buttons/button-secondary/button-secondary-link';
import Shapes from '../contact/contact-shapes';

class Contact extends React.Component {
	render() {
		const props = this.props;
		return (
			<div className="contact">
				<div className="container-inner">
					<h3 className="content">{props.title}</h3>
					<SecondaryButtonLink noArrow href="#" classes="btn-secondary-alt content" value={props.button} />
				</div>
				<Shapes />
			</div>
		);
	}
}

export default Contact;
