import express from "express";

//declaramos app
const app = express();

//declaramos una ruta
app.get("/", function(req, res){
    return res.send({mensaje: "Bienvenido a node js"});
});

//para el saludo
app.get("/saludo", function(req, res){
    return res.json({mensaje: "Saludos desde DEVS rodrigo"});
});

//aqui vamos a escuchar el puerto iniciar el servidor
app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000");
});