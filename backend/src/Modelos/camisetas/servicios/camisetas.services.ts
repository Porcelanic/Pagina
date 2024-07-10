import { camisetas } from './../../../database/Entidades/camisetas.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  crearCamisetasDto,
  actualizarCamisetasDto,
  identificadorCamisetasDto,
} from '../dto/camisetas.dto';

@Injectable()
export class camisetasService {
    
  constructor(
    @InjectRepository(camisetas)
    private camisetasRepo: Repository<camisetas>,
  ) {}
  prueba(): string {
    return 'Mi primer servicio';
  }

  //Crear estampado
  async crearCamisetas(data: crearCamisetasDto) {
    try {
      const user = await this.camisetasRepo.find({
        where: [{ nombre: data.nombre , adminEmail: data.adminEmail}],
      });
      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Este nombre ya fue usado en una camiseta',
        };
      } else {
        const nuevoCamiseta = this.camisetasRepo.create(data);
        return {
          statusCode: 201,
          message: 'Camiseta creado',
          response: await this.camisetasRepo.save(nuevoCamiseta),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }



async consultarTodos() {
  return await this.camisetasRepo.find();
}

//Consultar Cliente Id
async consultarCamisetas(nombre: string, data: identificadorCamisetasDto) {
  return await this.camisetasRepo.find({ where: { nombre: nombre, adminEmail: data.adminEmail } });
}

async consultarDiseño(diseño: string) {
  return await this.camisetasRepo.findOne({ where: { diseño: diseño } });
}

async consultarTipo(tipo: string) {
  return await this.camisetasRepo.find({ where: { tipo: tipo } });
}

  async eliminarCamisetas(nombre: string, data: identificadorCamisetasDto) {
    try {
      const user = await this.camisetasRepo.findOne({
        where: [{nombre: nombre , adminEmail: data.adminEmail}],
      })
      if(user){
        await this.camisetasRepo.delete(user);
        return {
          statusCode: 202,
          message: 'La camiseta ha sido eliminado'
        };
      }else{
        return {
          statusCode: 404,
          message: 'Camiseta no encontrada'
        };
      }
    } catch(error){
      return{
        statusCode:500,
        message: 'Error interno',
      }
    }
  }

}
