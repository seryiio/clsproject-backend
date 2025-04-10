import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { User } from "./userCLS.model.js";
import { Role } from "./roleCLS.model.js";

export const UserRole = sequelize.define('user_role_cls',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });

User.belongsToMany(Role, { through: UserRole, foreignKey: 'userId' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleId' });