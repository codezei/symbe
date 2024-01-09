// // Import vendor jQuery plugin example


document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	let wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset :0,
		mobile: true,
		live: true}).init()

		// scrollState()
		mobMenuToggle()
		stickyHeader()
})

function mobMenuToggle() {
	let btn = document.querySelector('.header__navigation-btn-menu')
	let menu = document.querySelector(btn.dataset.toggle)
	let header = document.querySelector('.header')
	btn.addEventListener('click', function (e) {
		btn.classList.toggle('active')
		menu.classList.toggle('active')
		header.classList.toggle('active')
	})
}
function stickyHeader() {
	let header = document.querySelector('.header')

	if (document.body.getBoundingClientRect().top < 0) {
		header.classList.add('sticky')
	} else {
		header.classList.remove('sticky')
	}

	document.addEventListener('scroll', function () {
		if (document.body.getBoundingClientRect().top < 0) {
			header.classList.add('sticky')
		} else {
			header.classList.remove('sticky')
		}

	})
}


function scrollState () {
var isScrolling = false;

document.addEventListener("scroll", function() {
    if (!isScrolling) {
        console.log("Page is scrolling");
        isScrolling = true;
		document.body.classList.add('scrolling')
    }

    clearTimeout(window.scrollTimeout);
    
    window.scrollTimeout = setTimeout(function(){
        console.log("Scrolling stopped");
        isScrolling = false;
		document.body.classList.remove('scrolling')
    }, 200);
});
}