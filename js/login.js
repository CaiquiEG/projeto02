document.querySelector('.entry').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Preencha corretamente todos os campos do login.');
        return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.senha === password) {
        window.location.href = "home-page.html";
    } else {
        alert('Login ou senha incorretos.');
    }
});
