// Script para a seção Jornada

document.addEventListener('DOMContentLoaded', function() {
    // Animação das etapas da jornada ao scrollar
    const jornadaEtapas = document.querySelectorAll('.jornada-etapa');
    const jornadaDestaque = document.querySelector('.jornada-destaque');
    
    // Função para verificar se elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Função para verificar e animar elementos visíveis
    function checkVisibility() {
        jornadaEtapas.forEach(etapa => {
            if (isElementInViewport(etapa) && !etapa.classList.contains('animate-visible')) {
                etapa.classList.add('animate-visible');
            }
        });
        
        if (jornadaDestaque && isElementInViewport(jornadaDestaque) && !jornadaDestaque.classList.contains('animate-visible')) {
            jornadaDestaque.classList.add('animate-visible');
        }
    }
    
    // Verificar visibilidade no carregamento da página
    checkVisibility();
      // Verificar visibilidade ao scrollar
    window.addEventListener('scroll', checkVisibility);
});
