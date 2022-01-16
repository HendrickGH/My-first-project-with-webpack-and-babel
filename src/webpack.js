import checkSlider from './images/icon-check.svg';
const printImg = () => {
	const checks = document.querySelectorAll('img[alt="Enjoy our advantages"]');
	checks.forEach(check => (check.src = checkSlider));
};
export default printImg;
