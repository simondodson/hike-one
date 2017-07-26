import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import FeedsBlock from '../components/feeds-block/feeds-block';
import CaseExtract from '../components/case-extract/case-extract';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import HomeIntro from '../components/home-intro/home-intro';
import * as HomeIntroShapes from  '../components/home-intro/home-intro-shapes';

import ReadMore from '../components/read-more/read-more';

import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';

import ServicesOverviewSmall from '../components/services-overview-small/services-overview-small';

import Data from '../dummy-data/home/home.json';

const Home = () => (
	<Layout title="Hike One - Home">
		<main className="main js-main">
			<Header color="black" />
			<article className="article-full-width">
				<HomeIntro
						parallaxLayerFront={ <HomeIntroShapes.FrontLayer1 /> }
						parallaxLayerBack={ <HomeIntroShapes.BackLayer1 /> }
						title={Data.heroHeading}
						subtitle={Data.heroSubheading}
						heroImage={Data.heroImage} />
				<TextCenter
						parallaxLayerFront={ <TextCenterShapes.FrontLayer2 /> }
						parallaxLayerBack={ <TextCenterShapes.BackLayer2 /> }
						classes="text-center-font-large text-center-spacing-large"
						text={Data.homeTextIntro} />
				<ServicesOverviewSmall services={Data.overviewItems} />
				<TextCenter
						classes="text-center-font-medium text-center-spacing-small"
						text={Data.homeTextStepTwo} />
				<CaseExtract
						headerImage={Data.caseExtractHeaderImage}
						title={Data.caseExtractTitle}
						subtitle={Data.caseExtactSubtitle}
						type={Data.caseExtractType}
						link={Data.linkWork} />

				<TextCenter
						classes="text-center-font-medium text-center-spacing-small"
						text={Data.homeTextStepThree} />
				<FeedsBlock />
				<Contact
					parallaxLayerFront={<ContactShapes.FrontLayer1 />}
					title={Data.contactTitle}
					button={Data.contactButton} />
				<ReadMore
					highlight={Data.readMore.highlight}
					links={Data.readMore.links} />
			</article>
			<Footer />
		</main>
	</Layout>
);

export default Home;
