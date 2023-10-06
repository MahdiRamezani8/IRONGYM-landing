const openMenuBtn = document.querySelector('#toggle-menu')
const mobileMenuElem = document.querySelector('#MB-menu')
let oppend = false
openMenuBtn.addEventListener('click', event => {
    oppend = !oppend
    mobileMenuElem.classList.toggle('active')
    if (oppend) {
        openMenuBtn.className = 'fa fa-close'
    } else {
        openMenuBtn.className = 'fa fa-navicon'
    }
}) 