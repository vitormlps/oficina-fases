const qAPI = require('./queryAPI');

async function registrar_veiculo(veiculo) {
    return await qAPI.querySingle(`INSERT INTO veiculo(tipo, marca, modelo, placa, quilometragem, cor) 
                    VALUES ('${veiculo.getTipo()}',
                            '${veiculo.marca}',
                            '${veiculo.modelo}',
                            '${veiculo.placa}',
                            ${veiculo.quilometragem},
                            '${veiculo.cor}')
                    RETURNING id_veiculo;`)
}

async function listar_veiculos() {
    return await qAPI.queryAll(`SELECT * FROM veiculo;`)
}

async function buscar_veiculo(veiculo) {
    return await qAPI.querySingle(`SELECT * FROM veiculo WHERE id_veiculo = ${veiculo.id};`)
}

async function buscar_campo_veiculo(veiculo, campo) {
    return await qAPI.querySingle(`SELECT ${campo} FROM ordem_servico WHERE id_veiculo = ${veiculo.id};`)
}

async function atualizar_veiculo(veiculo, campo, data) {
    return await qAPI.querySingle(`UPDATE veiculo SET ${campo} = ${data}
                            WHERE id_veiculo = ${veiculo.id}
                            RETURNING ${campo};`)
}

async function remover_veiculo(veiculo) {
    return await qAPI.querySingle(`DELETE FROM veiculo
                            WHERE id_veiculo = ${veiculo.id}
                            RETURNING id_veiculo;`)
}

module.exports = {
    registrar_veiculo, listar_veiculos, atualizar_veiculo,
    buscar_veiculo, buscar_campo_veiculo, remover_veiculo,
}