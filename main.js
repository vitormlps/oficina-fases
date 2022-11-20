const OrdemServico = require('./entidades/ordem_servico');
const Cliente = require('./entidades/cliente');
const Veiculo = require('./entidades/veiculo');
const servico_registro = require('./servicos/registro');
const servico_impressao = require('./servicos/impressao');
const servico_etapas = require('./servicos/etapas');

async function main() {
    console.log("Bem vindx ao registrador automático da Oficina Fases!")

    let novaOS = new OrdemServico()
    let novoCliente = new Cliente()
    let novoVeiculo = new Veiculo()

    console.log("\nIniciando registro da Ordem de Serviço.")
    console.log("Buscando informações. ... Um momento, por favor...")

    // Registro das entidades
    try {
        novoVeiculo = await servico_registro
            .registrarVeiculo(novoVeiculo)

        novoCliente = await servico_registro
            .registrarCliente(novoCliente, novoVeiculo)

        novaOS = await servico_registro
            .registrarOS(novaOS, novoCliente)

    } catch (err) {
        console.log(err)
    }

    // Busca das entidades
    try {
        await servico_impressao.imprimirOS(novaOS)
    } catch (err) {
        console.log(err)
    }

    // Falha na atualização da OS
    let temp_id = novaOS.id
    try {
        novaOS.id = 0
        await servico_etapas.fazerVistoria(novaOS)
    } catch (err) {
        console.log(err)
        console.log('Opsie! :)')
    }
    novaOS.id = temp_id

    // Atualização da OS
    try {
        const statusVistoria = await servico_etapas.fazerVistoria(novaOS)

        if (statusVistoria) {
            console.log("\nObrigado por utilizar o registrador. Até mais!")
            return
        }
    } catch (err) {
        console.log(err);
    }

    try {
        await servico_etapas.desmontar(novaOS)
    } catch (err) {
        console.log(err);
    }

    try {
        if (novaOS.trocarPecas) {
            servico_etapas.ordemCompra()
            await servico_etapas.funilaria(novaOS)
        }
    } catch (err) {
        console.log(err);
    }

    try {
        await servico_etapas.montar(novaOS)
        await servico_etapas.acabar(novaOS)
        await servico_impressao.imprimirOS(novaOS)
        if (await servico_etapas.fazerVistoria(novaOS)) {
            console.log("\nObrigado por utilizar o registrador. Até mais!")
        }
    } catch (err) {
        console.log(err);
    }

    // Remoção das entidades
    try {
        if (!novaOS.trocarPecas) {
            console.log('...');
            servico_etapas.glitch(novaOS)
        }
    } catch (err) {
        console.log(err);
    }
    return
}

main();