const qAPI = require('./queryAPI');

async function registrar_os(os) {
    return await qAPI.querySingle(`INSERT INTO ordem_servico(data_entrada, descricao, quantidade_danos, trocar_pecas, fotos, id_cliente) 
                    VALUES ('${os.dataEntrada}',
                            '${os.descricao}',
                            '${os.quantidadeDanos}',
                            '${os.trocarPecas}',
                            '${os.fotos}',
                            '${os.cliente.id}')
                    RETURNING id_os;`)
}

async function listar_os() {
    return await qAPI.queryAll(`SELECT * FROM ordem_servico;`)
}

async function buscar_os(os) {
    return await qAPI.querySingle(`SELECT * FROM ordem_servico WHERE id_os = ${os.id};`)
}

async function buscar_campo_os(os, campo) {
    return await qAPI.querySingle(`SELECT ${campo} FROM ordem_servico WHERE id_os = ${os.id};`)
}

async function atualizar_os(os, campo, data) {
    return await qAPI.querySingle(`UPDATE ordem_servico SET ${campo} = ${data}
                        WHERE id_os = ${os.id}
                        RETURNING ${campo};`)
}

async function remover_os(os) {
    return await qAPI.querySingle(`DELETE FROM ordem_servico
                        WHERE id_os = ${os.id}
                        RETURNING id_os;`)
}

module.exports = {
    registrar_os, listar_os, atualizar_os,
    buscar_os, buscar_campo_os, remover_os,
}