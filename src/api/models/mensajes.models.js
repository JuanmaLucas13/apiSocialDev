const mongoose = require("mongoose");
const Schema = mongoose.Schema 

const mensajesSchema = new Schema(
    {
        id: {type: String, require:true},
        email:{type: String},
        title:{type: String},
        textomsj: {type: String, require:true},
   },{
      timestamps: true 
   }
)

const msjUsuario = mongoose.model("mensajes", mensajesSchema);

module.exports = msjUsuario;