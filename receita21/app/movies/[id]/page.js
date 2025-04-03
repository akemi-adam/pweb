import React from 'react'
import { findMovieById, getMoviesByTitle, searchMovies } from '../../actions/movieActions'


export default async function MovieDetailPage({ params }) {
    const { id } = await params
    const movie = await findMovieById(id)

    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <img src={movie.Poster} alt={`${movie.Title} poster`} className='rounded-md' />
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
        </div>
    )
}

export async function generateStaticParams() {
    const movies = await getMoviesByTitle('red')
    
    return movies.Search.map(movie => ({id: movie.imdbID}))
}