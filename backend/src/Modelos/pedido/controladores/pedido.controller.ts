import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { pedidoService } from '../servicios/pedido.services';
import { actualizarPedidoDto, crearPedidoDto } from '../dto/pedido.dto';



@Controller('pedido')
export class PedidoController {
  constructor(private pedidoService: pedidoService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.pedidoService.prueba();
  }

  @Post('crearPedido')
  @UsePipes(new ValidationPipe())
  async crearPedido(@Body() data: crearPedidoDto) {
    return await this.pedidoService.crearPedido(data);
  }

  @Get('consultarPedido')
  async consultarPedido(){
    return await this.pedidoService.consultarTodos();
  }

  @Get('consultarNumeroPedido/:numeroPedido')
  async consultarNombre(@Param('numeroPedido') numeroPedido: string){
    return await this.pedidoService.consultarPedido(numeroPedido);
  }

  @Put('actualizarPedido/:numeroPedido')
  @UsePipes(new ValidationPipe())
  async actualizarPedido(@Param('numeroPedido') numeroPedido: number, @Body() data: actualizarPedidoDto) {
    return await this.pedidoService.actualizarPedido(numeroPedido, data);
  }

  @Delete('eliminarPedido/:numeroPedido')
  @UsePipes(new ValidationPipe())
  async eliminarPedido(@Param('numeroPedido') numeroPedido: number) {
    return await this.pedidoService.eliminarPedido(numeroPedido);
  }

}