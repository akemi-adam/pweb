'use client'

'use client';

import { useState } from 'react'
import { MovieList, MovieForm } from './../movies/components'
import { searchMovies } from '../actions/movieActions';

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [founded, setFounded] = useState(true)

    const action = async (formData) => {
        try {
            const data = await searchMovies(formData)
            setMovies(data.Search || [])
            setFounded(data.Response !== 'False')
        } catch (error) {
            console.log(error)
            setFounded(false)
        }
    }

    return (
        <div className='flex flex-col gap-y-8 mb-10'>
            <h2 className='text-center text-[2em] font-semibold pt-8'>Procurar filme</h2>
            <div className='w-96 flex flex-col gap-y-4 mx-auto'>
                <div className='border rounded-md p-4'>
                    <MovieForm action={action} />
                </div>
                <div className='border rounded-md p-4'>
                    {founded ? <MovieList movies={movies} /> : <div className='border rounded-md border-red-700 bg-red-200 p-2 text-center'>Nenhum filme encontrado!</div>}
                </div>
            </div>
        </div>
    )
}