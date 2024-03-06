import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sequelize } from '../database/sequelize';
import Produto from '../database/models/Product';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  sequelize.connectionManager.initPools();

  try {
    const products = await Produto.findAll({})
    return res.status(201).json(products)
  } finally {
    await sequelize.connectionManager.close();
  }
}
