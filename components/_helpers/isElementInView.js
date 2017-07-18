const isElementInView = (element) => {
	const elBoundingRect = element.getBoundingClientRect();
	const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;
	const scrolledHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;
	const bottomScreen = windowHeight + scrolledHeight;

	const elementTop = elBoundingRect.top + window.pageYOffset;
	const elementBottom = elBoundingRect.bottom + window.pageYOffset;

	return (bottomScreen >= elementTop || scrolledHeight >= elementBottom);
};

export default isElementInView;
