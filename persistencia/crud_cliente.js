const qAPI = require('./queryAPI');

async function registrar(cliente) {
    resRows = await qAPI.query(`INSERT INTO cliente(nome, contato, endereco, cpf, id_veiculo) 
                    VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
        [cliente.nome, cliente.contato, cliente.endereco, cliente.cpf, cliente.veiculo.id_veiculo])

    return resRows[0]
}

async function listar() {
    resRows = await qAPI.query(`SELECT * FROM cliente;`)
    return resRows
}

async function listar_por_campo(campo) {
    resRows = await qAPI.query(`SELECT $1 FROM cliente;`, [campo])
    return resRows
}

async function buscar(cliente_id) {
    resRows = await qAPI.query(`SELECT * FROM cliente WHERE id_cliente = $1;`,
        [cliente_id])

    return resRows[0]
}

async function buscarUltimoRegistro() {
    resRows = await qAPI.query(`SELECT * FROM cliente ORDER BY id_cliente DESC LIMIT 1;`)
    return resRows[0]
}

async function buscar_campo(id, campo) {
    resRows = await qAPI.query(`SELECT * FROM cliente WHERE id_cliente = $1;`,
        [id])

    return resRows[0][campo]
}

async function atualizar(id, campo, data) {
    resRows = await qAPI.query(`UPDATE cliente SET ${campo} = $1 WHERE id_cliente = $2 RETURNING *;`,
        [data, id])

    return resRows[0]
}

async function remover(id) {
    resRows = await qAPI.query(`DELETE FROM cliente WHERE id_cliente = $1 RETURNING *;`,
        [id])

    return resRows[0]
}

module.exports = {
    registrar, listar, listar_por_campo, atualizar,
    buscar, buscar_campo, buscarUltimoRegistro, remover,
}