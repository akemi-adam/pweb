'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get('titleSearchKey')

    if (!titleSearchKey || titleSearchKey === '') return {Search: []}

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${formData.get('titleSearchKey')}&type=${formData.get('type')}`)
        const json = await response.json()
        return json
    } catch (error) {
        return {error: `Erro na requisição: ${error}`}
    }
}