
export class Veiculo {
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

    get tipos() {
        return this._tipos
    }
    get_tipo() {
        for (const tipo in this._tipos) {
            if (this._tipos[tipo]) {
                return tipo
            }
            throw 'Tipo não registrado.'
        }
    }
    set_tipo(tipo) {
        this._tipos[tipo] = !this._tipos[tipo]
    }

    get marca() {
        return this._marca
    }
    set marca(nova_marca) {
        this._marca = nova_marca
    }

    get modelo() {
        return this._modelo
    }
    set modelo(novo_modelo) {
        this._modelo = novo_modelo
    }

    get placa() {
        return this._placa
    }
    set placa(nova_placa) {
        this._placa = nova_placa
    }

    get quilometragem() {
        return this._quilometragem
    }
    set quilometragem(nova_quilometragem) {
        this._quilometragem = nova_quilometragem
    }

    get cor() {
        return this._cor
    }
    set cor(nova_cor) {
        this._cor = nova_cor
    }

}