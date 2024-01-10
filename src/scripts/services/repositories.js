import { baseurl, repositoriesQuantity } from '/src/scripts/variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseurl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}
console.log(getRepositories('cadudias'))
export {getRepositories}