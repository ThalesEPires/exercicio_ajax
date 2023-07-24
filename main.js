// criando as variáveis
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositorioElement = document.querySelector('#repositorio');
    const followersElement = document.querySelector('#seguidores');
    const followingElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector ('#link')

// Criando API para buscar os dados
    fetch('https://api.github.com/users/ThalesEPires') 
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repositorios.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})