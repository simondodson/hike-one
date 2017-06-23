import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ServicesIntro from '../components/services-intro/services-intro';
import ServiceApproach from '../components/services-approach/service-approach';
import ServicesOverview from '../components/services-overview/services-overview';
import ServicesContact from '../components/services-contact/services-contact';

import Data from '../data/services/services.json';

class Services extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Services">
				<main>
					<Header/>
					<article className="article">
						<ServicesIntro title={Data.introTitle} buttonLabel={Data.introReadMoreCta}/>
						<ServiceApproach title={Data.approachTitle} text={Data.approachText} />
						<ServicesOverview title={Data.overviewTitle} items={Data.overviewItems} />
					</article>
					<ServicesContact/>
					<Footer/>
				</main>
			</Layout>
		);
	}
}

export default Services;
