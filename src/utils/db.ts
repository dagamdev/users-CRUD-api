import { Sequelize } from "sequelize";
import { envConfig } from "../config"

export const db = new Sequelize({
  dialect: 'postgres',
  host: envConfig.db.dbHost,
  username: envConfig.db.userName,
  password: envConfig.db.password,
  database: envConfig.db.dbName,
  dialectOptions: process.env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {}
})