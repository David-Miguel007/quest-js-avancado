import { baseurl} from '/src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseurl}/${userName}/events`)
    return await response.json()
}

export {getEvents}