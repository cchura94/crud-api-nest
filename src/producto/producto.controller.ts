import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    constructor(private readonly prodService: ProductoService){

    }

    @Get()
    funListar(){
        return this.prodService.listar();
    }

    @Post()
    crear(@Body() datos: any){
        return this.prodService.guardar(datos);
    }

    @Get(":id")
    mostrar(@Param('id') id: number){
        return this.prodService.mostrar(id)
    }

    @Patch(':id')
    modificar(){
        return this.prodService.modificar(4, {});
    }

    @Delete(':id')
    funEliminar(){
        return this.prodService.eliminar(4);
    }

}
