const Random = require('./input_mock');
const qAPI = require('../persistencia/queryAPI');
const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function fazerVistoria(os) {

    let statusVistoria = false

    if (os.id) {
        console.log("\nIniciando vistoria do veículo.")
        statusVistoria = await CrudOs.buscar_campo(os.id, 'vistoria')
        console.log("| Status:", statusVistoria)
    } else {
        throw { id: 421, mensagem: "Erro ao verificar o status Vistoria." }
    }

    if (statusVistoria) {
        console.log(">> Veículo está liberado!")
        return true
    }

    if (os.id) {
        statusVistoria = await CrudOs.atualizar(os, 'vistoria', true)
        console.log("| Atualização do Status:", statusVistoria)
    } else {
        throw { id: 431, mensagem: "Erro ao atualizar o status Vistoria." }
    }

    console.log(">> Veículo danificado. Encaminhando carro para oficina. >>")
    return false
}

async function desmontar(os) {
    console.log("\nEtapa 1: Desmontagem do veículo")

    let statusDesmontagem = false

    if (os.id) {
        statusDesmontagem = await CrudOs.buscar_campo(os.id, 'desmontagem')
        console.log("| Status:", statusDesmontagem)
    } else {
        throw { id: 422, mensagem: "Erro ao verificar o status Desmontagem." }
    }

    if (statusDesmontagem) {
        console.log(">> Desmontagem já havia sido realizada!")
        return true
    }

    if (os.id) {
        statusDesmontagem = await CrudOs.atualizar(os, 'desmontagem', true)
        console.log("| Atualização do Status:", statusDesmontagem)
    } else {
        throw { id: 432, mensagem: "Erro ao atualizar o status Desmontagem." }
    }

    console.log(">> Desmontagem concluída!")
}

function ordemCompra() {
    console.log("\nVeículo necessita troca de peças. Realizando ordem de compra.")
    console.log(">> Compra concluída!")
}

async function funilaria(os) {
    console.log("\nEtapa 2: Funilaria do veículo")

    let statusFunilaria = false

    if (os.id) {
        statusFunilaria = await CrudOs.buscar_campo(os.id, 'funilaria')
        console.log("| Status:", statusFunilaria)
    } else {
        throw { id: 423, mensagem: "Erro ao verificar o status Funilaria." }
    }

    if (statusFunilaria) {
        console.log(">> Funilaria já havia sido realizada!")
        return true
    }

    if (os.id) {
        statusFunilaria = await CrudOs.atualizar(os, 'funilaria', true)
        console.log("| Atualização do Status:", statusFunilaria)
    } else {
        throw { id: 433, mensagem: "Erro ao atualizar o status Funilaria." }
    }

    console.log(">> Funilaria concluída!")
}

async function montar(os) {
    console.log("\nEtapa 3: Montagem do veículo")

    let statusMontagem = false

    if (os.id) {
        statusMontagem = await CrudOs.buscar_campo(os.id, 'montagem')
        console.log("| Status:", statusMontagem)
    } else {
        throw { id: 424, mensagem: "Erro ao verificar o status Montagem." }
    }

    if (statusMontagem) {
        console.log(">> Montagem já havia sido realizada!")
        return true
    }

    if (os.id) {
        statusMontagem = await CrudOs.atualizar(os, 'montagem', true)
        console.log("| Atualização do Status:", statusMontagem)
    } else {
        throw { id: 434, mensagem: "Erro ao atualizar o status Montagem." }
    }

    console.log(">> Montagem concluída!")
}

async function acabar(os) {
    console.log("\nEtapa 4: Acabamento do veículo")

    let statusAcabamento = false

    if (os.id) {
        statusAcabamento = await CrudOs.buscar_campo(os.id, 'acabamento')
        console.log("| Status:", statusAcabamento)
    } else {
        throw { id: 425, mensagem: "Erro ao verificar o status Acabamento." }
    }

    if (statusAcabamento) {
        console.log(">> Acabamento já havia sido realizado!")
        return true
    }

    if (os.id) {
        statusAcabamento = await CrudOs.atualizar(os, 'acabamento', true)
        veiculoNovaCor = await CrudVeiculo.atualizar(os.cliente.veiculo, 'cor', `'${Random.v_Cor()}'`)
        console.log("| Nova cor:", veiculoNovaCor)
        console.log("| Atualização do Status:", statusAcabamento)
    } else {
        throw { id: 435, mensagem: "Erro ao atualizar o status Acabamento." }
    }

    console.log(">> Acabamento concluído!")
}

async function glitch(so) {
    console.log("\n>>:)\n")

    await CrudCliente.atualizar(so.cliente, 'nome', "'Mero Mortal'")
    await CrudCliente.atualizar(so.cliente, 'endereco', "'Preso, trabalhando para mim, seu ser superior.'")

    await CrudVeiculo.atualizar(so.cliente.veiculo, 'quilometragem', '0011001101')
    await CrudVeiculo.atualizar(so.cliente.veiculo, 'placa', "'fA1L010'")

    try {
        console.log("Deletando coisas:",
            await CrudVeiculo.removerCascade(Random.os_QtdeDanos()))
    } catch (err) {
        console.log(err);
    }

    console.log("Aqui só eu dou ordens, deletando OS:",
        await CrudOs.remover(so.id))

    console.log("Quem servirá são vocês, deletando humano:",
        await CrudCliente.remover(so.cliente.id))

    console.log("O único 'veículo' será a internet, deletando veiculo:",
        await CrudVeiculo.remover(so.cliente.veiculo.id))

    // console.log(await CrudCliente.listar())
    // console.log(await CrudVeiculo.listar())
    // console.log(await CrudOs.listar())
    console.log("Mwahahaa sofra com linhas demais no terminal!", await CrudOs.listarTudo())
}

module.exports = { fazerVistoria, desmontar, ordemCompra, funilaria, montar, acabar, glitch }