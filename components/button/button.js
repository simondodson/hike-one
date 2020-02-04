import PropTypes from 'prop-types';
import Icon from '../icon/icon';

const Button = ({
	children,
	classes = '',
	disabled = false,
	icon = '',
	onClick = null,
	type = 'button',
	variant = 'clean',
}) => (
	<button
		type={type}
		onClick={onClick}
		className={`btn-${variant} ${classes} ${icon ? 'btn-icon' : ''}`}
		disabled={disabled}
	>
		{children}

		{icon && (
			<span className="icon">
				<Icon icon={icon} />
			</span>
		)}
	</button>
);

Button.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
	variant: PropTypes.string,
};

export default Button;
