const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl} alt="foto perfil />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                <h4>${user.followers} seguidores ✔</h4>
                                <h4>${user.following} seguindo ✔</h4>
                            </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
        <div class="repositories-itens"> 
                                                                    <a href="${repo.html_url}"target="_blank">${repo.name}
                                                        
                                                                    <button class="forks">🍴 ${repo.forks}</button>
                                                                    <button class="stars">⭐ ${repo.stargazers_count}</button>
                                                                    <button class="watchers">👀 ${repo.watchers}</button>
                                                                    <button class="language">👨🏾‍💻 ${repo.language}</button>

                                                                    </a>
                                                                    </div>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ""

        user.events.forEach(event => eventsItens += `<li><h2>${event.actor.login}</h2><p>- ${event.type}</p></li>`)
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                                <h1>Events</h1>
                                                                <div>
                                                                <ul>${eventsItens}</ul>
                                                                </div>
                                                            </div>`
        }  
    }                                           

}

export { screen }