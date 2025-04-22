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
  embarcacion: {
    type: Sequelize.TEXT,
  },
  velocidad_optima: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
  tableName: 'ORDEN_NAV_OPTIMA',
  freezeTableName: true,
});