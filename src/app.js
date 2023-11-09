import express from "express"
import mockRouter from "./routes/mockRoutes.js"
import productRoutes  from "./routes/addProductos.js"
import mongoose from "mongoose"


const PORT = 8080
 
const app = express()

app.use (express.json())

mongoose.connect("mongodb+srv://nehuengiannone:Lz7n3cS0vO7ulfvk@cluster0.s1deur4.mongodb.net/?retryWrites=true&w=majority")
.then (() => {
    console.log("conexion exitosa a mongodb")
})
.catch(error => {
    console.error ("error de conexion", error)
})

app.use("/api/mockingproducts", mockRouter)
app.use ("/api/products", productRoutes)


app.listen(PORT, () => {
    console.log('Servidor en ejecución en el puerto ' + PORT);
});

