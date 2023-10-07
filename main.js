
let search = document.querySelector('.search-box');
let searchBtn = document.querySelector('#search')

searchBtn.onclick = function () {
    search.classList.toggle('active')
    NavBar.classList.remove('active')
}

let menu = document.querySelector('#menu');
let NavBar = document.querySelector('.nav-bar');
menu.onclick = function () {
    NavBar.classList.toggle('active')
    search.classList.remove('active')
}
window.onscroll = () => {
    NavBar.classList.remove('active')
}