import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript";
/*import {Profesor} from './profesor';
import {Institucion} from './institucion';*/

@Table({
    tableName: 'Distinciones',
    timestamps: false
})

export class Distincion extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    idDistinciones!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    }) 
    nombre!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fechaObtencion!: Date;
/*
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    Profesores_idProfesores!:number;

    @Column({ 
        type: DataType.INTEGER,
        allowNull: false
    })
    Institucioes_idInstituciones!:number; 
************************************************************************
    /*@BelongsTo(()=>Profesor,'Profesores_idProfesores')
    profesor!:Profesor;

    @BelongsTo(()=>Institucion,'Institucioes_idInstituciones')
    institucion!:Institucion;*/
} 