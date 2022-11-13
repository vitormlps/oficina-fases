const qAPI = require('./queryAPI');

async function registrar_cliente(cliente) {
    return await qAPI.querySingle(`INSERT INTO cliente(nome, contato, endereco, cpf, id_veiculo) 
                    VALUES ('${cliente.nome}',
                            '${cliente.contato}',
                            '${cliente.endereco}',
                            '${cliente.cpf}',
                            '${cliente.veiculo.id}')
                    RETURNING id_cliente;`)
}

async function listar_clientes() {
    return await qAPI.queryAll(`SELECT * FROM cliente;`)
}

async function buscar_cliente(cliente) {
    return await qAPI.querySingle(`SELECT * FROM cliente WHERE id_cliente = ${cliente.id};`)
}

async function buscar_campo_cliente(cliente, campo) {
    return await qAPI.querySingle(`SELECT '${campo}' FROM ordem_servico WHERE id_cliente = ${cliente.id};`)
}

async function atualizar_cliente(cliente, campo, data) {
    return await qAPI.querySingle(`UPDATE cliente SET '${campo}' = '${data}'
                        WHERE id_cliente = ${cliente.id}
                        RETURNING '${campo}';`)
}

async function remover_cliente(cliente) {
    return await qAPI.querySingle(`DELETE FROM cliente
                        WHERE id_cliente = ${cliente.id}
                        RETURNING id_cliente;`)
}

module.exports = {
    registrar_cliente, listar_clientes, atualizar_cliente,
    buscar_cliente, buscar_campo_cliente, remover_cliente,
}