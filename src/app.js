import express from "express"
import mockRouter from "./routes/mockRoutes.js"

const PORT = 8080
 
const app = express()

app.use("/api/mock", mockRouter)


app.listen(PORT, () => {
    console.log('Servidor en ejecución en el puerto ' + PORT);
});

