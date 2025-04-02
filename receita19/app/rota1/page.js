'use client';

import { Table, Title } from "../page"
import { useState } from 'react'

export default function FirstRoute() {
    const [times, setTimes] = useState([])

    const fetchTimes = async () => {

    }

    return (
        <div>
            <Title title='Dúvida'/>
            <p>
                Estou misturando inglês com português, o que é algo meio ruim, mas pior do que isso, não é ter que criar tantos arquivos com o mesmo nome? Cada rota que eu for fazer vai ter que se chamar page.js? Não acho bom, principalmente quando o projeto crescer muito.
            </p>
            <Table />
        </div>
    )
}