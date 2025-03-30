import Form from 'next/form'
import { useEffect, useState } from 'react'


export function MovieForm({setMovies, setLoading}) {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')

    const types = [
        {value: 'movie', label: 'Filme'},
        {value: 'series', label: 'Série'},
        {value: 'episode', label: 'Episódio'},
    ]

    const fetchMovies = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${title}&type=${type}`)
            const data = await response.json()
            setMovies(data.Search)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const submit = async (e) => {
        e.preventDefault()
        await fetchMovies()
    }

    return (
        <Form action={'movies'} onSubmit={(e) => submit(e)}>
            <label htmlFor='idTitleSearchKey'>Título</label>
            <input name='titleSearchKey' id="titleSearchKey" onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor='type'>Tipo</label>
            <select name='type' id='type' onChange={(e) => setType(e.target.value)}>
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