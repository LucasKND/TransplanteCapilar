// Script para a seção Hero

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do Menu Hambúrguer
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuHamburguer && navLinks) {
        menuHamburguer.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuHamburguer.classList.toggle('active');
        });
    }
    
    // Fechar o menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links li a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuHamburguer.classList.remove('active');
            }
        });
    });
    
    // Efeito de rolagem suave para os links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajuste para a altura da navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Adicionar classe para animar elementos quando visíveis
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.classList.add('animate-fade-in');
    }
    
    if (heroImage) {
        heroImage.style.animationDelay = '0.3s';
        heroImage.classList.add('animate-fade-in');
    }
    
    // Efeito de scroll para a navbar (mudar estilo ao rolar)
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Ajuste de altura para mobile
    function adjustHeroHeight() {
        const hero = document.querySelector('.hero');
        if (hero) {
            // Em dispositivos móveis, ajustar altura para conteúdo
            if (window.innerWidth <= 767) {
                hero.style.height = 'auto';
                hero.style.minHeight = 'auto';
            } else {
                hero.style.minHeight = '100vh';
            }
        }
    }
    
    // Executar no carregamento e redimensionamento
    adjustHeroHeight();
    window.addEventListener('resize', adjustHeroHeight);
    
    // Sincronizar largura da imagem before/after com a imagem do doutor
    function syncImageWidths() {
        const doctorImage = document.querySelector('.hero-image img:first-child');
        const beforeAfterImage = document.querySelector('.hero-before-after');
        
        if (doctorImage && beforeAfterImage && window.innerWidth > 1024) {
            // Função para aplicar a largura
            function applyWidth() {
                const doctorWidth = doctorImage.offsetWidth;
                if (doctorWidth > 0) {
                    beforeAfterImage.style.width = doctorWidth + 'px';
                }
            }
            
            // Aguardar o carregamento da imagem do doutor se necessário
            if (doctorImage.complete && doctorImage.naturalWidth !== 0) {
                applyWidth();
            } else {
                doctorImage.addEventListener('load', applyWidth);
            }
            
            // Usar um pequeno delay para garantir que o layout esteja estabilizado
            setTimeout(applyWidth, 100);
        } else if (beforeAfterImage && window.innerWidth <= 1024) {
            // Reset width em dispositivos móveis
            beforeAfterImage.style.width = '';
        }
    }
    
    // Executar sincronização no carregamento e redimensionamento
    syncImageWidths();
    window.addEventListener('resize', syncImageWidths);
    window.addEventListener('load', syncImageWidths);
});

// Função para abrir WhatsApp com mensagem pré-definida
function openWhatsApp() {
    // Número de telefone com código do país (substitua pelo número correto)
    const phoneNumber = '4915788012551';
      // Mensagem pré-definida (deve ser codificada para URL)
    const message = encodeURIComponent('Hallo! Ich interessiere mich für uma Beratung zum Haarimplantat em Brasilien.');
    
    // Construir a URL do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Abrir em uma nova janela/aba
    window.open(whatsappUrl, '_blank');
}
