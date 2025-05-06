import { sequelizePrincipal } from '../database/db.js';
import { DataTypes } from 'sequelize';

export const VelocidadOptima = sequelizePrincipal.define('VEL_OPTIMA', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    embarcacion: {
        type: DataTypes.STRING,
    },
    velocidad_optima: {
        type: DataTypes.INTEGER,
    },
    gph: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: false,
    tableName: 'VEL_OPTIMA',
    freezeTableName: true
});