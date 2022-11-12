const registro = require('./servicos/registro');
const etapas = require('./servicos/etapas');

function main() {
    console.log("Bem vindx ao registrador automático da Oficina Fases!")

    const OS = registro.registrarOS()

    if (etapas.fazerVistoria(OS)) {
        console.log("Obrigado por utilizar o registrador. Até mais!")
        return
    }

    etapas.desmontar(OS)

    if (OS.trocarPecas) {
        etapas.ordemCompra()
        etapas.funilaria(OS)
    }

    etapas.preparar(OS)
    etapas.pintar(OS)
    etapas.montar(OS)
    etapas.acabar(OS)

    etapas.fazerVistoria(OS)
    console.log("Obrigado por utilizar o registrador. Até mais!")
}

main();