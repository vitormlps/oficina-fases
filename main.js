const servico_registrarOS = require('./servicos/registro');
const servico_etapas = require('./servicos/etapas');
const qAPI = require('./persistencia/queryAPI');

async function main() {
    console.log("Bem vindx ao registrador automático da Oficina Fases!")

    let OS = {}

    try {
        // await qAPI.queryBegin()
        OS = await servico_registrarOS()
        // await qAPI.queryCommit()
    } catch (err) {
        // await qAPI.queryRollback()
        console.log(err);
    }

    try {
        if (await servico_etapas.fazerVistoria(OS)) {
            console.log("Obrigado por utilizar o registrador. Até mais!")
            return
        }
    } catch (err) {
        console.log(err);
    }

    try {
        await servico_etapas.desmontar(OS)
    } catch (err) {
        console.log(err);
    }

    try {
        if (OS.trocarPecas) {
            servico_etapas.ordemCompra()
            await servico_etapas.funilaria(OS)
        }
    } catch (err) {
        console.log(err);
    }

    try {
        await servico_etapas.montar(OS)
        await servico_etapas.acabar(OS)
        await servico_etapas.fazerVistoria(OS)
    } catch (err) {
        console.log(err);
    }

    console.log("Obrigado por utilizar o registrador. Até mais!")
}

main();