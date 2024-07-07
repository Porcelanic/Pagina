import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class crearEstampadoDto {
  @IsNotEmpty()
  @IsString()
  diseño: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  categoria: string;

  @IsNotEmpty()
  @IsString()
  artistaEmail: string;
}

export class actualizarEstampadoDto extends PartialType(crearEstampadoDto) {}

export class identificadorEstampadoDto {
  @IsEmail()
  @IsString()
  artistaEmail: string;
}
