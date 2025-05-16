// Script principal para toda a página

document.addEventListener('DOMContentLoaded', function() {
    // Iniciar todas as animações nos elementos visíveis
    initAnimations();
    
    // Botão de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            // Se o botão já tiver um href com wa.me, a navegação acontecerá automaticamente
            // Este evento é para adicionar análises ou outras funcionalidades
            console.log('WhatsApp button clicked');
        });
    }
    
    // Detectar quando elementos entram no viewport para animações
    window.addEventListener('scroll', function() {
        initAnimations();
    });
});

// Função para inicializar animações em elementos quando estiverem visíveis
function initAnimations() {
    const animateElements = document.querySelectorAll('.animate-fade-in');
    
    animateElements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('animated')) {
            element.classList.add('animated');
            element.style.opacity = '1';
        }
    });
}

// Função para verificar se um elemento está no viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}