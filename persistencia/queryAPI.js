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

async function query(text) {
    console.log(text)

    const Pool = await connect()
    const result = await Pool.query(text)

    await Pool.end()
    return await result.rows
}

module.exports = query