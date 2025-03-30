'use client';

import { useState } from 'react'
import { MovieList, MovieForm } from './components'

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [founded, setFounded] = useState(true)

    const action = async (formData) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${formData.get('titleSearchKey')}&type=${formData.get('type')}`)
            const data = await response.json()
            setMovies(data.Search || [])
            setFounded(data.Response !== 'False')
        } catch (error) {
            console.log(error)
            setFounded(false)
        }
    }

    return (
        <div>
            <h2>Procurar filme</h2>
            <MovieForm action={action} />
            <h2>Lista de filmes</h2>
            {founded ? <MovieList movies={movies} /> : <p>Nenhum filme encontrado</p>}
        </div>
    )
}