import Form from 'next/form'


export function MovieForm({action}) {
    const types = [
        {value: 'movie', label: 'Filme'},
        {value: 'series', label: 'Série'},
        {value: 'episode', label: 'Episódio'},
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        action(new FormData(e.currentTarget))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor='idTitleSearchKey'>Título</label>
            <input name='titleSearchKey' id="titleSearchKey" />
            <label htmlFor='type'>Tipo</label>
            <select name='type' id='type'>
                {types.map((type, index) => <option value={type.value} key={index}>{type.label}</option>)}
            </select>
            <button type='submit'>
                Pesquisar
            </button>
        </Form>
    )
}

export function MovieList({movies}) {
    return (
        <ul>
            {movies.map(movie => <li key={movie.imdbID}>
                <img src={movie.Poster} alt="" />
                {movie.Title} --- {movie.Year}
            </li>)}
        </ul>
    )
}