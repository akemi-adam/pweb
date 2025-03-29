const makeTable = (cs, headers, properties, id = 'cervejasTable') => {
    const table = document.getElementById(id)

    const rows = cs.map(item => `<tr>
        ${properties.map(property => `<td>${item[property]}</td>`).join(`\n`)}
    </tr>`)

    table.innerHTML = `<tr>${headers.map(header => `<th>${header}</th>`).join(`\n`)}</tr>`
    
    table.innerHTML += `${rows.join("\n")}`
}

function loadData(headers, properties, resource) {
    fetch(`https://random-data-api.com/api/v2/${resource}?size=5`).then(
        response => response.json()
    ).then(
        data => makeTable(data, headers, properties, 'content-table')
    ).catch(err => {
        console.error(err)
        document.getElementById("content-table").innerHTML = "Fudeu..."
    })
}

const botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => loadData(['Nome', 'Sobrenome', 'E-mail', 'Senha'], ['first_name', 'last_name', 'email', 'password'], 'users'))
// botao.addEventListener("click", () => loadData(['Nome', 'Álcool', 'Estilo', 'Amargor'], ['name', 'alcohol', 'style', 'ibu'], 'beers'))