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
    
    // Modal para captura de e-mail
    const botoesBaixar = document.querySelectorAll('.btn-baixar');
    const formularioOverlay = document.getElementById('formulario-overlay');
    const formularioFechar = document.getElementById('formulario-fechar');
    const formulario = document.getElementById('formulario-bonus');
    
    if (botoesBaixar.length && formularioOverlay) {
        botoesBaixar.forEach(botao => {
            botao.addEventListener('click', function(e) {
                e.preventDefault();
                formularioOverlay.style.display = 'flex';
                
                // Animar entrada do formulário
                setTimeout(() => {
                    formularioOverlay.style.opacity = '1';
                    formulario.style.transform = 'translateY(0)';
                }, 10);
            });
        });
        
        // Fechar o modal
        if (formularioFechar) {
            formularioFechar.addEventListener('click', function() {
                formularioOverlay.style.opacity = '0';
                formulario.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    formularioOverlay.style.display = 'none';
                }, 300);
            });
        }
        
        // Clicar fora do formulário também fecha
        formularioOverlay.addEventListener('click', function(e) {
            if (e.target === formularioOverlay) {
                formularioFechar.click();
            }
        });
    }
});
