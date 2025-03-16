//importamos express
import express from "express";
//importamos la ruta
import urlRutas from "./routes/rutas";

//declaramos app
const app = express();

//aqui para la ruta base
app.use("/api/v1", urlRutas);

//aqui vamos a escuchar el puerto iniciar el servidor
app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000");
});