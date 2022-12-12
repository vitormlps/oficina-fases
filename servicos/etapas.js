const Random = require('./input_mock');
const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function realizarEtapa(id, etapa) {

    if (id) {
        let status = await CrudOs.buscar_campo(id, etapa)
        if (status) {
            return "Etapa já realizada!"
        } else if (status == null) {
            throw { id: 404, mensagem: "ID não localizado." }
        }
    } else {
        throw { id: 400, mensagem: "Erro ao verificar o status da etapa." }
    }

    let result = null
    let veiculo = null

    if (etapa == 'acabamento') {
        os = await CrudOs.buscar(id)
        console.log(os)
        cliente = await CrudCliente.buscar(os.id_cliente)
        console.log(cliente)
        veiculo = await CrudVeiculo.atualizar(cliente.id_veiculo, 'cor', Random.v_Cor())
        console.log(veiculo)
    }
    result = await CrudOs.atualizar(id, etapa, true)

    if (result[etapa]) {
        return [result, veiculo]
    } else {
        throw { id: 404, mensagem: "Etapa não localizada." }
    }
}

module.exports = { realizarEtapa }