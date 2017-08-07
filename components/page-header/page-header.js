import React from 'react';
import ArrowDownTriple from '../icons/arrow-down-triple/arrow-down-triple';

const pageHeader = ({heroImage, title = '', subtitle = '', onClickScrollButton, children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	return (
		<div className="home-intro container">
			{parallaxLayerBack}
			<div className="home-intro-overlay">
				<div className="container-inner home-intro-inner" style={{backgroundImage: `url(${heroImage})`}}>
					<h1 className="home-intro-heading content">{title}</h1>

					<button className="page-header-button content"
							onClick={onClickScrollButton ? onClickScrollButton : null} >
						<span className="page-header-button-text">{subtitle}</span>
						<span className="icon">
							<ArrowDownTriple />
						</span>
					</button>
				</div>
			</div>
			{parallaxLayerFront}
		</div>
	);
};

export default pageHeader;
