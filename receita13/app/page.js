export default function Home() {
    return (
        <div>
            <div>Menu Principal</div>
            <div>
                <h1>Viva Santana!</h1>
            </div>
        </div>
    )
}

export function Title({title}) {
    return (
        <h1>{title}</h1>
    )
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