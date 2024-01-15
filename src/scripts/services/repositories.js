import { baseurl, repositoriesQuantity } from '../variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseurl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}
export {getRepositories}