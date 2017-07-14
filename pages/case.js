import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import ReadMore from '../components/read-more/read-more';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';
import * as CaseTextCenterShapes from '../components/case-text-center/case-text-center-shapes';

import Collage from '../components/collage/collage';
import * as CollageShapes from '../components/collage/collage-shapes';

import ImageCombo from '../components/image-combo/image-combo';
import * as ImageComboShapes from '../components/image-combo/image-combo-shapes';

import FiftyFifty from '../components/50-50/50-50';
import * as FiftyFiftyShapes from '../components/50-50/50-50-shapes';

import QuoteBlock from '../components/quote-block/quote-block';
import FullWidthImage from '../components/full-width-image/full-width-image';
import LogoList from '../components/logo-list/logo-list';

import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';

import TextCard from '../components/text-card/text-card';
import Data from '../dummy-data/case/case.json';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">

				<main className="main js-main">
					<Header />
					<article className="article-full-width">
						<CaseIntro
							title={Data.introImageTitle}
							subtitle={Data.introImageSubTitle}
							image={Data.introImage} />

						<div className="case-scrolling-content">
							<CaseTextCenter
								parallaxLayerBack={<CaseTextCenterShapes.FrontLayer1 />}
								title={Data.introTextTitle}
								text={Data.introText} >
							</CaseTextCenter>

							<FiftyFifty
								classes="fifty-fifty-content-left fifty-fifty-text-small"
								parallaxLayerBack={ <FiftyFiftyShapes.BackLayer1 />}
								title={Data.fiftyOneTitle}
								text={Data.fiftyOneText}
								image={Data.fiftyOneImage} />

							<FiftyFifty
								parallaxLayerBack={ <FiftyFiftyShapes.BackLayer2 /> }
								title={Data.fiftyTwoTitle}
								text={Data.fiftyTwoText}
								image={Data.fiftyTwoImage} />

							<ImageCombo
								parallaxLayerFront={<ImageComboShapes.FrontLayer1 /> } >
								<FullWidthImage image={Data.firstFullWidth} />

								<QuoteBlock
									color={Data.quoteFirstColor}
									quote={Data.quoteFirst}
									citeName={Data.quoteFirstCiteName}
									citeTitle={Data.quoteFirstCiteTitle}
									citeImage={Data.quoteFirstCiteImage} />
							</ImageCombo>

							<Collage
								parallaxLayerFront={<CollageShapes.FrontLayer1 />}
								parallaxLayerBack={<CollageShapes.BackLayer1 />}
								title={Data.collageTitle}
								text={Data.collageText}
								imageMedium={Data.collageImageMedium}
								imageSmall={Data.collageImageSmall} />

							<FiftyFifty
								classes="fifty-fifty-text-small"
								title={Data.fiftyThirdTitle}
								text={Data.fiftyThirdText}
								image={Data.fiftyThirdImage} />

							<FiftyFifty
								classes="fifty-fifty-content-left fifty-fifty-text-small"
								parallaxLayerFront={ <FiftyFiftyShapes.FrontLayer1 />}
								title={Data.fiftyFourthTitle}
								text={Data.fiftyFourthText}
								image={Data.fiftyFourthImage} />

							<ImageCombo
								parallaxLayerFront={<ImageComboShapes.FrontLayer2 /> }
								classes="image-combo-text" >
								<TextCard
									title="A design sprint in the rush of an airport"
									text="Using the Google Ventures method, we managed to go from idea to prototype in five days. While testing on day five, we had no actual machine to test the prototype in. That’s why we taped iPads to existing screens, while SITA hooked up laptops to the screens. For passengers, the experience was no different. " />

								<FullWidthImage image={Data.SecondFullWidth} />

								<QuoteBlock
									color={Data.quoteSecondColor}
									quote={Data.quoteSecond}
									citeName={Data.quoteSecondCiteName}
									citeTitle={Data.quoteSecondCiteTitle}
									citeImage={Data.quoteSecondCiteImage} />
							</ImageCombo>

							<CaseTextCenter
								title={Data.introTextSecondTitle}
								text={Data.introTextSecond} />

							<LogoList logos={Data.logos} />

							<FullWidthImage
								image={Data.thirdFullWidth}
								title={Data.thirdFullWidthTitle}
								subtitle={Data.thirdFullWidthText} />

							<Contact
								parallaxLayerFront={<ContactShapes.FrontLayer1 />}
								title={Data.contactTitle}
								button={Data.contactButton} />

							<ReadMore
								highlight={Data.readMore.highlight}
								links={Data.readMore.links} />
						</div>
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
