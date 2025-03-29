const loadTable = (cs, headers = ['Nome', 'Álcool', 'Estilo', 'Amargor'], properties = ['name', 'alcohol', 'style', 'ibu'], id = 'cervejasTable') => {
    const table = document.getElementById(id)

    const rows = cs.map(item => `<tr>
        ${properties.map(property => `<td>${item[property]}</td>`).join(`\n`)}
    </tr>`)

    table.innerHTML = `<tr>${headers.map(header => `<th>${header}</th>`).join(`\n`)}</tr>`
    
    table.innerHTML += `${rows.join("\n")}`
}

async function carregarCervejas() {
    try {
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
        const cervejas = await res.json()
        loadTable(cervejas, ['Nome', 'Álchool', 'Brand', 'Ano'], ['name', 'alcohol', 'brand', 'yeast'])
    } catch (err) {
        document.getElementById("cervejasDiv").innerHTML = "Fudeu..."
    }
}

const botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas())