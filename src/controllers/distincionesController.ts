import { RequestHandler } from "express";
import { Distincion } from "../models/distinciones";
import {Op} from 'sequelize';

export const test: RequestHandler = async (req, res) => {
    return res.send("--Hola desde Distinciones controller--");
}

export const getDistinciones:RequestHandler = async (req,res) =>{
    const disitinciones = await Distincion.findAll();
 
    return res.status(200).json(disitinciones);  
}

export const crearDistincion:RequestHandler = async (req,res)=>{
    var distincion = await Distincion.create({
        nombre:req.body.nombre,
        fechaObtencion:req.body.fechaObtencion
    });

    return res.status(200).json(distincion); 
}  

export const actualizarDistincion:RequestHandler = async (req,res)=>{
    const {id} = req.params;
    await Distincion.update({...req.body},{where:{idDistinciones:id}});
    const distincionActualizada:Distincion | null = await Distincion.findByPk(id);
    return res.status(200)
    .json({message:"Distioncion actualizada ok",data:distincionActualizada});
}

export const obtenerDistincion:RequestHandler = async (req,res)=>{
    const {id} = req.params;
    const distincion = await Distincion.findByPk(id); 
    if(!distincion){ 
        return res.status(404).json({message:"Distincion no encontrada"});
    }
    return res.status(200).json(distincion);   
} 

export const buscarDistincion:RequestHandler = async (req,res)=>{
    const {term} = req.params;
    const distincion = await Distincion.findAll({
        where:{
            nombre:{
                [Op.like]:`%${term}%`
            }
        }
    });
    return res.status(200).json({
        message:`Se encontraron ${distincion.length} coincidencias para \'${term}\'`,
        data:distincion
    });
 
}

         