const mongoose = require("mongoose");
const Schema = mongoose.Schema 

const projectsSchema = new Schema(
    {
        id: {type: String, require:true},
        id_user:{type: Schema.Types.ObjectId, ref:"perfilUsuario"},
        name_project: {type: String, require:true},
        imagen_project: {type:String},
        frameworks: {type:String},
        description: {type:String},
        enlace_git: {type:String},
        enlace_proyecto: {type:String},
   },{
      timestamps: true 
   }
)

const projectsUsuario = mongoose.model("projectsUsuario", projectsSchema);

module.exports = projectsUsuario;