const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'react_gallery',
    host: 'localhost',
    port: 5432
}

const pool = new Pool(config)

pool.on('connect', (client) => {
    console.log('pg connected')
})

pool.on('error', (err, client) => {
    console.log('error on idle pg client', err)
    process.exit(-1)
})

module.exports = pool;