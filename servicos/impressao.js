const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function imprimirTodos(tipo) {

    switch (tipo) {
        case 'os':
            return await CrudOs.listar()
        case 'cliente':
            return await CrudCliente.listar()
        case 'veiculo':
            return await CrudVeiculo.listar()
        default:
            throw { id: 400, mensagem: "Erro ao imprimir lista." }
    }
}

async function imprimirEntidade(tipo, id) {

    let entidade = null
    switch (tipo) {
        case 'os':
            entidade = await CrudOs.buscar(id)
        case 'cliente':
            entidade = await CrudCliente.buscar(id)
        case 'veiculo':
            entidade = await CrudVeiculo.buscar(id)
    }

    if (entidade) {
        return entidade
    } else {
        throw { id: 404, mensagem: "Entidade não encontrada." }
    }
}

module.exports = { imprimirEntidade, imprimirTodos }
