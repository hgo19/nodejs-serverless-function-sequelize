import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../sequelize'

class Produto extends Model {
  public id!: number;
  public nome!: string;
  public qtd!: number;
  public preco!: number;
}

Produto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    qtd: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'produtos',
    timestamps: false
  }
);

export default Produto;
