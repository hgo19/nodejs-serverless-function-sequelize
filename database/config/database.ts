import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || '123456',
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
}

module.exports = config;