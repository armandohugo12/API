import { Router } from "express";
import { test, getDistinciones, crearDistincion,actualizarDistincion, obtenerDistincion, buscarDistincion } from "../controllers/distincionesController"


const distincionRouter = Router();

distincionRouter.get('/test', test);
distincionRouter.get('/', getDistinciones);
distincionRouter.post('/', crearDistincion);

distincionRouter.put('/:id', actualizarDistincion);
distincionRouter.get('/:id', obtenerDistincion);
distincionRouter.get('/buscar/:term', buscarDistincion);

export default distincionRouter;    