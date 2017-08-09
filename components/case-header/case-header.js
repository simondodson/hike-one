import Icon from '../icon/icon'
import TweenLite from "gsap";

class CaseIntro extends React.Component {
	constructor() {
		super();
		this.range = 400;
		this.speed = -0.25;
		this.ticking = false;
		this.isHidden = false;
		this.onScroll = this.onScroll.bind(this);
		this.animateLayer = this.animateLayer.bind(this);
		this.setVisability = this.setVisability.bind(this);
	}

	componentDidMount() {
		this.elementBottom = this.element.getBoundingClientRect().bottom;
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		// update an animation before the next repaint with requestAnimationFrame
		if (!this.ticking) {
			window.requestAnimationFrame(() => {
				const scrolledHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;
				this.setVisability(scrolledHeight);
				this.animateLayer(scrolledHeight);
				this.ticking = false;
			});
		}
		this.ticking = true;
	}

	setVisability(scrolledHeight) {
		// hide or show component so that the footer is visable
		if (this.elementBottom + 200 <= scrolledHeight) {
			this.isHidden = true;
			this.element.classList.add('is-hidden');
		} else {
			this.isHidden = false;
			this.element.classList.remove('is-hidden');
		}
	}

	animateLayer(scrolledHeight) {
		// don't animate when component is hidden
		if (this.isHidden) { return; }

		// set opacity
		const opacity =  1 - (scrolledHeight / this.range);

		// set styles to animate
		const styles = {
			y: scrolledHeight * this.speed,
			opacity
		};

		// animate styles with tweenlight
		TweenLite.to(this.parallaxLayer, 0, styles, {ease: "Linear.easeNone" });
	}

	render() {
		const props = this.props;

		return (
			<section
				ref={node => this.element = node}
				className="case-header" style={{backgroundImage: `url(${props.image})`}} >

				{ props.video &&
					<video playsInline autoPlay muted loop poster={props.image} className="case-header-video">
						<source src={props.video} type="video/mp4" />
					</video>
				}

				<div className="case-header-inner container">
					<div className="case-header-parallax" ref={node => this.parallaxLayer = node}>
						<h1 className="case-header-title">{props.title}</h1>
						<p className="case-header-subtitle">{props.subtitle}</p>
						<button className="case-header-button"
								onClick={props.onClickScrollButton ? props.onClickScrollButton : null}>
							<Icon icon="arrowDownCircle" />
						</button>
					</div>
				</div>
			</section>
		);
	}
}
export default CaseIntro;
