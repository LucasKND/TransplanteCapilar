// Script para a seção Sobre o Médico

document.addEventListener('DOMContentLoaded', function() {
    // Animação de números crescentes para os indicadores
    const indicadores = document.querySelectorAll('.sobre-indicador h5');
    const sobreSection = document.querySelector('.sobre');
    
    // Função para animar o contador
    function animarContador(elemento, valorFinal, duracao) {
        let valorAtual = 0;
        const incremento = valorFinal / (duracao / 16); // 16ms é aproximadamente 60fps
        
        const timer = setInterval(() => {
            valorAtual += incremento;
            
            if (valorAtual >= valorFinal) {
                elemento.textContent = valorFinal.toString().includes('.') 
                    ? valorFinal.toFixed(1) 
                    : valorFinal;
                clearInterval(timer);
            } else {
                elemento.textContent = Math.floor(valorAtual).toString();
            }
        }, 16);
    }
    
    // Observer para iniciar a animação quando a seção estiver visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                indicadores.forEach(indicador => {
                    const valorFinal = parseInt(indicador.getAttribute('data-valor'), 10);
                    animarContador(indicador, valorFinal, 1500); // 1.5 segundos de duração
                });
                
                // Desconectar o observer após a animação
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 }); // Iniciar a animação quando 30% da seção estiver visível
    
    if (sobreSection) {
        observer.observe(sobreSection);
    }
    
    // Animação de fade-in para os elementos da seção
    const elementos = document.querySelectorAll('.sobre-conteudo, .sobre-foto');
    
    elementos.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    const observerFade = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Desconectar para este elemento específico
                observerFade.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elementos.forEach(elemento => {
        observerFade.observe(elemento);
    });
});
