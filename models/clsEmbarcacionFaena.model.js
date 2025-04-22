import { DataTypes } from 'sequelize';
import { sequelizePrincipal } from '../database/db.js';

export const EmbarcacionesFaena = sequelizePrincipal.define('EmbarcacionesFaena', {
  EMBARCACION: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'vw_ListaEmbarcac_Zarpe',
  schema: 'Flota',
  timestamps: false,
  freezeTableName: true
});

EmbarcacionesFaena.removeAttribute('id');
