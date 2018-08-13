const knex = require('knex')({
    client: 'pg',
    connection: {
        database : 'mosquito'
    }
});