import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../sequelize'

class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
}

User.init(
  {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    underscored: true,
    sequelize: sequelize,
    tableName: 'users',
    timestamps: false,
  },
);

export default User;