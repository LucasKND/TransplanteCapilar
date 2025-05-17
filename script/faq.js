// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        
        pergunta.addEventListener('click', () => {
            const isActive = item.classList.contains('ativo');
            
            // Close all items first
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('ativo');
            });
            
            // Toggle current item only if it wasn't active before
            if (!isActive) {
                item.classList.add('ativo');
                
                // Scroll to the item if not in view (with a small offset)
                const rect = item.getBoundingClientRect();
                const isInView = (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
                
                if (!isInView) {
                    setTimeout(() => {
                        const offset = 100; // Pixels from the top
                        const top = item.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }, 100);
                }
            }
        });
    });
});
