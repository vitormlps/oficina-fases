const Random = require('../persistencia/input_mock');
const OrdemServico = require('../entidades/ordem_servico');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');
const qAPI = require('../persistencia/queryAPI');
const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function registrarOS() {
    console.log("Iniciando registro da Ordem de Serviço.")
    console.log("Buscando informações. ... Um momento, por favor...\n")

    let result = 0
    let novaOS = new OrdemServico()

    novaOS.dataEntrada = Random.os_DataEntrada()
    console.log('Data de Entrada:', novaOS.dataEntrada)

    novaOS.descricao = Random.os_Descricao()
    console.log("Descricao do sinistro:", novaOS.descricao)

    novaOS.quantidadeDanos = Random.os_QtdeDanos()
    console.log("Quantidade de danos:", novaOS.quantidadeDanos)

    novaOS.setTrocarPecas(Random.os_TrocarPecas())
    console.log("Trocar peças?", novaOS.trocarPecas ? 'Sim' : 'Não')

    novaOS.fotos = Random.os_Fotos()
    console.log("Fotos:", novaOS.fotos)

    try {
        await qAPI.queryBegin()
        novaOS.cliente = registrarCliente()
        await qAPI.queryCommit()
    } catch (err) {
        await qAPI.queryRollback()
        console.log(err)
    }

    if (novaOS) {
        result = await CrudOs.registrar_os(novaOS)
    } else {
        throw { mensagem: "Erro ao registrar OS." }
    }

    novaOS.id = result.id_os
    console.log("\n>> Registro da OS realizado!")
    return novaOS
}

async function registrarCliente() {
    console.log("\n... Registrando informações do cliente ...")

    let result = 0
    let novoCliente = new Cliente()

    novoCliente.nome = Random.c_Nome()
    console.log("Nome:", novoCliente.nome)

    novoCliente.contato = Random.c_Contato()
    console.log("Contato:", novoCliente.contato)

    novoCliente.endereco = Random.c_Endereco()
    console.log("Endereço:", novoCliente.endereco)

    novoCliente.cpf = Random.c_Cpf()
    console.log("CPF:", novoCliente.cpf)

    try {
        novoCliente.veiculo = await registrarVeiculo()
    } catch (err) {
        console.log(err)
    }

    if (novoCliente) {
        result = await CrudCliente.registrar_cliente(novoCliente)
    } else {
        throw "Erro ao registrar o cliente."
    }

    novoCliente.id = result.id_cliente
    console.log(">> Registro do cliente completo!\n")
    return novoCliente
}

async function registrarVeiculo() {
    console.log("\n... Registrando informações do veículo ...")

    let result = 0
    let novoVeiculo = new Veiculo()

    novoVeiculo.setTipo(Random.v_Tipo())
    console.log("Tipo:", novoVeiculo.getTipo())

    novoVeiculo.marca = Random.v_Marca()
    console.log("Marca:", novoVeiculo.marca)

    novoVeiculo.modelo = Random.v_Modelo()
    console.log("Modelo:", novoVeiculo.modelo)

    novoVeiculo.placa = Random.v_Placa()
    console.log("Placa:", novoVeiculo.placa)

    novoVeiculo.quilometragem = Random.v_Quilometragem()
    console.log("Quilometragem:", novoVeiculo.quilometragem, 'KM')

    novoVeiculo.cor = Random.v_Cor()
    console.log("Cor:", novoVeiculo.cor)

    if (novoVeiculo) {
        result = await CrudVeiculo.registrar_veiculo(novoVeiculo)
    } else {
        throw "Erro ao registrar o veículo."
    }

    novoVeiculo.id = result.id_veiculo
    console.log("\n>> Registro do veículo completo!")
    return novoVeiculo
}

module.exports = registrarOS