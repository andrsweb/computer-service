import Swiper, { EffectFade, Navigation } from 'swiper';

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

        modules: [ Navigation, EffectFade ],

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
	} )
}