// Script para a seção Bônus

document.addEventListener('DOMContentLoaded', function() {
    // Animação ao scrollar para os cards de bônus
    const bonusCards = document.querySelectorAll('.bonus-card');
    
    // Função para verificar se elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Função para animar os cards quando estiverem visíveis
    function animateCards() {
        bonusCards.forEach((card, index) => {
            if (isElementInViewport(card) && !card.classList.contains('animate-visible')) {
                // Aplicar atraso escalonado para cada card
                setTimeout(() => {
                    card.classList.add('animate-visible');
                }, index * 200); // 200ms de atraso entre cada card
            }
        });
    }
    
    // Verificar no carregamento da página
    animateCards();
      // Verificar durante o scroll
    window.addEventListener('scroll', animateCards);
    
    // Nota: Modal para captura de e-mail foi removido - botões agora direcionam direto para WhatsApp
    // Os botões .btn-baixar agora funcionam como links normais para WhatsApp
});
