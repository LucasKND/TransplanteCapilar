document.addEventListener('DOMContentLoaded', function() {
    // Script do Instagram é carregado assíncronamente, então precisamos verificar
    // se ele já foi carregado e, caso contrário, recarregá-lo manualmente
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    } else {
        // Se por algum motivo o script do Instagram não foi carregado
        const instagramScript = document.createElement('script');
        instagramScript.src = "//www.instagram.com/embed.js";
        instagramScript.async = true;
        document.body.appendChild(instagramScript);
    }
});
