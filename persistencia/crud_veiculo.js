const qAPI = require('./queryAPI');

async function registrar(veiculo) {
    resRows = await qAPI.query(`INSERT INTO veiculo(tipo, marca, modelo, placa, quilometragem, cor) 
                    VALUES ('${veiculo.getTipo()}',
                            '${veiculo.marca}',
                            '${veiculo.modelo}',
                            '${veiculo.placa}',
                            ${veiculo.quilometragem},
                            '${veiculo.cor}')
                    RETURNING id_veiculo;`)
    veiculo.id = resRows[0].id_veiculo
    return veiculo
}

async function listar() {
    resRows = await qAPI.query(`SELECT * FROM veiculo;`)
    return resRows
}

async function buscar(veiculo_id) {
    resRows = await qAPI.query(`SELECT * FROM veiculo WHERE id_veiculo = ${veiculo_id};`)
    return resRows[0]
}

async function buscar_campo(veiculo_id, campo) {
    resRows = await qAPI.query(`SELECT ${campo} FROM ordem_servico WHERE id_veiculo = ${veiculo_id};`)
    return resRows[0][campo]
}

async function atualizar(veiculo, campo, data) {
    resRows = await qAPI.query(`UPDATE veiculo SET ${campo} = ${data}
                            WHERE id_veiculo = ${veiculo.id}
                            RETURNING ${campo};`)
    veiculo[campo] = resRows[0][campo]
    return resRows[0][campo]
}

async function remover(veiculo_id) {
    resRows = await qAPI.query(`DELETE FROM veiculo
                            WHERE id_veiculo = ${veiculo_id}
                            RETURNING id_veiculo;`)
    return resRows[0].id_veiculo
}

async function removerCascade(id) {
    if (id) {
        await qAPI.query(`DELETE FROM ordem_servico
                            WHERE id_os = ${id}`)
        await qAPI.query(`DELETE FROM cliente
                            WHERE id_cliente = ${id}`)
        await qAPI.query(`DELETE FROM veiculo
                            WHERE id_veiculo = ${id}`)
        return id
    } else {
        throw { id: 666, mensagem: "Erro ao dominar o mundo." }
    }
}

module.exports = {
    registrar, listar, atualizar,
    buscar, buscar_campo, remover, removerCascade
}