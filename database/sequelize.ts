import { Sequelize } from "sequelize";
import * as pg from 'pg'
import User from "./models/user.model";

export const sequelize = new Sequelize(process.env.POSTGRES_URL_NON_POOLING ?? '', {
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
