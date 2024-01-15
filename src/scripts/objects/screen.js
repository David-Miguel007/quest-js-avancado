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

                        let repositoriesItens = '';
                        user.repositories.forEach((repo, index) => {
                            const languageRepo = Object.keys(user.languages[index])[0]


                            repositoriesItens += `<li>
                                <div class="repositories-itens">
                                    <a href="${repo.html_url}" target="_blank">
                                        <span>${repo.name}</span>
                                        <ul>
                                            <li>🍴 ${repo.forks}</li>
                                            <li>⭐ ${repo.stargazers_count}</li>
                                            <li>👀 ${repo.watchers}</li>
                                            <li>${languageRepo ? languageRepo : "Sem Lingaguem"}</li>
                                        </ul>
                                    </a>
                                </div>
                            </li>`;
                        });                                                            

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ""

        user.events.forEach(events => eventsItens += `<li><h2>${events.actor.login}</h2><p>- ${events.type==='PushEvent'?events.payload.commits[0].message:events.type}</p></li>`)
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                                <h1>Events</h1>
                                                                <div>
                                                                <ul>${eventsItens}</ul>
                                                                </div>
                                                            </div>`
        }
        if(user.events.length === 0){
            this.userProfile.innerHTML += `<h1 class="none">Sem Eventos</h1>`
        }
    }                                     

}

export { screen }