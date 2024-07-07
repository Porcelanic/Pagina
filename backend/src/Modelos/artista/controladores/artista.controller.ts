import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { artistaService } from '../servicios/artista.services';
import { actualizarArtistaDto, crearArtistaDto } from '../dto/artista.dto';
import { crearLoginDto } from '../dto/login.dto';



@Controller('artista')
export class ArtistaController {
  constructor(private artistaService: artistaService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.artistaService.prueba();
  }

  @Post('crearArtista')
  @UsePipes(new ValidationPipe())
  async crearArtista(@Body() data: crearArtistaDto) {
    return await this.artistaService.crearArtista(data);
  }

  @Get('consultarArtista')
  async consultarArtista(){
    return await this.artistaService.consultarTodos();
  }

  @Get('consultarArtista/:email')
  async consultarArtistaEmail(@Param('email') email: string){
    return await this.artistaService.consultarArtista(email);
  }

  @Get('consultarEmail/:email')
  async consultarEmail(@Param('email') email: string){
    return await this.artistaService.consultarEmail(email);
  }

  @Put('actualizarArtista/:email')
  @UsePipes(new ValidationPipe())
  async actualizarArtista(@Param('email') email: string, @Body() data: actualizarArtistaDto) {
    return await this.artistaService.actualizarArtista(email, data);
  }

  @Delete('eliminarArtista/:email')
  @UsePipes(new ValidationPipe())
  async eliminarArtista(@Param('email') email: string) {
    return await this.artistaService.eliminarArtista(email);
  }


  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: crearLoginDto) {
    return this.artistaService.login(data);
  }  

}