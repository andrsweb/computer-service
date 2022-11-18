import Swiper, { Navigation, Pagination } from 'swiper';

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

        modules: [ Navigation, Pagination ],

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: 1
        }
	} )
}