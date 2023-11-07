import { Controller,Body,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { empleadoModel } from './empleadoModel';
@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio:EmpleadosService){}

    @Get()
    getEmpleado(){
        return this.servicio.getEmpleado();
    }
    @Post()
    agregarEmpleado(@Body()modelo:empleadoModel){
        return this.servicio.agregarEmpleado(modelo);
    }
    @Get(':id')
    getEmpleadoByID(@Param('id') id:string){
        return this.servicio.getEmpleadoByID(id);
    }
    @Delete(':id')
    eliminarEmpleado(@Param('id') id:number){
        return this.servicio.eliminarEmpleado(id);
    }
    @Put(':id/salario')
    modificarSalario(@Param('id') id:number,@Body('salario') salario:number){
        return this.servicio.modificarSalario(id,salario);
    }
    
}
