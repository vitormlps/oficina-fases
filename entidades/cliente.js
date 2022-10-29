
export class Cliente {
    _id = 0
    _nome = ''
    _contato = ''
    _endereco = ''
    _cpf = ''
    _veiculo = null

    constructor() { }

    get id() {
        return this._id
    }

    get nome() {
        return this._nome
    }
    set nome(novo_nome) {
        this._nome = novo_nome
    }

    get contato() {
        return this._contato
    }
    set contato(novo_contato) {
        this._contato = novo_contato
    }

    get endereco() {
        return this._endereco
    }
    set endereco(novo_endereco) {
        this._endereco = novo_endereco
    }

    get cpf() {
        return this._cpf
    }
    set cpf(novo_cpf) {
        this._cpf = novo_cpf
    }

    get veiculo() {
        return this._veiculo
    }
    set veiculo(novo_veiculo) {
        this._veiculo = novo_veiculo
    }

}