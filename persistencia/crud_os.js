const qAPI = require('./queryAPI');

async function registrar(os) {
    resRows = await qAPI.query(`INSERT INTO ordem_servico(data_entrada, descricao, quantidade_danos, trocar_pecas, fotos, id_cliente) 
                    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
        [os.dataEntrada, os.descricao, os.quantidadeDanos, os.trocarPecas, os.fotos, os.cliente.id_cliente])

    return resRows[0]
}

async function listar() {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico;`)
    return resRows
}

async function listar_por_campo(campo) {
    resRows = await qAPI.query(`SELECT $1 FROM ordem_servico;`, [campo])
    return resRows
}

async function listarTudo() {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico
                                INNER JOIN cliente ON ordem_servico.id_cliente = cliente.id_cliente
                                INNER JOIN veiculo ON cliente.id_veiculo = veiculo.id_veiculo;`)
    return resRows
}

async function buscar(os_id) {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico WHERE id_os = $1;`,
        [os_id])

    return resRows[0]
}

async function buscarUltimoRegistro() {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico ORDER BY id_os DESC LIMIT 1;`)
    return resRows[0]
}

async function buscar_campo(id, campo) {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico WHERE id_os = $1;`,
        [id])

    return resRows[0][campo]
}

async function atualizar(id, campo, data) {
    resRows = await qAPI.query(`UPDATE ordem_servico SET ${campo} = $1 WHERE id_os = $2 RETURNING *;`,
        [data, id])

    return resRows[0]
}

async function remover(id) {
    resRows = await qAPI.query(`DELETE FROM ordem_servico WHERE id_os = $1 RETURNING *;`,
        [id])

    return resRows[0]
}

module.exports = {
    registrar, listar, listar_por_campo, listarTudo,
    atualizar, buscar, buscar_campo, buscarUltimoRegistro,
    remover,
}