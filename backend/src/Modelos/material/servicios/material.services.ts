import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { material } from 'src/database/Entidades/material.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { crearMaterialDto, actualizarMaterialDto } from '../dto/material.dto';

@Injectable()
export class materialService {
  constructor(
    @InjectRepository(material)
    private materialRepo: Repository<material>,
  ) {}
  prueba(): string {
    return 'Mi primer servicio';
  }

  async crearMaterial(data: crearMaterialDto) {
    try {
      const user = await this.materialRepo.find({
        where: [{ Material: data.Material }],
      });

      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Material ya creado',
        };
      } else {
        const nuevoMaterial = this.materialRepo.create(data);
        return {
          statusCode: 201,
          message: 'Material creado',
          response: await this.materialRepo.save(nuevoMaterial),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async consultarMaterial(Material: string) {
    return await this.materialRepo.findOne({where: [{Material: Material}]});
  }

  async consultarTodos(){
    return await this.materialRepo.find();
  }

  async actualizarMaterial(Material: string, data: actualizarMaterialDto) {
    try {
      const user = await this.materialRepo.findOne({
        where: [{ Material: Material }],
      });

      if (user) {
        if (data.Material == null || data.Material == Material) {
          data.cantidad = user.cantidad-data.cantidad;
          await this.materialRepo.merge(user, data);
          return {
            statusCode: 200,
            message: 'Material actualizado',
            response: await this.materialRepo.save(user),
          };
        } else {
            return {
                statusCode: 400,
                message: 'El Material no es un campo editable',
            }
        }
      } else {
        return {
          statusCode: 404,
          message: 'Material no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async eliminarMaterial(Material: string) {
    try {
      const user = await this.materialRepo.findOne({
        where: [{ Material: Material }],
      });

      if (user) {
        await this.materialRepo.delete(user);
        return {
          statusCode: 200,
          message: 'Material eliminado',
        };
      } else {
        return {
          statusCode: 404,
          message: 'Material no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }
}
