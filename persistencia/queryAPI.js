const getPGBase = require('./conexao');

async function query(text) {
    // console.log(text)

    const cliente = getPGBase()
    await cliente.connect();
    const result = await cliente.query(text)

    await cliente.end()
    return result.rows
}

module.exports = { query }