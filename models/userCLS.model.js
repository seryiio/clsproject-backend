import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const User = sequelize.define('usercls',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
    },
    username: {

        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    timestamps: false,
});