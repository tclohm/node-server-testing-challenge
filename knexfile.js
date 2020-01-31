// Update with your config settings.

//require("dotenv").config();

// DB_URL evn format:
// postgres: //user_name:password@ipaddress:port/table
// example: postgres: //taylor:password@localhost:5000/pg_database

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
