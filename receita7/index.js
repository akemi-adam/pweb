const makeTable = (cs, headers, properties, id = 'cervejasTable') => {
    const table = document.getElementById(id)

    const rows = cs.map(item => `<tr>
        ${properties.map(property => `<td>${item[property]}</td>`).join(`\n`)}
    </tr>`)

    table.innerHTML = `<tr>${headers.map(header => `<th>${header}</th>`).join(`\n`)}</tr>`
    
    table.innerHTML += `${rows.join("\n")}`
}

async function loadData() {
    try {
        const res = await fetch("https://random-data-api.com/api/v2/users?size=5")
        const data = await res.json()
        makeTable(data, ['Nome', 'Sobrenome', 'E-mail', 'Senha'], ['first_name', 'last_name', 'email', 'password'], 'content-table')
    } catch (err) {
        console.error(err)
        document.getElementById("content-table").innerHTML = "Fudeu..."
    }
}

const botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => loadData())