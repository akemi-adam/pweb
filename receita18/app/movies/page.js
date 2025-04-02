'use client';

import { MovieList, MovieForm } from './components'

export default function Movies() {
    // const [founded, setFounded] = useState(true)
    console.log('PÁGINA')

    const gambiarra = {action: () => null}

    return (
        <div className='flex flex-col gap-y-8 mb-10'>
            <h2 className='text-center text-[2em] font-semibold pt-8'>Procurar filme</h2>
            <div className='w-96 flex flex-col gap-y-4 mx-auto'>
                <div className='border rounded-md p-4'>
                    {/* <MovieForm action={action} /> */}
                    <MovieForm gambiarra={gambiarra} />
                </div>
                <div className='border rounded-md p-4'>
                    <MovieList gambiarra={gambiarra}  />
                    {/* {founded ? <MovieList gambiarra={gambiarra}  /> : <div className='border rounded-md border-red-700 bg-red-200 p-2'>Nenhum filme encontrado!</div>} */}
                </div>
            </div>
        </div>
    )
}