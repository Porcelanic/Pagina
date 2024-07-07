import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {  PartialType } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';

function stringToDate({ value }: TransformFnParams) {
  return new Date(value);
}


export class crearClienteDto {
    @IsNotEmpty()
    @IsEmail() 
    email: string;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}

export class actualizarClienteDto extends PartialType(crearClienteDto) {}