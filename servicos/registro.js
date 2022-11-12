const OrdemServico = require('../entidades/ordem_servico');

function registrarOS() {
    console.log("Iniciando registro da Ordem de Serviço.")
    console.log("Buscando informações. ... Um momento, por favor...\n")

    const novaOS = new OrdemServico()

    return novaOS
}

module.exports = { registrarOS }