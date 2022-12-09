class Veiculo {
    _id = null
    _tipo = ''
    _marca = ''
    _modelo = ''
    _placa = ''
    _quilometragem = 0
    _cor = ''

    constructor() { }

    get id() {
        return this._id
    }
    set id(novoId) {
        this._id = novoId
    }

    get tipo() {
        return this._tipo
    }
    set tipo(novoTipo) {
        this._tipo = novoTipo
    }

    get marca() {
        return this._marca
    }
    set marca(novaMarca) {
        this._marca = novaMarca
    }

    get modelo() {
        return this._modelo
    }
    set modelo(novoModelo) {
        this._modelo = novoModelo
    }

    get placa() {
        return this._placa
    }
    set placa(novaPlaca) {
        this._placa = novaPlaca
    }

    get quilometragem() {
        return this._quilometragem
    }
    set quilometragem(novaQuilometragem) {
        this._quilometragem = novaQuilometragem
    }

    get cor() {
        return this._cor
    }
    set cor(novaCor) {
        this._cor = novaCor
    }

}

module.exports = Veiculo