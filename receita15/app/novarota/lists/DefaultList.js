export default function DefaultList({items}) {
    return (
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}