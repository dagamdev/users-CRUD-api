import express from "express"
import cors from "cors"
import { db } from "./utils/db"
import { envConfig } from "./config"
import { router } from "./users/users.routes"
import swaggerUi from "swagger-ui-express"
import swaggerDoc from "./swagger.json"

export const app = express(), prefix = '/api/v1/'
app.use(express.json())
app.use(cors())

db.authenticate()
.then(()=> console.log('DB autenticated'))
.catch((error)=> console.log(error))

db.sync()
.then(()=> console.log('DB synced'))
.catch((error)=> console.log(error))
import "./models/users.model"

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use(prefix+'users', router)

app.get('/', (req, res)=> {
  res.status(200).send({
    message: 'ok',
    users: `https://${envConfig.domain}${envConfig.port}${prefix}users`,
    doc: `https://${envConfig.domain}/api/docs`
  })
})