import { Options } from "sequelize";
import pg from 'pg'

const options: Options = {
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
}


const lambdaConfig = {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 2,
    min: 0,
    idle: 0,
    acquire: 3000,
  }
}

module.exports = {
  development: {
    ...options,
    ...lambdaConfig
  }
}