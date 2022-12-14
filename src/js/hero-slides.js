import Swiper, { Navigation, Pagination, Scrollbar,  Autoplay } from 'swiper';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	testiSwiper()
} )

const testiSwiper = () => {

	const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        direction: 'horizontal',
		loop: true,
        spaceBetween: 50,
        grabCursor: 1,

        modules: [ Navigation, Scrollbar, Pagination, Autoplay ],

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: 1
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },

        autoplay: {
            delay: 7000,
            }
	} )
}