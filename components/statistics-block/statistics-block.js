import PropTypes from 'prop-types';
import ButtonLink from '../button/button-link';

const StatisticsBlock = ({ color = '', alignment = '', summary = {}, groups = [], link = {} }) => (
	<div className={`colored-block ${color} ${alignment}`}>
		<div className="statistics">
			{summary && (
				<div className="statistics-large statistics-large-divider">
					<span className="statistics-amount-large">{summary.count}</span>
					<span className="statistics-title-large">{summary.label}</span>
				</div>
			)}

			{groups && (
				<div className="statistic-combination">
					<div className="statistic-combination-items">
						{groups.map((item, index) => (
							<div key={index} className="statistics-normal">
								<span className="statistics-amount-normal">{item.count}</span>
								<span className="statistics-title-normal">{item.label}</span>
							</div>
						))}
					</div>

					{link && (
						<div className="statistics-call-to-action">
							<ButtonLink href={link.target} target="_blank" variant="secondary">
								{link.label}
							</ButtonLink>
						</div>
					)}
				</div>
			)}
		</div>
	</div>
);

StatisticsBlock.propTypes = {
	color: PropTypes.string,
	alignment: PropTypes.string,
	summary: PropTypes.object,
	groups: PropTypes.array,
	link: PropTypes.object,
};

export default StatisticsBlock;
