const Project = require('../models/projects.models');
const { deleteFile } = require("../../middlewares/delete.file");

const getProjects = async (req, res) => {
    try {
       const allProjects = await Project.find();
       if (allProjects.length == 0)
          return res.status(404).json({message:"No hay proyectos de usuario asociados."});   
     
       return res.status(200).json(allProjects);   
    } catch (error) {
    //  console.log(error);
      return res.status(500).json(error);
    }
 }
 
 const getProjectbyId = async (req, res) => {
     try {
         const {id} = req.params;
 
         const findProject = await Project.findById(id);
         if (!findProject)
          {
            return res.status(404).json({message:"No hay proyectos de usuario con el id indicado"});
          }

          return res.status(200).json(findProject);
      } catch (error) {
        return res.status(500).json(error);
      }
   }
 
const postProject = async (req, res) => {
    try {
       const newProject = new Project(req.body);
 
       if (req.file)
       {
          newProject.imagen = req.file.path;
       }
       
       //el metodo save nos sirve para guardar un elemento en BBDD
       const createdProject = await newProject.save();  
 
       return res.status(201).json(createdProject);
 
    } catch (error) {
        return res.status(500).json(error);
    }
 }; 
 
 const putProject = async (req, res) =>  {
    try {
        const {id} = req.params;
        const putProject = new Project(req.body);
        putProject._id = id;
 
        if (req.file)
        {
            putProject.imagen = req.file.path;
        }
        const updatedProject = await Pais.findByIdAndUpdate(id, putProject, {new: true});
        if(!updatedProject){
            return res.status(404).json({message: 'No tenemos proyectos de usuario con ese ID'}); 
         }
        if(updatedProject.imagen !== putProject.imagen){
             deleteFile(updatedProject.imagen);
         }
 
 
        return res.status(200).json(updatedProject);
    } catch (error) {
        return res.status(500).json(error);
    }
 };
 
 const deleteProject = async (req, res) =>  {
    try {
        const {id} = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);
 
        if(!deletedProject){
            return res.status(404).json({message: 'No tenemos proyecto de usuario con ese ID'}); 
         }
 
        if (deletedProject.imagen)
            deleteFile(deletedProject.imagen)
 
        return res.status(200).json(deletedProject);
    } catch (error) {
        return res.status(500).json(error);
    }
 };
 
 module.exports = {getProjects, getProjectbyId, postProject, putProject, deleteProject} 
