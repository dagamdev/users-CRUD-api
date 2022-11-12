import { app } from "./app";
import { envConfig } from "./config"
console.log(envConfig)

app.listen(envConfig.port, () => {
  console.log('Server is runing in port:', envConfig.port)
})