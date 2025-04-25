document.addEventListener('DOMContentLoaded', function() {
    // Verifica se estamos na página de login
    if (document.getElementById('loginForm')) {
        const loginForm = document.getElementById('loginForm');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de validação
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Simula um loading
                const btn = loginForm.querySelector('button');
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
                
                // Simula uma requisição ao servidor
                setTimeout(function() {
                    // Armazena o estado de login no localStorage
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userEmail', email);
                    
                    // Redireciona para a página de ofertas
                    window.location.href = 'ofertas.html';
                }, 1500);
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
    
    // Verifica se estamos na página de ofertas
    if (document.querySelector('.btn-logout')) {
        const btnLogout = document.querySelector('.btn-logout');
        
        // Verifica se o usuário está logado
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'index.html';
        }
        
        // Configura o logout
        btnLogout.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
        
        // Simula a funcionalidade de compra
        const buyButtons = document.querySelectorAll('.btn-comprar');
        buyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const bookTitle = this.closest('.oferta-info').querySelector('h3').textContent;
                alert(`Você adicionou "${bookTitle}" ao seu carrinho!`);
            });
        });
    }
});