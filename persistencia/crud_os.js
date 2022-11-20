const qAPI = require('./queryAPI');

async function registrar(os) {
    resRows = await qAPI.query(`INSERT INTO ordem_servico(data_entrada, descricao, quantidade_danos, trocar_pecas, fotos, id_cliente) 
                    VALUES ('${os.dataEntrada}',
                            '${os.descricao}',
                            '${os.quantidadeDanos}',
                            '${os.trocarPecas}',
                            '${os.fotos}',
                            '${os.cliente.id}')
                    RETURNING id_os;`)
    os.id = resRows[0].id_os
    return os
}

async function listar() {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico;`)
    return resRows
}

async function listar_por_campo(campo) {
    resRows = await qAPI.query(`SELECT ${campo} FROM ordem_servico;`)
    return resRows
}

async function listarTudo() {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico
                                INNER JOIN cliente ON ordem_servico.id_cliente = cliente.id_cliente
                                INNER JOIN veiculo ON cliente.id_veiculo = veiculo.id_veiculo;`)
    return resRows
}

async function buscar(os_id) {
    resRows = await qAPI.query(`SELECT * FROM ordem_servico WHERE id_os = ${os_id};`)
    return resRows[0]
}

async function buscar_campo(os_id, campo) {
    resRows = await qAPI.query(`SELECT ${campo} FROM ordem_servico WHERE id_os = ${os_id};`)
    return resRows[0][campo]
}

async function atualizar(os, campo, data) {
    resRows = await qAPI.query(`UPDATE ordem_servico SET ${campo} = ${data}
                        WHERE id_os = ${os.id}
                        RETURNING ${campo};`)
    if (campo in os.etapas) {
        os.setEtapa(campo)
    } else {
        os[campo] = resRows[0][campo]
    }
    return resRows[0][campo]
}

async function remover(os_id) {
    resRows = await qAPI.query(`DELETE FROM ordem_servico
                        WHERE id_os = ${os_id}
                        RETURNING id_os;`)
    return resRows[0].id_os
}

module.exports = {
    registrar, listar, listar_por_campo, listarTudo,
    atualizar, buscar, buscar_campo, remover,
}