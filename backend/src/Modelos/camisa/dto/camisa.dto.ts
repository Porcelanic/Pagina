import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import {  PartialType } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';

function stringToDate({ value }: TransformFnParams) {
  return new Date(value);
}


export class crearCamisaDto {
  @IsNotEmpty()
  @IsString()
  imagen: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsString()
  talla: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsOptional()
  @IsNumber()
  idEstampado?: number;

  @IsNotEmpty()
  @IsString()
  Material: string;

  @IsNotEmpty()
  @IsNumber()
  numeroPedido: number;
}

export class actualizarCamisaDto extends PartialType(crearCamisaDto) {}