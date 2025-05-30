import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger" 

export class CreateProductoDto{

    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @ApiPropertyOptional()
    precio: number;

    @ApiProperty()
    @IsBoolean()
    estado: boolean
}