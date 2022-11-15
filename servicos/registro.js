const Random = require('./input_mock');
const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function registrarOS(novaOS, novoCliente) {
    console.log("\n... Finalizando registro da OS ...")

    novaOS.dataEntrada = Random.os_DataEntrada()
    novaOS.descricao = Random.os_Descricao()
    novaOS.quantidadeDanos = Random.os_QtdeDanos()
    novaOS.trocarPecas = Random.os_TrocarPecas()
    novaOS.fotos = Random.os_Fotos()
    novaOS.cliente = novoCliente

    if (novaOS) {
        novaOS = await CrudOs.registrar(novaOS)
        console.log(">> Registro da OS completa!")
        return novaOS

    } else {
        throw { id: 403, mensagem: "Erro ao registrar OS." }
    }
}

async function registrarCliente(novoCliente, novoVeiculo) {
    console.log("\n... Registrando informações do cliente ...")

    novoCliente.nome = Random.c_Nome()
    novoCliente.contato = Random.c_Contato()
    novoCliente.endereco = Random.c_Endereco()
    novoCliente.cpf = Random.c_Cpf()
    novoCliente.veiculo = novoVeiculo

    if (novoCliente) {
        novoCliente = await CrudCliente.registrar(novoCliente)
        console.log(">> Registro do cliente completo!")
        return novoCliente

    } else {
        throw { id: 402, mensagem: "Erro ao registrar o cliente." }
    }
}

async function registrarVeiculo(novoVeiculo) {
    console.log("\n... Registrando informações do veículo ...")

    novoVeiculo.setTipo(Random.v_Tipo())
    novoVeiculo.marca = Random.v_Marca()
    novoVeiculo.modelo = Random.v_Modelo()
    novoVeiculo.placa = Random.v_Placa()
    novoVeiculo.quilometragem = Random.v_Quilometragem()
    novoVeiculo.cor = Random.v_Cor()

    if (novoVeiculo) {
        novoVeiculo = await CrudVeiculo.registrar(novoVeiculo)
        console.log(">> Registro do veículo completo!")
        return novoVeiculo

    } else {
        throw { id: 401, mensagem: "Erro ao registrar o veículo." }
    }
}

module.exports = { registrarOS, registrarCliente, registrarVeiculo }