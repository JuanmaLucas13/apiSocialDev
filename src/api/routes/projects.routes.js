const express = require("express");
const projectsRouter = express.Router();

const {getProjects, getProjectbyId, postProject, putProject, deleteProject} = require ('../controllers/projects.controllers')

const {isAuth} = require("../../middlewares/auth")
const upload = require("../../middlewares/upload.file");

projectsRouter.get("/", getProjects)
projectsRouter.get("/project/:id",getProjectbyId)
projectsRouter.post("/", upload.single('imagen'), postProject)
projectsRouter.put("/:id", upload.single('imagen'), putProject)
projectsRouter.delete("/:id", deleteProject)

module.exports = projectsRouter