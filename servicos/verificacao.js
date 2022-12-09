const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function verificarRegistro(entidade) {

    if ('_dataEntrada' in entidade) {
        const listaIdOs = await CrudOs.listar_por_campo('id_os')

        if (!listaIdOs.includes(entidade.id)) {
            return true
        }
        return false
    }

    if ('_cpf' in entidade) {
        const listaIDCliente = await CrudCliente.listar_por_campo('id_cliente')

        if (!listaIDCliente.includes(entidade.id)) {
            return true
        }
        return false
    }

    if ('_placa' in entidade) {
        const listaIDVeiculo = await CrudVeiculo.listar_por_campo('id_veiculo')

        if (!listaIDVeiculo.includes(entidade.id)) {
            return true
        }
        return false
    }

    return false
}


module.exports = { verificarRegistro }