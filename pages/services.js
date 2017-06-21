import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ServicesIntro from '../components/services-intro/services-intro';
import ServiceApproach from '../components/services-approach/service-approach';
import ServicesOverview from '../components/services-overview/services-overview';
import ServicesContact from '../components/services-contact/services-contact';

class Services extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Services">
				<main>
					<Header/>
					<article className="article">
						<ServicesIntro/>
						<ServiceApproach/>
						<ServicesOverview/>
					</article>
					<ServicesContact/>
					<Footer/>
				</main>
			</Layout>
		);
	}
}

export default Services;