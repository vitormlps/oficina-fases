const { Client } = require('pg')

function getPGBase() {
    return new Client({
        host: 'localhost',
        database: 'oficina_fases',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
    })
}

module.exports = getPGBase