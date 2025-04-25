import { DataTypes } from 'sequelize';
import { sequelizePrincipal } from '../database/db.js';

export const EmbarcacionesFaena = sequelizePrincipal.define('EmbarcacionesFaena', {
  EMBARCACION: {
    type: DataTypes.STRING,
    allowNull: true
  },
  MATRICULA: {
    type: DataTypes.STRING,
    allowNull: true
  },
  CODOR: {
    type: DataTypes.STRING,
  },
  FECZR: {
    type: DataTypes.STRING,
  },
  FECAR: {
    type: DataTypes.STRING,
  },
  HORZR: {
    type: DataTypes.STRING,
  },
  HORAR: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'vw_ListaEmbarcac_Zarpe',
  schema: 'Flota',
  timestamps: false,
  freezeTableName: true
});

EmbarcacionesFaena.removeAttribute('id');
