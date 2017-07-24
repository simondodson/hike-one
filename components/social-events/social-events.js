import ButtonSecondary from '../buttons/button-secondary/button-secondary';

const SocialFeedEvents = ({ subtitle, events, link}) => {
	return (
		<div className="social-events"> 
			<h4 className="social-event-subheader">{subtitle}</h4>
			{
				Object.values(events).map((event, index) => {
					return (
						<div className="social-event" key={index}>
							<h3 className="social-event-header">{event.title}</h3>
							<span className="social-event-text-small">{event.dateTime}</span>
							<span className="social-event-text-large">{event.location}</span>
							 <ButtonSecondary classes="btn-white" href="#" value="Register" />
						</div>
					)
				})
			}
			<div className="social-event-footer">
				<ButtonSecondary classes="" href="#" value="Register" />
			</div>
		</div>
	)
}

export default SocialFeedEvents;
