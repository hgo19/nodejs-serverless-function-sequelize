import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sequelize } from '../database/sequelize';
import User from 'database/models/User';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  sequelize.connectionManager.initPools();

  try {
    const userInDb = await User.create({
      username: 'Vinijr',
      email: 'vinijr@email.com'
    })
    return res.status(201).json(userInDb)
  } finally {
    await sequelize.connectionManager.close();
  }
}
