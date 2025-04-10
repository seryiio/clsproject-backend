import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Role = sequelize.define('rolescls', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    }
}, { timestamps: false });
