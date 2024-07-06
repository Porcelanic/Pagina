import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {  PartialType } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';

export class crearMaterialDto {
    @IsNotEmpty()
    @IsString()
    Material: string;

    @IsNotEmpty()
    @IsNumber()
    cantidad:number;
}

export class actualizarMaterialDto extends PartialType(crearMaterialDto) {}