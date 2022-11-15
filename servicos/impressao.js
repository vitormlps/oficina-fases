const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

async function imprimirOS(OS) {

    if (OS) {
        console.log('\nImprimindo OS...')

        const osASerImpressa = await CrudOs.buscar(OS.id)

        for (const key in osASerImpressa) {
            if (key == 'id_os') {
                continue
            } else if (key == 'id_cliente') {
                try {
                    console.log('\nImprimindo Cliente...')
                    await imprimirCliente(OS.cliente)
                } catch (err) {
                    console.log(err)
                }
            } else {
                console.log(`| ${key} : ${osASerImpressa[key]}`.trim())
            }
        }
    } else {
        throw { id: 413, mensagem: "Erro ao imprimir OS." }
    }
}

async function imprimirCliente(cliente) {

    if (cliente) {
        const clienteASerImpresso = await CrudCliente.buscar(cliente.id)

        for (const key in clienteASerImpresso) {
            if (key == 'id_cliente') {
                continue
            } else if (key == 'id_veiculo') {
                try {
                    console.log('\nImprimindo Veiculo...')
                    await imprimirVeiculo(cliente.veiculo)
                } catch (err) {
                    console.log(err)
                }
            } else {
                console.log(`| ${key} : ${clienteASerImpresso[key]}`.trim())
            }
        }
    } else {
        throw { id: 412, mensagem: "Erro ao imprimir cliente." }
    }
}

async function imprimirVeiculo(veiculo) {

    if (veiculo) {
        const veiculoASerImpresso = await CrudVeiculo.buscar(veiculo.id)

        for (const key in veiculoASerImpresso) {
            if (key != 'id_veiculo') {
                console.log(`| ${key} : ${veiculoASerImpresso[key]}`.trim())
            }
        }
    } else {
        throw { id: 411, mensagem: "Erro ao imprimir veiculo." }
    }
}

module.exports = { imprimirOS }
