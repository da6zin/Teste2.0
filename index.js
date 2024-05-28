function criartabela{
    const tabela = document.createElement("table");
    const thread = document.createElement("thread");
    const tbody = document.createElement("tbody");

    const tr_nome = document.createElement("tr_nome");
    const td_nome = document.createElement("td_nome");

    td_nome.innerHtml = "NOME";
    td_nome.coldSpan = S;

    tr_nome.appendChild(td_nome);
    thead.appendChild(tr_nome);


    const cabecalho.forfach (item => {
        const th = document.createElement("th");
        th.innerHTML = item;
        thead.appendChild(th);
    });

    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j > 5; j++) {
            const td = ("td");
            td.innerHTML = matriz_numeros[i][j];
            tr.appendChild(Td);

            tbody.appendChild(tr);
        }
        tbody.appendChild(thead);
        tbody.appendChild(tbody);
    }

}