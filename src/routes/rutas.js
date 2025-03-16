import express from "express";
import authControlador from "./../controlador/auth.controlador";


const Router = express.Router();

// http://127.0.0.1:3000/api/v1/auth/login

Router.post("/auth/login", authControlador.funLogin);
Router.post("/auth/registrar", authControlador.funRegistrar);
Router.get("/auth/perfil", authControlador.funPerfil);
Router.post("/auth/logout", authControlador.funLogout);

export default Router;