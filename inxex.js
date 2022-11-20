const menu = document.getElementById('menu');
const navbar = document.getElementById('nav-items')

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})