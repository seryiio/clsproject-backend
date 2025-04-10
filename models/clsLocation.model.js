import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const CLS_LOCATION = sequelize.define(
  "CLS_LOCATION",
  {
    UID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    ID_LOCATION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ID_MOBILE: {
      type: DataTypes.INTEGER,
    },
    DATE: {
      type: DataTypes.TIME,
    },
    CLASS: {
      type: DataTypes.STRING,
    },
    X: {
      type: DataTypes.FLOAT,
    },
    Y: {
      type: DataTypes.FLOAT,
    },
    HEADING: {
      type: DataTypes.INTEGER,
    },
    SPEED: {
      type: DataTypes.INTEGER,
    },
    ACCURACY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LOCATION_TYPE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LATITUDE: {
      type: DataTypes.FLOAT,
    },
    LONGITUDE: {
      type: DataTypes.FLOAT,
    },
  },
  {
    tableName: "CLS_LOCATION",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    hasPrimaryKeys: true,
  }
);
