import ArrowRight from '../icons/arrow-right/arrow-right';

const TwitterExtract = ({ twitterImage, subtitle, title, date, linkTwitterAccount, linkTwitterPost }) => (
	<div className="twitter-extract">
		<div className={`twitter-extract-image ${twitterImage ? '' : 'is-hidden' }`}>
			<a href={linkTwitterPost}>
				<img src={twitterImage} alt=""/>
			</a>
		</div>
		<div className={`twitter-extract-text ${twitterImage ? '' : 'twitter-extract-full-width' }`}>
			<div className={`twitter-extract-triangle ${twitterImage ? '' : 'is-hidden' }`}></div>
			<a href={linkTwitterAccount}>
				<h4>{subtitle}</h4>
			</a>
			<a href={linkTwitterPost}>
				<h3>{title}</h3>
			</a>
			<span>{date}</span>
			<a href={linkTwitterAccount}>
				<ArrowRight />
			</a>
		</div>
	</div>
);


export default TwitterExtract;
