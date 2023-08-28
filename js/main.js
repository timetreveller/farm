"use strict"

document.addEventListener("click", documentClick);

function documentClick(e) {
	const targetItem = e.target;

	if (targetItem.closest(".icon__menu")) {
		document.documentElement.classList.toggle("menu-open");
	}
}

//  new Swiper('.swiper-new')





const newSwiper = document.querySelector('.swiper-new');

if (newSwiper) {
	const newSwiper = new Swiper('.swiper-new', {
		//  Optional parameters
		// slidesPerView: 3,
		breakpoints:{
			320:{
				slidesPerView:1,
			},
			479.98:{
				slidesPerView:2,
			},
			767.98:{
				slidesPerView:3,
			}
		
		},
		autoHeight: true,
		loop: true,
		//  If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	})
};
