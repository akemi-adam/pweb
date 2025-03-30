import FirstRoute from '../../../receita13/app/rota1/page'
import { MariaPrea } from './components'
import DefaultList from './lists/DefaultList'


export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea />
            <DefaultList />
            <FirstRoute />
        </div>
    )
}