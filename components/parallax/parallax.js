import { Component } from 'react';
import PropTypes from 'prop-types';
import 'intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';
import TweenLite from 'gsap';

const options = {
	root: null,
	rootMargin: '0px 0px 100px 0px',
	threshold: 0,
};

class Parallax extends Component {
	constructor(props) {
		super();
		this.onObserve = this.onObserve.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.onResize = this.onResize.bind(this);
		this.getYOffset = this.getYOffset.bind(this);
		this.setYOffset = this.setYOffset.bind(this);
		this.setInitialOffSet = this.setInitialOffSet.bind(this);
		this.speed = props.speed ? 1 - parseFloat(props.speed) : -0.3;
		this.elementOffset = 0;

		this.state = {
			ticking: false,
			duration: 0.3,
		};
	}

	componentDidMount() {
		this.setInitialOffSet();

		// Create a resize observer
		this.resizeObserver = new ResizeObserver(this.onResize);
		this.resizeObserver.observe(this.containerEl);

		// Create an intersection observer
		this.intersectionObserver = new IntersectionObserver(this.onObserve, options);
		this.intersectionObserver.observe(this.containerEl);
	}

	componentWillUnmount() {
		this.intersectionObserver.disconnect();
		this.resizeObserver.disconnect();
		window.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('resize', this.onResize);
	}

	onObserve(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				window.addEventListener('scroll', this.onScroll);
				window.addEventListener('resize', this.onResize);
			}
		});
	}

	onScroll() {
		const { ticking } = this.state;

		if (!ticking) {
			window.requestAnimationFrame(() => {
				const YOffSet = this.getYOffset();
				this.setYOffset(YOffSet);
				this.setState({ ticking: false });
			});
		}

		this.setState({ ticking: true });
	}

	onResize() {
		const { ticking } = this.state;

		if (!ticking) {
			window.requestAnimationFrame(() => {
				this.initialScrollHeight = null;
				this.setInitialOffSet();
				const YOffSet = this.getYOffset();
				this.setYOffset(YOffSet, true);
				this.setState({ ticking: false });
			});
		}

		this.setState({ ticking: true });
	}

	setInitialOffset() {
		this.elementOffset = this.getParallaxYOffset();

		// apply offset
		this.element.style.transform = `translate3d(0px, ${this.elementOffset}px, 0px)`;
		// show layers only after offset to prevent jumping animations
		this.element.style.visibility = 'visible';
	}

	getYOffset() {
		const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;

		// set initial scrollheight
		this.initialScrollHeight = this.initialScrollHeight ? this.initialScrollHeight : scrolledHeight;
		// calculate relative scroll height
		let relativeScroll = scrolledHeight - this.initialScrollHeight;
		// calculate y offset and return it
		return relativeScroll * this.speed + this.elementOffset;
	}

	setYOffset(yOffset, noAnimation) {
		const { duration } = this.state;

		noAnimation
			? // don't use tweenlite if animation is instant
			  (this.element.style.transform = `matrix(1, 0, 0, 1, 0, ${yOffset})`)
			: // use tweenlite for a smooth parallax effect
			  TweenLite.to(this.element, duration, { y: yOffset }, { ease: 'Linear.easeNone' });
	}

	getParallaxYOffset() {
		const elBoundingRect = this.element.getBoundingClientRect();
		const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;
		const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;

		// y coordinate bottom of viewport relative from top of document
		const bottomScreen = windowHeight + scrolledHeight;
		// y coordinate top of element relative from top of document
		const elementTop = elBoundingRect.top + window.pageYOffset;
		// y coordinate bottom of element relative from top of document
		const elementBottom = elBoundingRect.bottom + window.pageYOffset;
		const elementHalf = elBoundingRect.height / 2;
		const windowHalf = windowHeight / 2;

		if (elementTop > bottomScreen) {
			// element below viewport
			return -((elementHalf + windowHalf) * this.speed);
		} else if (elementBottom < scrolledHeight) {
			// element above viewport
			return (elementHalf + windowHalf) * this.speed;
		} else {
			// element is partial in view
			const viewportMiddle = scrolledHeight + windowHalf;
			const elementMiddle = elementTop + elementHalf;

			// how far is element middle from viewportMiddle
			const elementFromMiddle = elementMiddle - viewportMiddle;

			if (elementFromMiddle > 0) {
				// element middle under middle of the viewport
				return -(elementFromMiddle * this.speed);
			} else {
				// element middle over middle of the viewport
				return -elementFromMiddle * this.speed;
			}
		}
	}

	render() {
		const { children } = this.props;

		return (
			<div ref={node => (this.containerEl = node)} className="parallax-layer-container">
				<div
					ref={node => (this.element = node)}
					className="parallax-layer"
					style={{ visibility: 'hidden' }}
				>
					{children}
				</div>
			</div>
		);
	}
}

Parallax.propTypes = {
	speed: PropTypes.number,
	children: PropTypes.node,
};

export default Parallax;
