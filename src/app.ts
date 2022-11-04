import express from "express"
import cors from "cors"
import { db } from "./utils/db"
import { envConfig } from "./config"
import { router } from "./users/users.routes"

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

app.use(prefix+'users', router)

app.get(prefix, (req, res)=> {
  res.status(200).send({
    message: 'ok',
    users: `http://localhost:${envConfig.port}${prefix}users`
  })
})