import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'
import { getEvents } from './services/events.js'
import { getLanguages } from './services/languages.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    const languagesResponse = await getLanguages(repositoriesResponse)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    user.setLanguages(languagesResponse)

    screen.renderUser(user)
}