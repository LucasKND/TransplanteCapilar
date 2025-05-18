// Script para a seção Antes e Depois

document.addEventListener('DOMContentLoaded', function() {
    // Configuração manual para o carrossel para evitar o comportamento de rolagem indesejado
    $(document).ready(function() {
        // Adicionando handlers específicos após o carregamento do Bootstrap
        $('.carousel-control-prev, .carousel-control-next').click(function(e) {
            // Impedir qualquer ação padrão que possa causar rolagem
            e.preventDefault();
            e.stopPropagation();
            
            // Determinar a direção e controlar o carrossel manualmente
            const direction = $(this).hasClass('carousel-control-prev') ? 'prev' : 'next';
            $('#carouselExampleIndicators').carousel(direction);
            
            // Retornar false para impedir qualquer comportamento adicional
            return false;
        });
        
        // Impedir que qualquer clique no carrossel cause rolagem
        $('#carouselExampleIndicators').click(function(e) {
            e.preventDefault();
        });
    });
    
    // Animação ao scrollar para os cards de resultados
    const resultadoCards = document.querySelectorAll('.resultado-card');
    
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
        resultadoCards.forEach((card, index) => {
            if (isElementInViewport(card) && !card.classList.contains('animate-visible')) {
                // Aplicar atraso escalonado para cada card
                setTimeout(() => {
                    card.classList.add('animate-visible');
                }, index * 150); // 150ms de atraso entre cada card
            }
        });
    }
    
    // Adiciona classe de animação em cascata aos cards
    resultadoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    });
    
    // Verificar no carregamento da página
    animateCards();
    
    // Verificar durante o scroll
    window.addEventListener('scroll', animateCards);
    
    // Alternância manual entre antes/depois com clique/toque para dispositivos móveis
    const resultadoImagens = document.querySelectorAll('.resultado-imagens');
    
    resultadoImagens.forEach(container => {
        container.addEventListener('click', function() {
            const antes = this.querySelector('.resultado-imagem.antes');
            const depois = this.querySelector('.resultado-imagem.depois');
            
            // Verifica qual imagem está visível e alterna
            if (window.getComputedStyle(antes).opacity > 0.5) {
                antes.style.opacity = '0';
                depois.style.opacity = '1';
            } else {
                antes.style.opacity = '1';
                depois.style.opacity = '0';
            }
        });
    });
});
