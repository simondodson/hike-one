import ButtonPrimaryLink from '../buttons/button-primary/button-primary-link';

const VacancyOverview = ({overview, vacancies}) => (
	<div className="vacancy-overview container">
		<h3 className="vacancy-overview-title">{overview.title}</h3>

		<p className="vacancy-overview-tagline">{overview.tagline}</p>

		<ul className="vacancy-overview-list">
		{
            vacancies.map((vacancy, index) => {
                return(
                    <li key={index} className="vacancy-overview-list-item">
						<a href={vacancy.url} target="_blank">
							<h4>{vacancy.title}</h4>
							<span>{vacancy.duration}</span>
							<span>{vacancy.location}</span>
						</a>
					</li>
                );
            })
        }
		</ul>	

		<ButtonPrimaryLink
			href={overview.callToActionUrl}
			target="_blank"
			classes="btn-large content" >
			{overview.callToActionTitle}
		</ButtonPrimaryLink>
	</div>
);

export default VacancyOverview;
