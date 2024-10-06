document.querySelectorAll('.faq-item').forEach(item=> {
    item.addEventListener('click', ()=> {
        item.classList.toggle('open');
    });
});

const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
    console.log("clicked!");
    navMenu.classList.toggle('open');
});