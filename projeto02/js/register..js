document.querySelector('.entry').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const nome = document.querySelector('input[placeholder="Digite seu nome"]').value.trim();
    const email = document.querySelector('input[placeholder="Digite seu e-mail"]').value.trim();
    const senha = document.querySelector('input[placeholder="Digite sua senha"]').value.trim();

    const favoritos = [];
    document.querySelectorAll('.favorites input[type="checkbox"]').forEach((checkbox) => {
        if (checkbox.checked) {
            favoritos.push(checkbox.nextElementSibling.textContent); 
        }
    });

    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
    console.log('Animes Favoritos:', favoritos);

    alert('Cadastro realizado com sucesso!');
});
