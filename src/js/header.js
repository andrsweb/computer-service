import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurgerMenu( '.burger-button', '.header-wrapper', '.has-children' )
	showHidden()
} )

const toggleBurgerMenu = ( button, selector, child  ) => {
    const burgerButton  = document.querySelector( button )
    const headerWrapper = document.querySelector( selector )
	const headerNavLink = document.querySelectorAll( child )

    burgerButton.addEventListener( 'click', () => {
        if( ! burgerButton && ! headerWrapper ) return

		setTargetElement( document.querySelector( '#body-lock' ) )

        if( ! headerWrapper.classList.contains( 'opened' ) ) {
			headerWrapper.classList.add( 'opened' )
			burgerButton.classList.add( 'opened' )
			disableBodyScroll( getTargetElement() )
		}  else {
			headerWrapper.classList.remove( 'opened' )
			burgerButton.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
    } )

	headerNavLink.forEach( item => {
		item.addEventListener( 'click', e => {
			const target = e.target

			if( target.tagName !== 'A' ) e.preventDefault()
			else return

			if( ! item.classList.contains( 'opened' ) ) {
				headerNavLink.forEach( item => item.classList.remove( 'opened' ) )
				item.classList.add( 'opened' )
			}
			else item.classList.remove( 'opened' )
		} )
	} )

	window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        const WINDOW_WIDTH_MD = 767

        if( windowWidth >= WINDOW_WIDTH_MD &&  headerWrapper.classList.contains( 'opened' ) ) {
            headerWrapper.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
			headerNavLink.forEach( item => item.classList.remove( 'opened' ) )
            enableBodyScroll( getTargetElement() )
        }
    } )

	window.addEventListener('scroll', () => {
		const scrollTop = window.scrollY
		const header = document.querySelector( '.header' )

		if ( scrollTop > 0 ) {
			if ( ! header.classList.contains( 'scrolled' ) )
				header.classList.add( 'scrolled' )

	}   else {
			if ( header.classList.contains( 'scrolled' ) )
			header.classList.remove( 'scrolled' )
		}
	})
}

const showHidden = () => {
	const form = document.querySelector( '.form-wrapper' )
	const banner = form.querySelector( '.hidden-element' )
	let date = new Date()
	let hour = date.getHours()
	let oldDate,
		currentDate = date.getTime(),
		datesDiff

	if( hour >= 23 || hour < 8 ) {
		if( ! localStorage.getItem( 'formShownDate') ) {
			localStorage.setItem( 'formShownDate', currentDate )
			form.classList.add( 'opened' )
		} else {
			oldDate = localStorage.getItem( 'formShownDate' )
			datesDiff = Math.floor( ( currentDate - oldDate ) / ( 1000 * 60 * 60 ) )

			if( datesDiff > 12 ) {
				form.classList.add( 'opened' )
				localStorage.setItem( 'formShownDate', currentDate )
			}
		}
	} else {
		if ( banner ) banner.remove()
		if( localStorage.getItem( 'formShownDate') ) localStorage.removeItem( 'formShownDate' )
	}
}