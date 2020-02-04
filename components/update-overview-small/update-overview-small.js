import PropTypes from 'prop-types';
import ButtonLink from '../button/button-link';

const UpdateOverviewSmall = ({ children }) => (
	<div className="update-overview-small container">
		<div className="container-inner">{children}</div>
		<div className="update-overview-button-centered">
			<ButtonLink href="/updates" classes="btn-red-border" icon="arrowRight" variant="secondary">
				All updates
			</ButtonLink>
		</div>
	</div>
);

UpdateOverviewSmall.propTypes = {
	children: PropTypes.node,
};

export default UpdateOverviewSmall;
