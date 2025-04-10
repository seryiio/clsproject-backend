import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const OrdenNavegacionOptima = sequelize.define('ORDEN_NAV_OPTIMA', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: DataTypes.STRING,
    },
    fecha_hora: {
        type: DataTypes.DATE,
    },
    embarcacion: {
        type: DataTypes.STRING,
    },
    codigo_operacion: {
        type: DataTypes.STRING,
    },
    velocidad_optima: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: false,
});
