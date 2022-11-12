const Random = require('../persistencia/input_mock');
const Veiculo = require('./veiculo');
const query = require('../persistencia/queryAPI');


class Cliente {
    _id = 0
    _nome = ''
    _contato = ''
    _endereco = ''
    _cpf = ''
    _veiculo = null

    constructor() {
        console.log("\n... Registrando informações do cliente ...")
        this.nome = Random.c_Nome()
        console.log("Nome:", this.nome)
        this.contato = Random.c_Contato()
        console.log("Contato:", this.contato)
        this.endereco = Random.c_Endereco()
        console.log("Endereço:", this.endereco)
        this.cpf = Random.c_Cpf()
        console.log("CPF:", this.cpf)
        this.veiculo = new Veiculo()
        this.registrar_cliente()
        console.log(">> Registro do cliente completo!\n")
    }

    async registrar_cliente() {
        this.id = await query(`INSERT INTO cliente(nome, contato, endereco, cpf, id_veiculo) 
                        VALUES ('${this.nome}',
                                '${this.contato}',
                                '${this.endereco}',
                                '${this.cpf}',
                                (SELECT id_veiculo FROM veiculo WHERE id_veiculo = ${this.veiculo.id}))
                        RETURNING id_cliente;`)
    }

    get_cliente() {
        return query(`SELECT * FROM cliente WHERE id_cliente = ${this.id};`)
    }

    update_cliente(campo, data) {
        return query(`UPDATE cliente SET '${campo}' = '${data}'
                                WHERE id_cliente = ${this.id}
                                RETURNING id_cliente;`)
    }

    delete_cliente() {
        return query(`DELETE FROM cliente
                                WHERE id_cliente = ${this.id}
                                RETURNING id_cliente;`)
    }

    get id() {
        return this._id
    }
    set id(novoId) {
        this._id = novoId
    }

    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

    get contato() {
        return this._contato
    }
    set contato(novoContato) {
        this._contato = novoContato
    }

    get endereco() {
        return this._endereco
    }
    set endereco(novoEndereco) {
        this._endereco = novoEndereco
    }

    get cpf() {
        return this._cpf
    }
    set cpf(novoCpf) {
        this._cpf = novoCpf
    }

    get veiculo() {
        return this._veiculo
    }
    set veiculo(novoVeiculo) {
        this._veiculo = novoVeiculo
    }

}

module.exports = Cliente