document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurgerMenu( '.burger-button', '.header-inner-wrapper' )
} )

const toggleBurgerMenu = ( button, selector ) => {
    const burgerButton  = document.querySelector( button )
    const headerWrapper = document.querySelector( selector )

    burgerButton.addEventListener( 'click', () => {
        if( ! burgerButton && ! headerWrapper ) return

        if( ! headerWrapper.classList.contains( 'opened' ) ) {
			headerWrapper.classList.add( 'opened' )
			burgerButton.classList.add( 'opened' )
		}  else {
			headerWrapper.classList.remove( 'opened' )
			burgerButton.classList.remove( 'opened' )
		}
    } )

    window.addEventListener('resize', () => {
		const headerInnerWrapperOpened = document.querySelector( '.header-inner-wrapper.opened' )

		if( ! headerInnerWrapperOpened ) return

		reCalculateDropdownHeight( headerInnerWrapperOpened )
	})

	const reCalculateDropdownHeight = () => {
		const headerInnerWrapp  = document.querySelector( '.header-inner-wrapper' )
		const dropdownInner  = document.querySelector( '.header-inner' )

		if (! headerInnerWrapp || ! dropdownInner) return

		headerInnerWrapp.style.height = `${ dropdownInner.getBoundingClientRect().height }px`
	}
}