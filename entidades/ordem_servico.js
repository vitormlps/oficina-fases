class OrdemServico {
    _id = null
    _dataEntrada = ''
    _descricao = ''
    _cliente = null
    _quantidadeDanos = 0
    _trocarPecas = false
    _fotos = ['']
    _etapas = {
        'vistoria': false,
        'desmontagem': false,
        'funilaria': false,
        'montagem': false,
        'acabamento': false,
    }

    constructor() { }

    get id() {
        return this._id
    }
    set id(novoId) {
        this._id = novoId
    }

    get dataEntrada() {
        return this._dataEntrada
    }
    set dataEntrada(novaDataEntrada) {
        this._dataEntrada = novaDataEntrada
    }

    get descricao() {
        return this._descricao
    }
    set descricao(novaDescricao) {
        this._descricao = novaDescricao
    }

    get cliente() {
        return this._cliente
    }
    set cliente(novoCliente) {
        this._cliente = novoCliente
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
    set trocarPecas(novoTrocarPecas) {
        this._trocarPecas = novoTrocarPecas
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