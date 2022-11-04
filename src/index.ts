import { app } from "./app";
import { envConfig } from "./config"

app.listen(envConfig.port, () => {
  console.log('Server is runing in port:', envConfig.port)
})