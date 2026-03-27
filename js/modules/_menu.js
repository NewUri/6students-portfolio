
/* This function specifically controls the mobile navigation: it toggles the menu open/closed 
   and specifically ensures the menu disappears once a link is clicked. */
export function initMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        // This specifically opens or closes the menu and changes the icon to 'X'
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuBtn.innerHTML = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
        });

        // This specifically closes the menu automatically when a link is selected
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = '☰';
            });
        });
    }
}