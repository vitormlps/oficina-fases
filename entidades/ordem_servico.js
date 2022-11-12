const Random = require('../persistencia/input_mock');
const Cliente = require('./cliente');

class OrdemServico {
    _id = 0
    _dataEntrada = new Date()
    _descricao = ''
    _cliente = null
    _veiculo = null
    _quantidadeDanos = 0
    _trocarPecas = false
    _fotos = ['']
    _etapas = {
        'Vistoria': false,
        'Desmontagem': false,
        'Funilaria': false,
        'Preparacao': false,
        'Pintura': false,
        'Montagem': false,
        'Acabamento': false,
    }

    constructor() {
        this.setDataEntradaToNow()
        console.log('Data de Entrada:', this.dataEntrada)
        this.descricao = Random.os_Descricao()
        console.log("Descricao do sinistro:", this.descricao)
        this.cliente = new Cliente()
        this.veiculo = this.cliente.veiculo
        this.quantidadeDanos = Random.os_QtdeDanos()
        console.log("Quantidade de danos:", this.quantidadeDanos)
        this.setTrocarPecas(Random.os_TrocarPecas())
        console.log("Trocar peças?", this.trocarPecas ? 'Sim' : 'Não')
        this.fotos = Random.os_Fotos()
        console.log("Fotos:", this.fotos)
        console.log("\n>> Registro da OS realizado!")
    }

    get id() {
        return this._id
    }

    get dataEntrada() {
        return this._dataEntrada.getDate()
    }
    set dataEntrada(novaDataEntrada) {
        this._dataEntrada.setDate(novaDataEntrada)
    }
    setDataEntradaToNow() {
        this._dataEntrada.setDate(Date.now())
    }

    get descricao() {
        return this._descricao
    }
    set descricao(novaDescricao) {
        this._descricao = novaDescricao
    }

    get veiculo() {
        return this._veiculo
    }
    set veiculo(novoVeiculo) {
        this._veiculo = novoVeiculo
    }

    get quantidadeDanos() {
        return this._quantidadeDanos
    }
    set quantidadeDanos(novoQuantidadeDanos) {
        this._quantidadeDanos = novoQuantidadeDanos
    }

    get trocarPecas() {
        return this._trocarPecas
    }
    setTrocarPecas() {
        this._trocarPecas = !this.trocarPecas
    }

    get fotos() {
        return this._fotos
    }
    set fotos(novasFotos) {
        this._fotos = novasFotos
    }
    getFoto(foto) {
        if (foto in this.fotos) {
            return this.fotos[foto]
        }
        throw 'Esta foto não foi encontrada.'
    }
    addFoto(foto) {
        if (!(foto in this.fotos)) {
            this.fotos.push(foto)
        }
        throw 'Esta foto já está registrada.'
    }

    get etapas() {
        return this._etapas
    }
    statusEtapa(etapa) {
        return this.etapas[etapa]
    }
    setEtapa(etapa) {
        this.etapas[etapa] = !this.etapas[etapa]
    }
    resetEtapas() {
        this.etapas.forEach(etapa => {
            etapa = false
        });
    }

}

module.exports = OrdemServico