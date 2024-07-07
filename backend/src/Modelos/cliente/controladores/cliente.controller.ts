import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { clienteService } from '../servicios/cliente.services';
import { actualizarClienteDto, crearClienteDto } from '../dto/cliente.dto';
import { crearLoginDto } from '../dto/login.dto';



@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: clienteService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.clienteService.prueba();
  }

  @Post('crearCliente')
  @UsePipes(new ValidationPipe())
  async crearCliente(@Body() data: crearClienteDto) {
    return await this.clienteService.crearCliente(data);
  }

  @Get('consultarCliente')
  async consultarCliente(){
    return await this.clienteService.consultarTodos();
  }

  @Get('consultarEmail/:email')
  async consultarEmail(@Param('email') email: string){
    return await this.clienteService.consultarEmail(email);
  }

  @Put('actualizarCliente/:email')
  @UsePipes(new ValidationPipe())
  async actualizarCliente(@Param('email') email: string, @Body() data: actualizarClienteDto) {
    return await this.clienteService.actualizarCliente(email, data);
  }

  @Delete('eliminarCliente/:email')
  @UsePipes(new ValidationPipe())
  async eliminarCliente(@Param('email') email: string) {
    return await this.clienteService.eliminarCliente(email);
  }


  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: crearLoginDto) {
    return this.clienteService.login(data);
  }  

}