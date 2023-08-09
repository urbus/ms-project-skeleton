import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database/sequelize';
import User from './user';
​
class AccessToken extends Model {
  public id!: number;
  public client_id!: number;
  public user_id!: number | null;
  public token!: string;
  public expires_at!: number | null;
  public scope!: string | null;
}
​
AccessToken.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  client_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  expires_at: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  scope: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'access_token',
  timestamps: false, 
  underscored: true, 
});
​
AccessToken.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(AccessToken, { foreignKey: 'user_id' });
​
export default AccessToken;