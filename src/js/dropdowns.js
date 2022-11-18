
document.addEventListener( 'DOMContentLoaded',  () => {
    'use strict'

    toogleDropdown()
} )

const toogleDropdown = () => {
    const dropdowns = document.querySelectorAll( '.dropdown' )

    if ( ! dropdowns.length ) return

    dropdowns.forEach( dropdown => {
        dropdown.addEventListener( 'click', () => {
            const dropdownOpen = dropdown.querySelector( '.dropdown-open' )

            if ( ! dropdownOpen ) return

            if ( ! dropdown.classList.contains( 'opened') ) {
                dropdown.classList.add( 'opened' )
                reCalculateDropdownHeight(dropdown)
            }
            else {
                dropdown.classList.remove( 'opened' )
                dropdownOpen.style.height = '0'
            }
        })
    })
}

window.addEventListener('resize', () => {
    const dropdowns = document.querySelectorAll( '.dropdown.opened' )

    if( ! dropdowns.length ) return

    dropdowns.forEach(dropdown => reCalculateDropdownHeight(dropdown))
})

const reCalculateDropdownHeight = dropdown => {
    const dropdownOpen  = dropdown.querySelector( '.dropdown-open' ),
        dropdownInner   = dropdown.querySelector( '.dropdown-inner' )

    if (! dropdownOpen || ! dropdownInner) return

    dropdownOpen.style.height = `${ dropdownInner.getBoundingClientRect().height }px`
}