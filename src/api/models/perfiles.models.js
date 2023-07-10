const mongoose = require("mongoose");
const Schema = mongoose.Schema 

const perfilesSchema = new Schema(
    {
        id: {type: String, require:true},
        id_user:{type: Schema.Types.ObjectId, ref:"user"},
        name: {type: String, require:true},
        lastname: {type:String, require:true},
        image_profile: {type:String},
        email: {type:String},
        addnews: {type:String, default:"N"},
        description: {type:String},
        enlace_git: {type:String},
        enlace_linkedin: {type:String},
   },{
      timestamps: true 
   }
)

const perfilUsuario = mongoose.model("perfilUsuario", perfilesSchema);

module.exports = perfilUsuario;