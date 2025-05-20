import { DataTypes, Sequelize } from 'sequelize';
import { sequelizePrincipal } from '../database/db.js';

export const OrdenNavegacionOptima = sequelizePrincipal.define('ORDEN_NAV_OPTIMA', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_hora: {
    type: Sequelize.TEXT,
  },
  matricula: {
    type: Sequelize.TEXT,
  },
  embarcacion: {
    type: Sequelize.TEXT,
  },
  velocidad_optima: {
    type: Sequelize.INTEGER,
  },
  velocidad_nominal: {
    type: Sequelize.INTEGER,
  },
  gph: {
    type: Sequelize.INTEGER,
  },
  rpm: {
    type: Sequelize.INTEGER,
  },
  rpm_nominal: {
    type: Sequelize.INTEGER,
  },
  usuario: {
    type: Sequelize.TEXT,
  },
  CODOR: {
    type: Sequelize.TEXT,
  },
  FECZR: {
    type: Sequelize.TEXT,
  },
  FECAR: {
    type: Sequelize.TEXT,
  },
  HORZR: {
    type: DataTypes.STRING,
  },
  HORAR: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
  tableName: 'ORDEN_NAV_OPTIMA',
  freezeTableName: true,
});