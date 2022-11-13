const CrudOs = require('../persistencia/crud_os');

async function fazerVistoria(OS) {
    console.log("\nIniciando vistoria do veículo.")

    let statusVistoria = false

    if (OS) {
        statusVistoria = await CrudOs.buscar_campo_os(OS, 'vistoria')
    } else {
        throw { mensagem: "Erro ao verificar Vistoria." }
    }

    if (statusVistoria) {
        console.log(">> Veículo está liberado!")
        return true
    }

    if (OS) {
        await CrudOs.atualizar_os(OS, 'vistoria', true)
        OS.setEtapa('vistoria')
    } else {
        throw { mensagem: "Erro ao atualizar Vistoria." }
    }

    console.log(">> Veículo danificado. Encaminhando carro para oficina. >>\n")
    return false
}

async function desmontar(OS) {
    console.log("Etapa 1: Desmontagem do veículo")

    let statusDesmontagem = false

    if (OS) {
        statusDesmontagem = await CrudOs.buscar_campo_os(OS, 'desmontagem')
    } else {
        throw { mensagem: "Erro ao verificar Desmontagem." }
    }

    if (statusDesmontagem) {
        console.log(">> Desmontagem já havia sido realizada!")
        return true
    }

    if (OS) {
        await CrudOs.atualizar_os(OS, 'desmontagem', true)
        OS.setEtapa('desmontagem')
    } else {
        throw { mensagem: "Erro ao atualizar Desmontagem." }
    }

    console.log(">> Desmontagem concluída!")
}

function ordemCompra() {
    console.log("Veículo necessita troca de peças. Realizando ordem de compra.")
    console.log(">> Compra concluída!")
}

async function funilaria(OS) {
    console.log("Realizando Funilaria do veículo.")

    let statusFunilaria = false

    if (OS) {
        statusFunilaria = await CrudOs.buscar_campo_os(OS, 'funilaria')
    } else {
        throw { mensagem: "Erro ao verificar Funilaria." }
    }

    if (statusFunilaria) {
        console.log(">> Funilaria já havia sido realizada!")
        return true
    }

    if (OS) {
        await CrudOs.atualizar_os(OS, 'funilaria', true)
        OS.setEtapa('funilaria')
    } else {
        throw { mensagem: "Erro ao atualizar Funilaria." }
    }

    console.log(">> Funilaria concluída!")
}

async function montar(OS) {
    console.log("Etapa 4: Montagem do veículo")

    let statusMontagem = false

    if (OS) {
        statusMontagem = await CrudOs.buscar_campo_os(OS, 'montagem')
    } else {
        throw { mensagem: "Erro ao verificar Montagem." }
    }

    if (statusMontagem) {
        console.log(">> Montagem já havia sido realizada!")
        return true
    }

    if (OS) {
        await CrudOs.atualizar_os(OS, 'montagem', true)
        OS.setEtapa('montagem')
    } else {
        throw { mensagem: "Erro ao atualizar Montagem." }
    }

    console.log(">> Montagem concluída!")
}

async function acabar(OS) {
    console.log("Etapa 5: Acabamento do veículo")

    let statusAcabamento = false

    if (OS) {
        statusAcabamento = await CrudOs.buscar_campo_os(OS, 'acabamento')
    } else {
        throw { mensagem: "Erro ao verificar Acabamento." }
    }

    if (statusAcabamento) {
        console.log(">> Acabamento já havia sido realizada!")
        return true
    }

    if (OS) {
        await CrudOs.atualizar_os(OS, 'acabamento', true)
        OS.setEtapa('acabamento')
    } else {
        throw { mensagem: "Erro ao atualizar Acabamento." }
    }

    console.log(">> Acabamento concluída!")
}

module.exports = { fazerVistoria, desmontar, ordemCompra, funilaria, montar, acabar }