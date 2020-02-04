import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../icon/icon';

const ButtonLink = ({
	children,
	classes = '',
	href = '',
	icon = '',
	target = '_self',
	variant = 'clean',
}) => (
	<Link href={href} prefetch={target ? false : null}>
		<a target={target} className={`btn-${variant} ${classes} ${icon ? 'btn-icon' : ''}`}>
			{children}
			{icon && (
				<span className="icon">
					<Icon icon={icon} />
				</span>
			)}
		</a>
	</Link>
);

ButtonLink.propTypes = {
	classes: PropTypes.string,
	href: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.string,
	target: PropTypes.string,
};

export default ButtonLink;
