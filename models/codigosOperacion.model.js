import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const CodigoOperacionEmbarcacion = sequelize.define('CodigoOperacionEmbarcacion', {
  'Código Orden': {
    type: DataTypes.STRING,
    primaryKey: true
  },
  'Fecha Zarpe': {
    type: DataTypes.DATEONLY,
  },
  'Hora Zarpe': {
    type: DataTypes.TIME,
  },
  'Embarcación': {
    type: DataTypes.STRING,
  },
  'Fecha Arribo': {
    type: DataTypes.DATEONLY,
  },
  'Hora Arribo': {
    type: DataTypes.TIME,
  }
}, {
  tableName: 'Fact_Codigo_Operaciones_VOptima',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  freezeTableName: true,
  hasPrimaryKeys: true,
});

