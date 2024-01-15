async function getLanguages(repositories) {

    const endPoints = repositories.map(repositorie => `https://api.github.com/repos/${repositorie.full_name}/languages`)
    const result = await Promise.all(endPoints.map(async (url) => {
        const response = await fetch(url)
        const result = await response.json()
        return result
    }))

    return result
}

export { getLanguages }