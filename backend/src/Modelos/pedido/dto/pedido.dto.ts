import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {  PartialType } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';

function stringToDate({ value }: TransformFnParams) {
    return new Date(value);
  }

export class crearPedidoDto {
    @IsNotEmpty()
    @IsNumber()
    valor: number;

    @IsNotEmpty()
    @IsString()
    estado: string;

    @IsNotEmpty()
    @Transform(stringToDate)
    fechaPedido: Date;

    @IsNotEmpty()
    @Transform(stringToDate)
    fechaEnvio: Date;

    @IsNotEmpty()
    @IsEmail()
    clienteEmail: string;
    
    @IsNotEmpty()
    @IsNumber()
    informacionEnvioId: number;
}

export class actualizarPedidoDto extends PartialType(crearPedidoDto) {}