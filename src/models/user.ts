import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database/sequelize';
import Role from './roles';

class User extends Model {
  public userid!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone!: string;
  public password!: string;
  public createUser!: number;
  public createDate!: Date;
  public UpdateUser!: number;
  public UpdateDate!: Date;
  public roleId!: number;
  public status!: number;
  public active!: number;
  public status_id!: number;
  public encrypted_pass!: string;
  public current_company!: number;
  public confirmation_token!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  userid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  createUser: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  createDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  UpdateUser: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  UpdateDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  roleId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Role,
      key: 'rolesId',
    },
  },
  status: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 1,
    allowNull: false,
  },
  active: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 1,
    allowNull: true,
  },
  status_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
  },
  encrypted_pass: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  current_company: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  confirmation_token: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'user',
  timestamps: false,
  underscored: false,
});


User.belongsTo(Role, { foreignKey: 'roleId' });


export default User;
