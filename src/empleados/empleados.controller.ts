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
    
    @Get(':id')
    getEmpleadoByID(@Param('id') id:number){
        return this.servicio.getEmpleadoById(id);
    }
    @Delete(':id')
    eliminarEmpleado(@Param('id') id:string){
        return this.servicio.eliminarEmpleado(id);
    }
    
    @Put(':id')
    modificarSalario(@Body() salario: empleadoModel,@Param('id') id:string){
        return this.servicio.modificarSalario(id, salario);
    }
    @Post()
    agregarEmpleado(@Body() modelo: empleadoModel){
        return this.servicio.agregarEmpleado(modelo);
    }
    
}
