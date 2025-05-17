// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        
        pergunta.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('ativo');
                }
            });
            
            // Toggle current item
            item.classList.toggle('ativo');
        });
    });
});
