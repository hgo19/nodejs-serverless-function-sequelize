import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Sequelize } from 'sequelize';

let sequelize: Sequelize

async function loadSequelize() {
  const sequelize = new Sequelize(process.env.POSTGRES_URL_NON_POOLING ?? '', {
    dialect: 'postgres',
    protocol: 'postgres',
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
  });

  await sequelize.authenticate();

  return sequelize
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!sequelize) {
    sequelize = await loadSequelize();
  } else {
    sequelize.connectionManager.initPools();
  }

  try {
    return res.send(200)
  } finally {
    await sequelize.connectionManager.close();
  }
}
