import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { administradorService } from '../servicios/administrador.services';
import { actualizarAdministradorDto, crearAdministradorDto } from '../dto/administrador.dto';
import { crearLoginDto } from '../dto/login.dto';



@Controller('administrador')
export class AdministradorController {
  constructor(private administradorService: administradorService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.administradorService.prueba();
  }

  @Post('crearAdministrador')
  @UsePipes(new ValidationPipe())
  async crearAdministrador(@Body() data: crearAdministradorDto) {
    return await this.administradorService.crearAdministrador(data);
  }

  @Get('consultarAdministrador')
  async consultarAdministrador(){
    return await this.administradorService.consultarTodos();
  }

  @Get('consultarEmail/:email')
  async consultarEmail(@Param('email') email: string){
    return await this.administradorService.consultarEmail(email);
  }

  @Put('actualizarAdministrador/:email')
  @UsePipes(new ValidationPipe())
  async actualizarAdministrador(@Param('email') email: string, @Body() data: actualizarAdministradorDto) {
    return await this.administradorService.actualizarAdministrador(email, data);
  }

  @Delete('eliminarAdministrador/:email')
  @UsePipes(new ValidationPipe())
  async eliminarAdministrador(@Param('email') email: string) {
    return await this.administradorService.eliminarAdministrador(email);
  }


  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: crearLoginDto) {
    return this.administradorService.login(data);
  }  

}