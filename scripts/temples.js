const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');

    menuButton.textContent = isOpen ? '✕' : '☰';
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
});

document.querySelector('#currentyear').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;