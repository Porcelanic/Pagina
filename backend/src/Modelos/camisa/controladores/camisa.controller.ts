import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { camisaService } from '../servicios/camisa.services';
import { actualizarCamisaDto, crearCamisaDto } from '../dto/camisa.dto';



@Controller('camisa')
export class camisaController {
  constructor(private camisaService: camisaService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.camisaService.prueba();
  }

  @Post('crearCamisa')
  @UsePipes(new ValidationPipe())
  async crearCamisa(@Body() data: crearCamisaDto) {
    return await this.camisaService.crearCamisa(data);
  }

  @Get('consultarCamisa')
  async consultarCamisa(){
    return await this.camisaService.consultarTodos();
  }

  @Get('consultarIdCamisa/:idCamisa')
  async consultarCamisaMarca(@Param('idCamisa')  idCamisa: number){
    return await this.camisaService.consultarTodosMarca(idCamisa);
  }
  


}