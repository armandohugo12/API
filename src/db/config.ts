import { Sequelize } from "sequelize-typescript";
import { Division } from "../models/division";
import { Distincion } from "../models/distinciones";
import { Departamento } from "../models/departamento";
import dotenv from "dotenv";
import { CentroInvestigacion } from "../models/centro_investigacion";
import { Profesor } from "../models/profesor";
import { ProfeCentroInvestigacion } from "../models/profe_centro_inv";
import { Usuario} from "../models/usuario";
dotenv.config()


const connection = new Sequelize ({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "hola123",
    database: "ExpedientesProfesores",
    logging: (...msg)=>console.log(msg),
    port: 33062,
    models: [Division,Distincion,Departamento,Profesor,CentroInvestigacion,ProfeCentroInvestigacion,Usuario]   
});
 
export default connection;      