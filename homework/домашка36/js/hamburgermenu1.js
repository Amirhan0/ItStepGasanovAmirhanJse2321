const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav1-ul');


hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});