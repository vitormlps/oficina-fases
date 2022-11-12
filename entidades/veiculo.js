const Random = require('../persistencia/input_mock');
const query = require('../persistencia/queryAPI');

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

    constructor() {
        console.log("\n... Registrando informações do veículo ...")
        this.setTipo(Random.v_Tipo())
        console.log("Tipo:", this.getTipo())
        this.marca = Random.v_Marca()
        console.log("Marca:", this.marca)
        this.modelo = Random.v_Modelo()
        console.log("Modelo:", this.modelo)
        this.placa = Random.v_Placa()
        console.log("Placa:", this.placa)
        this.quilometragem = Random.v_Quilometragem()
        console.log("Quilometragem:", this.quilometragem, 'KM')
        this.cor = Random.v_Cor()
        console.log("Cor:", this.cor)
        this.registrar_veiculo()
        console.log("\n>> Registro do veículo completo!")
    }

    async registrar_veiculo() {
        this.id = await query(`INSERT INTO veiculo(tipo, marca, modelo, placa, quilometragem, cor) 
                        VALUES ('${this.getTipo()}',
                                '${this.marca}',
                                '${this.modelo}',
                                '${this.placa}',
                                ${this.quilometragem},
                                '${this.cor}')
                        RETURNING id_veiculo;`)
    }

    get_veiculo() {
        return query(`SELECT * FROM veiculo WHERE id_veiculo = ${this.id};`)
    }

    update_veiculo(campo, data) {
        return query(`UPDATE veiculo SET '${campo}' = '${data}'
                                WHERE id_veiculo = ${this.id}
                                RETURNING id_veiculo;`)
    }

    delete_veiculo() {
        return query(`DELETE FROM veiculo
                                WHERE id_veiculo = ${this.id}
                                RETURNING id_veiculo;`)
    }

    get id() {
        return this._id
    }
    set id(id) {
        this._id = id
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