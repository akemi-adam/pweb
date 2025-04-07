import { useState } from 'react'

import Form from 'next/form'
import Link from 'next/link'


export function MovieForm({action}) {
    const [buttonStatus, setButtonStatus] = useState(false)

    const types = [
        {value: 'movie', label: 'Filme'},
        {value: 'series', label: 'Série'},
        {value: 'episode', label: 'Episódio'},
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonStatus(true)
        await action(new FormData(e.currentTarget))
        setButtonStatus(false)
    }

    return (
        <Form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='idTitleSearchKey' className='text-xl'>Título</label>
                <input name='titleSearchKey' id="titleSearchKey" className='border rounded-md p-1'/>
                <label htmlFor='type' className='text-xl'>Tipo</label>
                <select name='type' id='type' className='rounded-md border py-1'>
                    {types.map((type, index) => <option value={type.value} key={index}>{type.label}</option>)}
                </select>
            </div>
            <button type='submit' disabled={buttonStatus} className='border rounded-md bg-green-500 py-2 text-white hover:bg-white hover:text-green-500 hover:border-green-500 cursor-pointer'>
                Pesquisar
            </button>
        </Form>
    )
}

export function Movie({movie: {Title, imdbID, Year, Poster}}) {
    return (
        <div key={imdbID} className='flex flex-col gap-y-2'>
            <div className='flex justify-between text-xl'>
                <Link href={`movies/${imdbID}`} className='hover:underline'>{Title}</Link>
                <span>{Year}</span>
            </div>
            <img src={Poster} alt={`${Title} poster`} className='rounded-md' />
        </div>
    )
}

export function MovieList({movies}) {
    return (
        <div className='flex flex-col gap-y-10 overflow-y-scroll h-96'>
            {movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
        </div>
    )
}