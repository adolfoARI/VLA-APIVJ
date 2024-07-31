const express = require("express");
const router = express.Router();
const videoJuegosController = require("../Controllers/VideoJuegosController")

router
    .get("/ObtenerLosVideoJuegos", videoJuegosController.ObtenerTodosLosVideoJuegos)


module.exports = router;



