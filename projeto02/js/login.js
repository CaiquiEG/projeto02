document.querySelector('.entry').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('input[placeholder="Digite seu e-mail"]').value.trim();
    const senha = document.querySelector('input[placeholder="Digite sua senha"]').value.trim();

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    console.log('E-mail:', email);
    console.log('Senha:', senha);

    alert('Login realizado com sucesso!');
});
