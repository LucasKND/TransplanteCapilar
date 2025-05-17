// Script para a seção Jornada

document.addEventListener('DOMContentLoaded', function() {
    // Animação das etapas da jornada ao scrollar
    const jornadaEtapas = document.querySelectorAll('.jornada-etapa');
    const jornadaDestaque = document.querySelector('.jornada-destaque');
    const jornadaImagens = document.querySelectorAll('.jornada-imagem');
    
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
    
    // Função para ajustar layout com base na largura da tela
    function adjustMobileLayout() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 991;
        const verySmallScreen = window.innerWidth <= 480;
        const indicadores = document.querySelectorAll('.jornada-indicador');
        const linha = document.querySelector('.jornada-linha');
        
        // Ajustar elementos dependendo do tamanho da tela
        if (isMobile) {
            // Ocultar imagens em dispositivos móveis
            jornadaImagens.forEach(img => {
                img.style.display = 'none';
            });
            
            // Ajustar posicionamento específico para mobile sem afetar desktop
            if (verySmallScreen) {
                // Ajustes específicos para telas muito pequenas
                indicadores.forEach(indicador => {
                    // Não definimos estilos inline aqui, deixamos o CSS cuidar disso
                    indicador.classList.add('mobile-indicator');
                    indicador.classList.add('very-small-screen');
                    indicador.classList.remove('tablet-indicator');
                });
            } else {
                // Ajustes para dispositivos móveis normais
                indicadores.forEach(indicador => {
                    indicador.classList.add('mobile-indicator');
                    indicador.classList.remove('very-small-screen');
                    indicador.classList.remove('tablet-indicator');
                });
            }
        }        // Ajustes específicos para tablets
        else if (isTablet) {
            // Exibir imagens em tablets, mas com ajustes específicos
            jornadaImagens.forEach(img => {
                img.style.display = 'block';
            });
            
            // Aplicar classe específica para tablets
            indicadores.forEach(indicador => {
                indicador.classList.add('tablet-indicator');
                indicador.classList.remove('mobile-indicator');
                indicador.classList.remove('very-small-screen');
            });
            
            // Garantir que a linha vertical esteja corretamente posicionada em tablets
            if (linha) {
                linha.style.height = '100%';
            }
            
            // Ajustar posicionamento das etapas para tablets
            jornadaEtapas.forEach((etapa, index) => {
                const indicador = etapa.querySelector('.jornada-indicador');
                if (indicador) {
                    // Garantir que o indicador esteja corretamente posicionado
                    indicador.style.zIndex = "10";
                }
            });
        } 
        else {
            // Restaurar para exibição desktop
            jornadaImagens.forEach(img => {
                img.style.display = 'block';
            });
            
            // Remover classes específicas de mobile e tablet
            indicadores.forEach(indicador => {
                indicador.classList.remove('mobile-indicator');
                indicador.classList.remove('very-small-screen');
                indicador.classList.remove('tablet-indicator');
            });
        }
    }
      // Função debounce para evitar múltiplas chamadas durante o redimensionamento
    function debounce(func, wait = 200) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
    
    // Executar quando a página carregar e quando redimensionar
    adjustMobileLayout();
    
    // Usar o debounce para evitar muitas chamadas durante o redimensionamento
    const debouncedAdjustLayout = debounce(adjustMobileLayout, 150);
    
    // Adicionar evento de redimensionamento
    window.addEventListener('resize', debouncedAdjustLayout);
      // Verificar e ajustar o layout também depois que todas as imagens forem carregadas
    window.addEventListener('load', adjustMobileLayout);
    
    // Adicionar uma verificação após um pequeno atraso para garantir que tudo carregue corretamente
    setTimeout(adjustMobileLayout, 500);
});
