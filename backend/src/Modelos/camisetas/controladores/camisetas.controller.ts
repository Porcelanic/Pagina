import { camisetasService } from './../servicios/camisetas.services';
//import { camisetasService } from '../servicios/camisetas.services';
import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { crearCamisetasDto, actualizarCamisetasDto, identificadorCamisetasDto } from '../dto/camisetas.dto';

@Controller('camisetas')
export class camisetasController {
    constructor(private camisetasService: camisetasService) {}

    @Get('prueba')
    findAll(): string {
        return this.camisetasService.prueba();
    }

    @Post('crearCamisetas')
    @UsePipes(new ValidationPipe())
    async crearCamisetas(@Body() data: crearCamisetasDto) {
        return await this.camisetasService.crearCamisetas(data);
    }

    @Get('consultarCamisetas')
    async consultarCamisetas() {
        return await this.camisetasService.consultarTodos();
    }

    @Get('consultarCamisetas/:nombre')
    async consultarCamisetasNombre(@Param('nombre') nombre: string, @Body() data: identificadorCamisetasDto) {
        return await this.camisetasService.consultarCamisetas(nombre, data);
    }

    @Get('consultarTipo/:tipo')
  async consultarTipo(@Param('tipo') tipo: string){
    return await this.camisetasService.consultarTipo(tipo);
  }

    @Get('consultarDesign/:design')
    async consultarDiseño(@Param('design') design: string) {
        return await this.camisetasService.consultarDiseño(design);
    }


    @Delete('eliminarCamisetas/:nombre')
    @UsePipes(new ValidationPipe())
    async eliminarEstampado(@Param('nombre') nombre: string, @Body() data: identificadorCamisetasDto) {
        return await this.camisetasService.eliminarCamisetas(nombre, data);
    }
}