import { Injectable } from '@nestjs/common';
import { empleadoModel } from './empleadoModel';

@Injectable()
export class EmpleadosService {

    empleados = [];
    constructor(){
        let empleado = {
            "id":0,
            "nombre":"Roberto",
            "telefono":1010,
            "salario":10000,
        }
        this.empleados.push(empleado);
        empleado = {
            "id":1,
            "nombre":"Flor",
            "telefono":1111,
            "salario":20000,
        }
        this.empleados.push(empleado);
    }
    getEmpleado(){
        return this.empleados;
    }
    getEmpleadoByID(id):string{
        return this.empleados[id]
    }
    agregarEmpleado(empleado:empleadoModel){
        let trabajor = {
            "id": empleado.id,
            "nombre": empleado.nombre,
            "telefono":empleado.telefono,
            "salario":empleado.salario,
        }
    return this.empleados.push(trabajor);
    }

    modificarEmpleado(id:number,nombre:string,telefono:number,salario:number){
        for(let i= 0; i < this.empleados.length;i ++){
            if(this.empleados[i].id == id){
                this.empleados[i].nombre = nombre;
                this.empleados[i].telefono = telefono;
                this.empleados[i].salario = salario;

                return this.empleados;
            }
        }
        return "empleado no encontrado";
    }

    eliminarEmpleado(id:number){
        for(let i = 0; i< this.empleados.length;i++){
            if (this.empleados[i].id == id){
                return this.empleados.splice(i,1);
            }
            else{
                return "alumno no encontrado";
            }
        }
    }
    modificarSalario(id:number,salarioNuevo:number){
        for(let i = 0; i< this.empleados.length;i ++){
            if(id == this.empleados[i]){
                this.empleados[i].salario = salarioNuevo;
                return this.empleados;
            }
        }
    }

}