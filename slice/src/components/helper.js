export const checkInit = (selector, name, init)=> {

	document.querySelectorAll(`${selector}`).forEach((item) => {
		if(!item.classList.contains(`${name}_processed`)) {
			item.classList.add(`${name}_processed`);
			init(item);
		}
	});
};
