import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateProductoDto{

    @IsString()
    nombre: string;

    @IsNumber()
    precio: number;

    @IsBoolean()
    estado: boolean
}