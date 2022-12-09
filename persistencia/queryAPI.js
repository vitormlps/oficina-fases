const getPGBase = require('./conexao');

async function query(text, array = null) {
    const cliente = getPGBase()
    await cliente.connect();
    const result = await cliente.query(text, array)

    await cliente.end()
    return result.rows
}

module.exports = { query }