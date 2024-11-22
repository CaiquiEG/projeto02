const storedUser = JSON.parse(localStorage.getItem('user'));

if (storedUser) {
    document.getElementById('welcome-message').innerText = `Seja Bem-vindo, ${storedUser.nome}!`;
    document.getElementById('user-email').innerText = `Seu email é: ${storedUser.email}`;

    const animeCards = document.getElementById('anime-cards');

    const animeImages = {
        "Naruto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQ_1XSZ351sAPx_Kln-LTbq1v2JZr2mLYbA&s",
        "Dragon Ball": "https://br.web.img2.acsta.net/pictures/22/11/22/14/02/3642167.jpg",
        "One Piece": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJljfD6iybWbxm4GikAyLJCW68vFue_IZlKQ&s",
        "Hunter x Hunter": "https://m.media-amazon.com/images/I/71aoeOhdNnL._AC_UF894,1000_QL80_.jpg",
        "Demon Slayer": "https://m.media-amazon.com/images/I/81kWkF-sbBL._AC_SL1500_.jpg"
    };

    const animeLinks = {
        "Naruto": "https://myanimelist.net/anime/20/Naruto",
        "Dragon Ball": "https://myanimelist.net/anime/223/Dragon_Ball?q=dragon%20ball&cat=anime",
        "One Piece": "https://myanimelist.net/anime/21/One_Piece?q=one%20piece&cat=anime",
        "Hunter x Hunter": "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011?q=hunter%20x%20hunter&cat=anime",
        "Demon Slayer": "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba?q=kimetsu&cat=anime"
    };

    storedUser.favoritos.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('cards');

        const img = document.createElement('img');
        img.src = animeImages[anime] || "https://via.placeholder.com/150";
        img.alt = anime;

        const span = document.createElement('span');
        span.innerText = anime;

        card.addEventListener('click', () => {
            const animeUrl = animeLinks[anime];
            if (animeUrl) {
                window.open(animeUrl, '_blank');
            } else {
                alert('Página do anime não encontrada.');
            }
        });

        card.appendChild(img);
        card.appendChild(span);
        animeCards.appendChild(card);
    });
} else {
    alert('Usuário não encontrado. Faça login.');
    window.location.href = "login.html";
}

document.getElementById('sair').addEventListener('click', function () {
    localStorage.removeItem('user');
    window.location.href = "login.html";
});