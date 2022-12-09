class Cliente {
    _id = null
    _nome = ''
    _contato = ''
    _endereco = ''
    _cpf = ''
    _veiculo = null

    constructor() { }

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