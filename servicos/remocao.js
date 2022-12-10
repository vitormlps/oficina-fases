const Random = require('./input_mock');
const qAPI = require('../persistencia/queryAPI');
const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function remover(id, tipoEntidade) {

    if (id == null || tipoEntidade == null) {
        throw { id: 400, mensagem: "Erro ao remover entidade(s)." }
    }

    switch (tipoEntidade) {
        case 'os':
            if (await CrudOs.buscar(id)) {
                return await CrudOs.remover(id)
            } else {
                throw { id: 404, mensagem: "Entidade não encontrada." }
            }
        case 'cliente':
            if (await CrudCliente.buscar(id)) {
                return await CrudCliente.remover(id)
            } else {
                throw { id: 404, mensagem: "Entidade não encontrada." }
            }
        case 'veiculo':
            if (await CrudVeiculo.buscar(id)) {
                return await CrudVeiculo.remover(id)
            } else {
                throw { id: 404, mensagem: "Entidade não encontrada." }
            }
    }
}

module.exports = { remover }