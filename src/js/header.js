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
			e.preventDefault()

			if( ! item.classList.contains( 'opened' ) ) {
				item.classList.add( 'opened' )
			} else item.classList.remove( 'opened' )
		} )
	} )
}