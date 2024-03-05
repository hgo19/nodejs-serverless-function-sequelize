import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sequelize } from '../database/sequelize';
import User from '../database/models/User';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  sequelize.connectionManager.initPools();

  try {
    const tryToCreate = await User.create({
      username: 'teste joão',
      email: 'joao@teste.com',
    })
    return res.status(201).json(tryToCreate)
  } finally {
    await sequelize.connectionManager.close();
  }
}
