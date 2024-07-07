import { estampadoService } from './../servicios/estampado.services';
import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { crearEstampadoDto, actualizarEstampadoDto, identificadorEstampadoDto } from '../dto/estampado.dto';

@Controller('estampado')
export class estampadoController {
    constructor(private estampadoService: estampadoService) {}

    @Get('prueba')
    findAll(): string {
        return this.estampadoService.prueba();
    }

    @Post('crearEstampado')
    @UsePipes(new ValidationPipe())
    async crearEstampado(@Body() data: crearEstampadoDto) {
        return await this.estampadoService.crearEstampado(data);
    }

    @Get('consultarEstampado')
    async consultarEstampado() {
        return await this.estampadoService.consultarTodos();
    }

    @Get('consultarEstampado/:nombre')
    async consultarEstampadoNombre(@Param('nombre') nombre: string, @Body() data: identificadorEstampadoDto) {
        return await this.estampadoService.consultarEstampado(nombre, data);
    }

    @Get('consultarDesign/:design')
    async consultarDiseño(@Param('design') design: string) {
        return await this.estampadoService.consultarDiseño(design);
    }

    @Put('actualizarEstampado/:nombre')
    @UsePipes(new ValidationPipe())
    async actualizarEstampado(@Param('nombre') nombre: string, @Body() data: actualizarEstampadoDto) {
        return await this.estampadoService.actualizarEstampado(nombre, data);
    }


    @Delete('eliminarEstampado/:nombre')
    @UsePipes(new ValidationPipe())
    async eliminarEstampado(@Param('nombre') nombre: string, @Body() data: identificadorEstampadoDto) {
        return await this.estampadoService.eliminarEstampado(nombre, data);
    }
}