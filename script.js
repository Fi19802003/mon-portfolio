// Menu responsive
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
})

// Animation au scroll
const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-zoom');
const revealonscroll = () => {
    const triggerbottom = window.innerHeight * 0.85;
    elements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        if (top < triggerbottom) {
            element.classList.add('visible');
        } else {
            element.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', revealonscroll);
window.addEventListener('load', revealonscroll);