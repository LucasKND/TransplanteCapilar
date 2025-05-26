document.addEventListener('DOMContentLoaded', function() {
    // Captura os elementos do vídeo
    const videoOverlay = document.getElementById('video-overlay');
    const videoElement = document.getElementById('transplante-video');
    
    if (videoOverlay && videoElement) {
        // Adiciona o evento de clique no overlay
        videoOverlay.addEventListener('click', function() {
            // Inicia a reprodução do vídeo
            videoElement.play()
                .then(() => {
                    // Esconde o overlay quando o vídeo começar a ser reproduzido
                    videoOverlay.style.display = 'none';
                })
                .catch(error => {
                    console.error('Erro ao reproduzir o vídeo:', error);
                });
        });

        // Adiciona evento para mostrar o overlay quando o vídeo parar
        videoElement.addEventListener('pause', function() {
            videoOverlay.style.display = 'flex';
        });

        // Adiciona evento para mostrar o overlay quando o vídeo terminar
        videoElement.addEventListener('ended', function() {
            videoOverlay.style.display = 'flex';
        });
    }
});
