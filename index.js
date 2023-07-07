//Importamos la librería de express 
const express = require('express'); 

//importamos dotenv y cogemos las variables de configuracion
const dotenv = require("dotenv");
dotenv.config();

// importamos los ficheros de conexion y las rutas a usar
const{connect} = require("./src/utils/db.js")
const userRouter = require("./src/api/routes/user.routes");

// configuramos el puerto y activamos el servidor http
const PORT = process.env.PORT
const app = express(); //creamos un servidor con expressç
const cors = require("cors")

// conectamos con BBDD
connect ();

//VAMOS A PONER DE RESPUESTA
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH'); //Decimos que metodos tenemos permitidos
  res.header('Access-Control-Allow-Credentials', 'true'); //permitimos la conexión con credenciales(Bearer token)
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // permitimos los headers del tipo Content-Type
  next();
})

//VAMOS A CONFIGURAR LOS CORS
//CORS --> CORS ORIGIN RESOURCE SHARING --> Intercambio de recursos cruzados -> manera de permir el compartir recursos enntre distintos origenes
app.use(cors(
  {
    // origin: ["http://localhost:5000", "http://127.0.0.1:5000"],  //si tenemos varios origenes podemos ponerlos en un array
    origin: "*", // permito todas las conexiones
    credentials: true
  }
))

// configuramos la entrada para json.
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

// configuramos el servidor con las rutas correspondientes
app.use("/user", userRouter);

// activamos el servidor.
app.listen(PORT, () =>  console.log('listening on port', PORT)) 