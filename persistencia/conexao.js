const { Pool } = require('pg')

function connect() {
    return new Pool({
        host: 'localhost',
        database: 'oficina_fases',
        port: 5432,
        user: 'postgres',
        password: '',
    })
}

module.exports = connect