// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'mosquito'
    },
    seeds: {
      directory: './seeds/dev'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
