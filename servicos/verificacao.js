const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function verificarVeiculo(novoVeiculo) {
    const listaPlacas = await CrudVeiculo.listar_por_campo('placa')

    listaPlacas.forEach(data => {
        if (novoVeiculo.placa == data.placa) {
            return false
        }
    });
    return true
}

async function verificarCliente(novoCliente) {
    const listaCpf = await CrudCliente.listar_por_campo('cpf')

    listaCpf.forEach(data => {
        if (novoCliente.cpf == data.cpf) {
            return false
        }
    });
    return true
}

async function verificarOS(novaOS) {
    const listaData = await CrudOs.listar_por_campo('data_entrada')

    listaData.forEach(data => {
        if (novaOS.dataEntrada == data.data_entrada) {
            return false
        }
    });
    return true
}

module.exports = {
    verificarVeiculo, verificarCliente, verificarOS
}