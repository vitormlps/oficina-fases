const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');
const servico_verificacao = require('./verificacao');
const OrdemServico = require('../entidades/ordem_servico');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');

async function registrarOS(body) {

    if (body == null) {
        throw { id: 400, mensagem: `Erro ao registrar a OS: ${body}` }
    }

    let novaOS = new OrdemServico()
    novaOS.dataEntrada = body.dataEntrada
    novaOS.descricao = body.descricao
    novaOS.quantidadeDanos = body.quantidadeDanos
    novaOS.trocarPecas = body.trocarPecas
    novaOS.fotos = body.fotos
    novaOS.cliente = await CrudCliente.buscarUltimoRegistro()

    if (await servico_verificacao.verificarRegistro(novaOS)) {
        return await CrudOs.registrar(novaOS)
    } else {
        throw { id: 409, mensagem: "OS já registrada." }
    }
}

async function registrarCliente(body) {

    if (body == null) {
        throw { id: 400, mensagem: `Erro ao registrar o cliente: ${body}` }
    }

    let novoCliente = new Cliente()
    novoCliente.nome = body.nome
    novoCliente.contato = body.contato
    novoCliente.endereco = body.endereco
    novoCliente.cpf = body.cpf
    novoCliente.veiculo = await CrudVeiculo.buscarUltimoRegistro()

    if (await servico_verificacao.verificarRegistro(novoCliente)) {
        return await CrudCliente.registrar(novoCliente)
    } else {
        throw { id: 409, mensagem: "Cliente já registrado." }
    }
}

async function registrarVeiculo(body) {

    if (body == null) {
        throw { id: 400, mensagem: `Erro ao registrar o veículo: ${body}` }
    }

    let novoVeiculo = new Veiculo()
    novoVeiculo.tipo = body.tipo
    novoVeiculo.marca = body.marca
    novoVeiculo.modelo = body.modelo
    novoVeiculo.placa = body.placa
    novoVeiculo.quilometragem = body.quilometragem
    novoVeiculo.cor = body.cor

    if (await servico_verificacao.verificarRegistro(novoVeiculo)) {
        return await CrudVeiculo.registrar(novoVeiculo)
    } else {
        throw { id: 409, mensagem: "Veículo já registrado." }
    }
}

module.exports = { registrarOS, registrarCliente, registrarVeiculo }