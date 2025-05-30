import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {

    constructor(private readonly prodService: ProductoService){
    }

    @Get()
    funListar(){
        return this.prodService.listar();
    }

    @Post()
    crear(@Body() datos: CreateProductoDto){
        
        return this.prodService.guardar(datos);
    }

    @Get(":id")
    mostrar(@Param('id') id: number){
        return this.prodService.mostrar(id)
    }

    @Patch(':id')
    modificar(@Param('id') id: number, @Body() datos: UpdateProductoDto){
        return this.prodService.modificar(id, datos);
    }

    @Delete(':id')
    funEliminar(@Param('id') id: number){
        return this.prodService.eliminar(id);
    }

}
