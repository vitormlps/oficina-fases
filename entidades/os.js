
export class OS {
    _id = 0
    _tipo = ''
    _cliente = null
    _veiculo = null
    _quantidade_danos = 0
    _trocar_pecas = false
    _fotos = ['']
    _etapas = {
        'Desmontagem': false,
        'Funilaria': false,
        'Preparacao': false,
        'Pintura': false,
        'Montagem': false,
        'Acabamento': false,
    }

    constructor() { }

    get id() {
        return this._id
    }

    get tipo() {
        return this._tipo
    }
    set tipo(novo_tipo) {
        this._tipo = novo_tipo
    }

    get veiculo() {
        return this._veiculo
    }
    set veiculo(novo_veiculo) {
        this._veiculo = novo_veiculo
    }

    get quantidade_danos() {
        return this._quantidade_danos
    }
    set quantidade_danos(novo_quantidade_danos) {
        this._quantidade_danos = novo_quantidade_danos
    }

    get trocar_pecas() {
        return this._trocar_pecas
    }
    set trocar_pecas(novo_trocar_pecas) {
        this._trocar_pecas = novo_trocar_pecas
    }

    get fotos() {
        return this._fotos
    }
    set fotos(novo_fotos) {
        this._fotos = novo_fotos
    }
    get_foto(foto) {
        if (foto in this.fotos) {
            return this.fotos[foto]
        }
        throw 'Esta foto não foi encontrada.'
    }
    add_foto(foto) {
        if (!(foto in this.fotos)) {
            this.fotos.push(foto)
        }
        throw 'Esta foto já está registrada.'
    }

    get etapas() {
        return this._etapas
    }
    status_etapa(etapa) {
        return this.etapas[etapa]
    }
    set_etapa(etapa) {
        this.etapas[etapa] = !this.etapas[etapa]
    }

}