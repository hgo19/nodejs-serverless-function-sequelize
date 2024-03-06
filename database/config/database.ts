import 'dotenv/config';
import { Options } from 'sequelize';
import * as pg from 'pg'

const config: Options = {
  username: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  dialect: 'postgres',
  protocol: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true
    }
  }
}

module.exports = config;