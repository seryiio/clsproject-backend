import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const VelocidadOptima = sequelize.define('VEL_OPTIMA', {
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
}, {
    timestamps: false,
});
