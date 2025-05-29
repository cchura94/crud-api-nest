import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity';

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

    guardar(datos: any): Producto{

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

    modificar(id: number, datos: any): string{
        return "Esto es Modificar producto desde ProductoService: "+id;
    }

    eliminar(id: number): string{
        return "Esto es Eliminar producto desde ProductoService: "+id;
    }
    
}
