document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurgerMenu( '.burger-button', '.header-wrapper', '.has-children' )
} )

const toggleBurgerMenu = ( button, selector, child  ) => {
    const burgerButton  = document.querySelector( button )
    const headerWrapper = document.querySelector( selector )
	const headerNavLink = document.querySelectorAll( child )

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
}