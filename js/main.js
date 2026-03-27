/*These lines specifically pull in the instructions for our menu, 
our FAQ section, and our star background from their own separate files 
to keep our code organized and easy to manage.*/
import { initMenu } from './modules/_menu.js';
import { initFAQ } from './modules/_faq.js';
import { initParticles } from './modules/_particles.js';

/*This function specifically fetches a separate HTML file (like hero.html), 
specifically pastes it into the correct placeholder on our main page, and 
then specifically triggers any special features (like animations) once the content is ready.*/
async function loadComponent(elementId, filePath, setupFunction = null) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = html;
            
            if (setupFunction) setupFunction(); 
            return true;
        }
    } catch (error) {
        console.error(`Error loading ${elementId}:`, error);
        return false;
    }
}

/*This function specifically finds the 'backToTop' button in your footer,
 specifically listens for a click, and specifically scrolls the window smoothly
 back to the very top of the page.*/
function initFooter() {
    const footerBtn = document.getElementById('backToTop');
    if (footerBtn) {
        footerBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
/* This code specifically waits for the browser to finish loading, 
then specifically runs the star background and specifically loads
 every section of the site (Navbar, Hero, Team, etc.) into its
  proper place before specifically starting the scroll animations. */
document.addEventListener('DOMContentLoaded', async () => {
    initParticles();

    
    await loadComponent('navbar-placeholder', 'components/navbar.html', initMenu);
    await loadComponent('hero-placeholder', 'components/hero.html');
    await loadComponent('about-placeholder', 'components/about.html');
    await loadComponent('work-placeholder', 'components/work.html');
    await loadComponent('team-placeholder', 'components/team.html');
    await loadComponent('contacts-placeholder', 'components/contacts.html');
    await loadComponent('faq-placeholder', 'components/faq.html', initFAQ);
    
    
    await loadComponent('footer-placeholder', 'components/footer.html', initFooter);

    
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 50, disable: 'mobile' });
        AOS.refresh(); 
        setTimeout(() => { AOS.refresh(); }, 400); 
    }
});

/*This code specifically watches for when a user
 views the page—even if they just clicked the 'Back'
  button—and specifically clears any text inside the 
  contact form so it’s fresh and ready to use again. */
window.addEventListener('pageshow', (event) => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.reset();
});