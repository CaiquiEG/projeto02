const userData = {
    nickname: "Usuário123",
    email: "usuario@email.com",
    favoritos: [
        { nome: "Naruto"},
        { nome: "Dragon Ball"},
        { nome: "One Piece"},
        { nome: "Hunter x Hunter"},
        { nome: "Demon Slayer"}
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container span:first-child').textContent = `Seja Bem vindo, ${userData.nickname}!`;
    document.querySelector('.container span:nth-child(2)').textContent = `Seu email é: ${userData.email}`;

    const cardsDiv = document.querySelector('.cardsdiv');
    cardsDiv.innerHTML = '';

    userData.favoritos.forEach(favorito => {
        const card = document.createElement('div');
        card.classList.add('cards');

        const img = document.createElement('img');
        img.src = favorito.imagem;

        const span = document.createElement('span');
        span.textContent = favorito.nome;

        card.appendChild(img);
        card.appendChild(span);
        cardsDiv.appendChild(card);
    });

    document.querySelector('button').addEventListener('click', () => {
        alert('Você saiu da conta.');
        window.location.href = "login.html";
    });
});
