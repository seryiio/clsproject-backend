import { sequelizePrincipal } from '../database/db.js';
import { DataTypes } from 'sequelize';

export const VelocidadOptima = sequelizePrincipal.define('VEL_OPTIMA', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    matricula: {
        type: DataTypes.STRING,
    },
    embarcacion: {
        type: DataTypes.STRING,
    },
    velocidad_optima: {
        type: DataTypes.INTEGER,
    },
    velocidad_nominal: {
        type: DataTypes.INTEGER,
    },
    gph: {
        type: DataTypes.INTEGER,
    },
    rpm: {
        type: DataTypes.INTEGER,
    },
    rpm_nominal: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false,
    tableName: 'VEL_OPTIMA',
    freezeTableName: true
});