const imageData = [
	'url(./images/img-1.jpg)',
	'url(./images/img-2.jpg)',
	'url(./images/img-3.jpg)',
	'url(./images/img-4.jpg)',
	'url(./images/img-5.jpg)',
];

let imageCount = 1;

function imageSlide() {
	const displayImage = (document.querySelector(
		'.frame'
	).style.backgroundImage = imageData[imageCount]);

	imageCount >= imageData.length ? (imageCount = 0) : imageCount++;
}

setInterval(imageSlide, 2000);
