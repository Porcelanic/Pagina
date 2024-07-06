import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { estampado } from '../../../database/Entidades/estampado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  crearEstampadoDto,
  actualizarEstampadoDto,
  identificadorEstampadoDto,
} from '../dto/estampado.dto';

@Injectable()
export class estampadoService {
  constructor(
    @InjectRepository(estampado)
    private estampadoRepo: Repository<estampado>,
  ) {}
  prueba(): string {
    return 'Mi primer servicio';
  }

  //Crear estampado
  async crearEstampado(data: crearEstampadoDto) {
    try {
      const user = await this.estampadoRepo.find({
        where: [{ nombre: data.nombre , artistaEmail: data.artistaEmail}],
      });
      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Este nombre ya fue usado en un estampado previo por el artista',
        };
      } else {
        const nuevoEstampado = this.estampadoRepo.create(data);
        return {
          statusCode: 201,
          message: 'Estampado creado',
          response: await this.estampadoRepo.save(nuevoEstampado),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  //Actualizar estampado
  async actualizarEstampado(nombre: string, data: actualizarEstampadoDto) {
    try {
      const user = await this.estampadoRepo.findOne({
        where: [{ nombre: nombre, artistaEmail: data.artistaEmail}],
      });


      if (user) {
        this.estampadoRepo.merge(user, data);
        return {
          statusCode: 200,
          message: 'Estampado actualizado',
          response: await this.estampadoRepo.save(user),
        };
      } else {
        return {
          statusCode: 404,
          message: 'Estampado no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

    //Consultar Cliente
    async consultarTodos() {
      return await this.estampadoRepo.find();
    }
  
    //Consultar Cliente Id
    async consultarEstampado(nombre: string, data: identificadorEstampadoDto) {
      return await this.estampadoRepo.find({ where: { nombre: nombre, artistaEmail: data.artistaEmail } });
    }

    async consultarDiseño(diseño: string) {
      return await this.estampadoRepo.findOne({ where: { diseño: diseño } });
    }

  async eliminarEstampado(nombre: string, data: identificadorEstampadoDto) {
    try {
      const user = await this.estampadoRepo.findOne({
        where: [{nombre: nombre , artistaEmail: data.artistaEmail}],
      })
      if(user){
        await this.estampadoRepo.delete(user);
        return {
          statusCode: 202,
          message: 'El estampado a sido eliminado'
        };
      }else{
        return {
          statusCode: 404,
          message: 'Estampado no encontrado'
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
