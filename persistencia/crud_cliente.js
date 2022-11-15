const qAPI = require('./queryAPI');

async function registrar(cliente) {
    resRows = await qAPI.query(`INSERT INTO cliente(nome, contato, endereco, cpf, id_veiculo) 
                    VALUES ('${cliente.nome}',
                            '${cliente.contato}',
                            '${cliente.endereco}',
                            '${cliente.cpf}',
                            '${cliente.veiculo.id}')
                    RETURNING id_cliente;`)
    cliente.id = resRows[0].id_cliente
    return cliente
}

async function listar() {
    resRows = await qAPI.query(`SELECT * FROM cliente;`)
    return resRows
}

async function buscar(cliente_id) {
    resRows = await qAPI.query(`SELECT * FROM cliente WHERE id_cliente = ${cliente_id};`)
    return resRows[0]
}

async function buscar_campo(cliente_id, campo) {
    resRows = await qAPI.query(`SELECT ${campo} FROM ordem_servico WHERE id_cliente = ${cliente_id};`)
    return resRows[0][campo]
}

async function atualizar(cliente, campo, data) {
    resRows = await qAPI.query(`UPDATE cliente SET ${campo} = ${data}
                        WHERE id_cliente = ${cliente.id}
                        RETURNING ${campo};`)
    cliente[campo] = resRows[0][campo]
    return resRows[0][campo]
}

async function remover(cliente_id) {
    resRows = await qAPI.query(`DELETE FROM cliente
                        WHERE id_cliente = ${cliente_id}
                        RETURNING id_cliente;`)
    return resRows[0].id_cliente
}

module.exports = {
    registrar, listar, atualizar,
    buscar, buscar_campo, remover,
}