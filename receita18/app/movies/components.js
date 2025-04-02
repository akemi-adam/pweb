import Form from 'next/form'
import { useState } from 'react'


export function MovieForm({gambiarra}) {
    // const [buttonStatus, setButtonStatus] = useState(false)
    console.log('FORM')

    const types = [
        {value: 'movie', label: 'Filme'},
        {value: 'series', label: 'Série'},
        {value: 'episode', label: 'Episódio'},
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setButtonStatus(true)
        await gambiarra.action(new FormData(e.currentTarget))
        // setButtonStatus(false)
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
            <button type='submit' className='border rounded-md border-green-700 bg-green-200 py-2'>
                Pesquisar
            </button>
        </Form>
    )
}

export function MovieList({gambiarra}) {
    console.log('LISTA')
    const [movies, setMovies] = useState([])
    const [founded, setFounded] = useState(true)

    gambiarra.action = async (formData) => {
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
        <div className='flex flex-col gap-y-10 overflow-y-scroll h-96'>
            {founded
                ? movies.map(movie =>
                    <div key={movie.imdbID} className='flex flex-col gap-y-2'>
                        <div className='flex justify-between text-xl'>
                            <span>{movie.Title}</span>
                            <span>{movie.Year}</span>
                        </div>
                        <img src={movie.Poster} alt={`${movie.Title} poster`} className='rounded-md' />
                    </div>
                )
                : <div className='border rounded-md border-red-700 bg-red-200 p-2'>Nenhum filme encontrado!</div>
            }
        </div>
    )
}