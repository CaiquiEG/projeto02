document.querySelector('.entry').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const favoritos = [];

    document.querySelectorAll('.favorites input[type="checkbox"]').forEach((checkbox) => {
        if (checkbox.checked) {
            favoritos.push(checkbox.value);
        }
    });

    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const newUser = {
        nome,
        email,
        senha,
        favoritos
    };

    localStorage.setItem('user', JSON.stringify(newUser));

    window.location.href = "login.html";
});
