import Form from 'next/form'

export default async function name(params) {
    const types = [
        {value: 'movie', label: 'Filme'},
        {value: 'series', label: 'Série'},
        {value: 'episode', label: 'Episódio'},
    ]



    return (
        <Form action={'movies'}>
            <label htmlFor='idTitleSearchKey'>Título</label>
            <input name='titleSearchKey' id="titleSearchKey" />
            <label htmlFor='type'>Tipo</label>
            <select name='type' id='type'>
                {types.map((type, index) => <option value={type.value} key={index}>{type.label}</option>)}
            </select>
            <button type='submit'>
                Pesquisar
            </button>
        </Form>
    )
}