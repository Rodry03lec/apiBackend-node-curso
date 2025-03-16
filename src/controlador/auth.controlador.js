//aqui lo podemos llamar al modelo ya creado

//crear las funciones pero siempre exportando
export default {
    //req = para optener datos del navegador
    //res = es por parte del servidor
    funLogin(req, res) {
        res.json({ mensaje: "logueando" });
    },
    funRegistrar(req, res) {
        res.json({ mensaje: "Opteniendo el perfil" });
    },
    funPerfil(req, res) {
        return res.json({ mensaje: "hola desde funcion perfil" });
    },
    funLogout(req, res) {
        res.json({ mensaje: "Saliendo" });
    },
};
