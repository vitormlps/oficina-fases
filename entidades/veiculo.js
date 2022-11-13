class Veiculo {
    _id = 0
    _tipos = {
        'Carro': false,
        'Moto': false,
        'Caminhão': false,
    }
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

    get tipos() {
        return this._tipos
    }
    getTipo() {
        for (let tipo in this.tipos) {
            if (this.tipos[tipo]) {
                return tipo
            }
        }
    }
    setTipo(tipo) {
        this.tipos[tipo] = !this.tipos[tipo]
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