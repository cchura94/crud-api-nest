import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {

    private titulo: string = "Mi Servicio";
    private productos: Producto[] = [
        {id: 1, nombre: "Teclado", precio: 45.9, estado: true},
        {id: 2, nombre: "Monitor", estado: false},
    ];
    private id = 3

    listar(): Producto[]{
        return this.productos;
    }

    guardar(datos: CreateProductoDto): Producto{
        const nuevoProducto: Producto = {
            id: this.id++,
            ...datos
        }
        this.productos.push(nuevoProducto);

        return nuevoProducto;
    }

    mostrar(id: number): Producto{
        const prod = this.productos.find(p => p.id == id);
        if(!prod){
            throw new NotFoundException('Producto no encontrado');
        }
        return prod;
    }

    modificar(id: number, datos: UpdateProductoDto): Producto{
        const producto = this.mostrar(id);
        Object.assign(producto, datos);
        return producto;
    }

    eliminar(id: number): void{
        console.log(id)
        const index = this.productos.findIndex(p => p.id == id);
        if(index === -1)
            throw new NotFoundException('Producto no encontrado');
        this.productos.splice(index, 1);
    }
    
}
