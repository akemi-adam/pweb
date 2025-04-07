import Link from 'next/link'

export default async function Home() {
    return (
        <div>
            <div>
                <h1>Viva Santana!</h1>
                <ul className='text-blue-500 underline'>
                    <li><Link href='/rota1'>Rota 1</Link></li>
                    <li><Link href='/novarota'>Nova rota</Link></li>
                    <li><Link href='/rota1/teste'>Sub rota da rota 1</Link></li>
                    <li><Link href='/movies'>Procurar filme</Link></li>
                </ul>
            </div>
        </div>
    )
}

export function Title({title}) {
    return <h1>{title}</h1>
}

export function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Akemi Adam</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Isadora</td>
                    <td>20</td>
                </tr>
            </tbody>
        </table>
    )
}