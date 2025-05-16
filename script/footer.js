// Script para o Footer

document.addEventListener('DOMContentLoaded', function() {
    const footerNewsletterForm = document.getElementById('footer-newsletter-form');
    
    if (footerNewsletterForm) {
        footerNewsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = footerNewsletterForm.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';
            
            if (email && isValidEmail(email)) {
                // Aqui seria implementada a lógica para enviar o email para um sistema de newsletter
                // Por enquanto, apenas simulamos sucesso
                
                // Mostra mensagem de sucesso
                const successElement = document.getElementById('footer-newsletter-success');
                if (successElement) {
                    successElement.style.display = 'block';
                    
                    // Esconde após alguns segundos
                    setTimeout(function() {
                        successElement.style.display = 'none';
                    }, 5000);
                }
                
                // Limpa o campo
                if (emailInput) {
                    emailInput.value = '';
                }
            }
        });
    }
    
    // Função para validar email básica
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Animação suave para os links do footer
    const footerLinks = document.querySelectorAll('.footer-links a, .footer-links-base a');
    
    footerLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Compensar a navbar fixa
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});
