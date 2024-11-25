export function hideAllPageScroll() {
	document.body.style.overflow = 'hidden';
	document.body.style.boxSizing = 'border-box';
	document.body.style.webkitOverflowScrolling = 'none';
	document.body.style.msOverflowStyle = 'none';
	document.body.style.overflowStyle = 'none';
}

export function showAllPageScroll() {
	document.body.style.overflow = 'auto';
	document.body.style.boxSizing = 'content-box';
	document.body.style.webkitOverflowScrolling = 'touch';
	document.body.style.msOverflowStyle = 'auto';
	document.body.style.overflowStyle = 'auto';
}
