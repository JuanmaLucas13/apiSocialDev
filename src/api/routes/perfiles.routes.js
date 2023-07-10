const express = require("express");
const perfilesRouter = express.Router();

const {getPerfil, getPerfilbyId, postPerfil, putPerfil, deletePerfil} = require ('../controllers/perfiles.controllers')

const {isAuth} = require("../../middlewares/auth")
const upload = require("../../middlewares/upload.file");

perfilesRouter.get("/lista", getPerfil)
perfilesRouter.get("/:id",getPerfilbyId)
perfilesRouter.post("/", upload.single('imagen'), postPerfil)
perfilesRouter.put("/:id", upload.single('imagen'), putPerfil)
perfilesRouter.delete("/delete/:id", deletePerfil)

module.exports = perfilesRouter