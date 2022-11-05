import { config } from "dotenv"
config()

// const PV = process.env
// const sss = PV.JWT_SECRET

const PV = process.env
export const envConfig = {
  port: PV.PORT || 2468,
  nodeEnv: PV.NODE_ENV || 'development',
  host: PV.HOST,
  domain: PV.DOMAIN,
  db: {
    dbHost: PV.DB_HOST || 'localhost',
    userName: PV.DB_USER || 'postgres',
    password: PV.DB_PASSWORD || 'root',
    dbName: PV.DB_NAME
  }
}