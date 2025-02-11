import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.config';

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

export const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // Creates tables if they don't exist
    console.log('Database synchronized');
  } catch (error) {
    console.error('Database synchronization failed:', error);
  }
};
