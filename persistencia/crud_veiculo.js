const qAPI = require('./queryAPI');

async function registrar(veiculo) {
    resRows = await qAPI.query(`INSERT INTO veiculo(tipo, marca, modelo, placa, quilometragem, cor) 
                                VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
        [veiculo.tipo, veiculo.marca, veiculo.modelo, veiculo.placa,
        veiculo.quilometragem, veiculo.cor])

    return resRows[0]
}

async function listar() {
    resRows = await qAPI.query(`SELECT * FROM veiculo;`)
    return resRows
}

async function listar_por_campo(campo) {
    resRows = await qAPI.query(`SELECT $1 FROM veiculo;`, [campo])
    return resRows
}

async function buscar(veiculo_id) {
    resRows = await qAPI.query(`SELECT * FROM veiculo WHERE id_veiculo = $1;`,
        [veiculo_id])

    return resRows[0]
}

async function buscarUltimoRegistro() {
    resRows = await qAPI.query(`SELECT * FROM veiculo ORDER BY id_veiculo DESC LIMIT 1;`)
    return resRows[0]
}

async function buscar_campo(id, campo) {
    resRows = await qAPI.query(`SELECT * FROM veiculo WHERE id_veiculo = $1;`,
        [id])

    return resRows[0][campo]
}

async function atualizar(id, campo, data) {
    resRows = await qAPI.query(`UPDATE veiculo SET ${campo} = $1 WHERE id_veiculo = $2 RETURNING *;`,
        [data, id])

    return resRows[0]
}

async function remover(id) {
    resRows = await qAPI.query(`DELETE FROM veiculo WHERE id_veiculo = $1 RETURNING *;`,
        [id])

    return resRows[0]
}

module.exports = {
    registrar, listar, listar_por_campo, atualizar,
    buscar, buscar_campo, buscarUltimoRegistro,
    remover
}