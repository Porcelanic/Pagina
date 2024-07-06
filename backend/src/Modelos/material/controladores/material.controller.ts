import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { materialService } from '../servicios/material.services';
import { actualizarMaterialDto, crearMaterialDto } from '../dto/material.dto';



@Controller('material')
export class MaterialController {
  constructor(private materialService: materialService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.materialService.prueba();
  }

  @Post('crearMaterial')
  @UsePipes(new ValidationPipe())
  async crearMaterial(@Body() data: crearMaterialDto) {
    return await this.materialService.crearMaterial(data);
  }

  @Get('consultarMaterial')
  async consultarMaterial(){
    return await this.materialService.consultarTodos();
  }

  @Get('consultarNombre/:Material')
  async consultarNombre(@Param('Material') Material: string){
    return await this.materialService.consultarMaterial(Material);
  }

  @Put('actualizarMaterial/:Material')
  @UsePipes(new ValidationPipe())
  async actualizarMaterial(@Param('Material') Material: string, @Body() data: actualizarMaterialDto) {
    return await this.materialService.actualizarMaterial(Material, data);
  }

  @Delete('eliminarMaterial/:Material')
  @UsePipes(new ValidationPipe())
  async eliminarMaterial(@Param('Material') Material: string) {
    return await this.materialService.eliminarMaterial(Material);
  }

}