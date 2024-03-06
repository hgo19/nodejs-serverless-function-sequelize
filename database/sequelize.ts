import { Sequelize } from "sequelize";
import * as pg from 'pg'

export const sequelize = new Sequelize(process.env.POSTGRES_URL ?? '', {
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
  },
})
