const express = require("express");
const perfilesRouter = express.Router();

const {getPerfil, getPerfilbyId, getPerfilesNews, postPerfil, putPerfil, deletePerfil} = require ('../controllers/perfiles.controllers')

const {isAuth} = require("../../middlewares/auth")
const upload = require("../../middlewares/upload.file");

perfilesRouter.get("/lista", getPerfil)
perfilesRouter.get("/novedad", getPerfilesNews)
perfilesRouter.get("/perfil/:id",getPerfilbyId)
perfilesRouter.get("/novedad", getPerfilesNews)
perfilesRouter.post("/", upload.single('imagen'), postPerfil)
perfilesRouter.put("/:id", upload.single('imagen'), putPerfil)
perfilesRouter.delete("/delete/:id", deletePerfil)

module.exports = perfilesRouter