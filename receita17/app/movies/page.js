'use client';

import { useState } from 'react'
import { MovieList, MovieForm } from './components'

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <div>
            <h2>Procurar filme</h2>
            <MovieForm setMovies={(movies) => setMovies(movies)} setLoading={(status) => setLoading(status)} />
            <h2>Lista de filmes</h2>
            {loading ? <p>Nenhum filme encontrado</p> : <MovieList movies={movies} />}
        </div>
    )
}