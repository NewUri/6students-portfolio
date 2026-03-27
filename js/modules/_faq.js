/* This function specifically manages the FAQ accordion: it opens the answer you click 
   and specifically closes all other open questions to keep the layout clean. */
export function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('i');

        button.addEventListener('click', () => {
            const isOpen = !answer.classList.contains('hidden');

            // This specifically closes all other answers first
            document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.faq-item i').forEach(el => el.classList.remove('rotate-180'));

            // This specifically opens the one you just clicked
            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });
}