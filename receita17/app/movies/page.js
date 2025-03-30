

export default async function Movies({searchParams}) {
    const {titleSearchKey = 'bagdad', type = 'movie'} = await searchParams
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${titleSearchKey}&type=${type}`)
    const data = await response.json()

    return (
        <div>
            <h2>Lista de filmes</h2>
            <ul>
                {data['Search'].map(movie => <li key={movie.imdbID}>
                    <img src={movie.Poster} alt="" />
                    {movie.Title} --- {movie.Year}
                </li>)}
            </ul>
        </div>
    )
}