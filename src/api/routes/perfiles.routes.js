const express = require("express");
const perfilesRouter = express.Router();

const {getPerfil, getPerfilbyId, postPerfil, putPerfil, deletePerfil} = require ('../controllers/perfiles.controllers')

const {isAuth} = require("../../middlewares/auth")
const upload = require("../../middlewares/upload.file");

perfilesRouter.get("/", getPerfil)
perfilesRouter.get("/perfil/:id",getPerfilbyId)
perfilesRouter.post("/", postPerfil)
perfilesRouter.put("/:id", putPerfil)
perfilesRouter.delete("/:id", deletePerfil)

module.exports = perfilesRouter