export function scrollIntoView({ target }) {
	const el = document.querySelector(`#${target.getAttribute('data-hover')}`);
	
	if (!el) return;

	el.scrollIntoView({
		behavior: 'smooth'
	});
}