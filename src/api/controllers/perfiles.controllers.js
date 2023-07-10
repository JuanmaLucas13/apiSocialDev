const Perfil = require('../models/perfiles.models');
const { deleteFile } = require("../../middlewares/delete.file");

const getPerfil = async (req, res) => {
   try {
      const perfilSelect = await Perfil.find();
      if (perfilSelect.length == 0)
         return res.status(404).json({message:"No hay perfil de usuario asociado."});   
    
      return res.status(200).json(perfilSelect);   
   } catch (error) {
    console.log(error);
     return res.status(500).json(error);
   }
}

const getPerfilbyId = async (req, res) => {
    try {
        const {id} = req.params;

        const findPerfil = await Perfil.findById(id);
        if (!findPerfil)
         {
           return res.status(404).json({message:"No hay perfiles de usuario con el id indicado"});
         }
        return res.status(200).json(findPerfil);
     } catch (error) {
       return res.status(500).json(error);
     }
  }
 
const postPerfil = async (req, res) => {
   try {
      const newPerfil = new Perfil(req.body);

      if (req.file)
      {
         newPerfil.image_profile = req.file.path;
      }
      
      //el metodo save nos sirve para guardar un elemento en BBDD
      const createdPerfil = await newPerfil.save();  

      return res.status(201).json(createdPerfil);

   } catch (error) {
       return res.status(500).json(error);
   }
}; 

const putPerfil = async (req, res) =>  {
   try {
       const {id} = req.params;
       const putPerfil = new Perfil(req.body);
       putPerfil._id = id;

       if (req.file)
       {
          newPerfil.image_profile = req.file.path;
       }
       const updatedPerfil = await Perfil.findByIdAndUpdate(id, putPerfil, {new: true});
       if(!updatedPerfil){
           return res.status(404).json({message: 'No tenemos perfiles de usuario con ese ID'}); 
        }
       if(updatedPerfil.image_profile !== putPerfil.image_profile){
            deleteFile(updatedPerfil.image_profile);
        }


       return res.status(200).json(updatedPerfil);
   } catch (error) {
       return res.status(500).json(error);
   }
};

const deletePerfil = async (req, res) =>  {
   try {
       const {id} = req.params;
       const deletedPerfil = await Perfil.findByIdAndDelete(id);

       if(!deletedPerfil){
           return res.status(404).json({message: 'No tenemos perfiles de usuario con ese ID'}); 
        }

       if (deletedPerfil.image_profile)
           deleteFile(deletedPerfil.image_profile)

       return res.status(200).json(deletePerfil);
   } catch (error) {
       return res.status(500).json(error);
   }
};

module.exports = {getPerfil, getPerfilbyId, postPerfil, putPerfil, deletePerfil} 