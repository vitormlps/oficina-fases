
function fazerVistoria(OS) {
    console.log("\nIniciando vistoria do veículo.")

    if (OS.statusEtapa('Vistoria')) {
        console.log(">> Veículo está liberado!")
        return true
    }

    OS.setEtapa('Vistoria')

    console.log(">> Veículo danificado. Encaminhando carro para oficina. >>\n")

    return false
}

function desmontar(OS) {
    console.log("Etapa 1: Desmontagem do veículo")

    OS.setEtapa('Desmontagem')

    console.log(">> Desmontagem concluída!")
}

function ordemCompra() {
    console.log("Veículo necessita troca de peças. Realizando ordem de compra.")

    //time wait 2s

    console.log(">> Compra concluída!")
}

function funilaria(OS) {
    console.log("Realizando funilaria do veículo.")

    //time wait 2s
    OS.setEtapa('Funilaria')

    console.log(">> Funilaria concluída!")
}

function preparar(OS) {
    console.log("Etapa 2: Preparação do veículo")

    OS.setEtapa('Preparacao')

    console.log(">> Preparação concluída!")
}

function pintar(OS) {
    console.log("Etapa 3: Pintura do veículo")

    OS.setEtapa('Pintura')

    console.log(">> Pintura concluída!")
}

function montar(OS) {
    console.log("Etapa 4: Montagem do veículo")

    OS.setEtapa('Montagem')

    console.log(">> Montagem concluída!")
}

function acabar(OS) {
    console.log("Etapa 5: Acabamento do veículo")

    OS.setEtapa('Acabamento')

    console.log(">> Acabamento concluída!")
}

module.exports = { fazerVistoria, desmontar, ordemCompra, funilaria, preparar, pintar, montar, acabar }