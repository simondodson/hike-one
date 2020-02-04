import PropTypes from 'prop-types';
import ButtonLink from '../button/button-link';

const Contact = ({ title = '', button = '', link = '', target = '_self', children }) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');

	return (
		<section className="contact">
			<div className="container-inner">
				<h3 className="content">{title}</h3>
				<ButtonLink
					href={`${link ? link : '/contact'}`}
					target={target}
					classes="btn-large content"
					variant="primary"
				>
					{button}
				</ButtonLink>
			</div>
			{parallaxLayerFront}
		</section>
	);
};

Contact.propTypes = {
	title: PropTypes.string,
	button: PropTypes.string,
	link: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.node,
};

export default Contact;
