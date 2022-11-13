const connect = require('./conexao');

// function query(text) {
//     const Pool = connect()
//     console.log(text);
//     return Pool
//         .query(text)
//         .then(res => {
//             console.log(res.rows);
//             Pool.end();
//         })
//         .catch(e => {
//             console.error(e.stack);
//             Pool.end();
//         });
// }

async function queryBegin() {
    const Pool = connect()
    await Pool.query('BEGIN')
    console.log('BEGIN')
    await Pool.end()
}
async function queryCommit() {
    const Pool = connect()
    await Pool.query('COMMIT')
    console.log('COMMIT')
    await Pool.end()
}
async function queryRollback() {
    const Pool = connect()
    await Pool.query('ROLLBACK')
    console.log('ROLLBACK')
    await Pool.end()
}

async function querySingle(text) {
    console.log(text)

    const Pool = connect()
    const result = await Pool.query(text)

    await Pool.end()

    return await result.rows[0]
}

async function queryAll(text) {
    console.log(text)

    const Pool = connect()
    const result = await Pool.query(text)

    await Pool.end()
    return await result.rows
}

module.exports = { queryBegin, queryCommit, queryRollback, querySingle, queryAll }