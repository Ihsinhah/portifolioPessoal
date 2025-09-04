var button_menu = document.getElementById('button-menu')

var menu_mobile = document.getElementById('menu-mobile')

var overlay_menu = document.getElementById('overlay-menu')

button_menu.addEventListener('click', ()=>(
    menu_mobile.classList.add('open-menu_bar')
))

menu_mobile.addEventListener('click', ()=>(
    menu_mobile.classList.remove('open-menu_bar')
))

overlay_menu.addEventListener('click', ()=>(
    menu_mobile.classList.remove('open-menu_bar')
))