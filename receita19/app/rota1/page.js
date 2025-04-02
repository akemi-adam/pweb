'use client';

import { Table, Title } from "../page"
import { useState } from 'react'

export default function FirstRoute() {
    const [times, setTimes] = useState([])

    const fetchTimes = async () => {
        const response = await fetch('api/times')
        const json = await response.json()
        setTimes(json)
    }

    return (
        <div>
            <Title title='Dúvida'/>
            <p>
                Estou misturando inglês com português, o que é algo meio ruim, mas pior do que isso, não é ter que criar tantos arquivos com o mesmo nome? Cada rota que eu for fazer vai ter que se chamar page.js? Não acho bom, principalmente quando o projeto crescer muito.
            </p>
            <div className="p-2 border rounded-2xl flex flex-col gap-y-4 w-42">
                {times.map((time, index) => <div key={index}>{time}</div>)}
            </div>
            <button onClick={fetchTimes} className="border rounded-md bg-green-500 py-2 text-white hover:bg-white hover:text-green-500 hover:border-green-500 cursor-pointer px-2">Carregar times</button>
            <Table />
        </div>
    )
}