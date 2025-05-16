// Script para a seção Formulário de Contato

document.addEventListener('DOMContentLoaded', function() {
    const formularioContato = document.getElementById('formulario-contato');
    const contatoAgradecimento = document.getElementById('contato-agradecimento');
    
    if (formularioContato) {
        formularioContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui seria implementada a lógica de envio do formulário para um backend
            // Por exemplo, usando fetch para enviar os dados para um servidor
            
            // Simulação de envio bem-sucedido
            formularioContato.style.display = 'none';
            
            if (contatoAgradecimento) {
                contatoAgradecimento.classList.add('ativo');
            }
            
            // Reset do formulário
            formularioContato.reset();
            
            // Se quiser restaurar o formulário depois de um tempo
            setTimeout(function() {
                formularioContato.style.display = 'flex';
                if (contatoAgradecimento) {
                    contatoAgradecimento.classList.remove('ativo');
                }
            }, 5000); // Mostra mensagem por 5 segundos
        });
    }
    
    // Validação básica do formulário
    const camposObrigatorios = document.querySelectorAll('[required]');
    
    if (camposObrigatorios.length) {
        camposObrigatorios.forEach(campo => {
            campo.addEventListener('invalid', function(e) {
                e.preventDefault();
                this.classList.add('campo-invalido');
            });
            
            campo.addEventListener('input', function() {
                this.classList.remove('campo-invalido');
            });
        });
    }
});
