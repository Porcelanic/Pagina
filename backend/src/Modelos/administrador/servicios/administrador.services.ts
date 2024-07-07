import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { administrador } from 'src/database/Entidades/administrador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { crearLoginDto } from '../dto/login.dto';
import { crearAdministradorDto, actualizarAdministradorDto } from '../dto/administrador.dto';

@Injectable()
export class administradorService {
  constructor(
    @InjectRepository(administrador)
    private administradorRepo: Repository<administrador>,
  ) {}

  prueba(): string {
    return 'Mi primer servicio';
  }

  async login(data: crearLoginDto) {
    try {
      const user = await this.administradorRepo.find({
        where: [{ email: data.email, password: data.password }],
      });
      if (user.length == 0) {
        return {
          statusCode: 404,
          message: 'Administrador o contraseña incorrectos',
        };
      }
      return {
        statusCode: 200,
        user: user,
        Response: true,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  //Crear Administrador
  async crearAdministrador(data: crearAdministradorDto) {
    try {
      const user = await this.administradorRepo.find({
        where: [{ email: data.email }],
      });

      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Administrador ya creado',
        };
      } else {
        const nuevoAdministrador = this.administradorRepo.create(data);
        return {
          statusCode: 201,
          message: 'Administrador creado',
          response: await this.administradorRepo.save(nuevoAdministrador),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  //Consultar Administrador
  async consultarTodos() {
    return await this.administradorRepo.find();
  }

  //Consultar Administrador Id
  async consultarEmail(email: string) {
    return await this.administradorRepo.findOne({ where: { email: email } });
  }

  //actualizar Administrador
  async actualizarAdministrador(email: string, data: actualizarAdministradorDto) {
    try {
      const user = await this.administradorRepo.findOne({
        where: { email: email },
      });
      if (user) {
        if (data.email == null || data.email == email) {
          await this.administradorRepo.merge(user, data);
          return {
            statusCode: 201,
            message: 'El administrador ha sido actualizado',
            response: await this.administradorRepo.save(user),
          };
        } else{
          return {
            statusCode: 200,
            message: 'El email no es un campo editable',
          }
        }
      } else {
        return {
          statusCode: 200,
          message: 'Administrador no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async eliminarAdministrador(email: string) {
    try {
      const user = await this.administradorRepo.findOne({
        where: { email: email },
      });
      if (user) {
        await this.administradorRepo.delete(user);
        return {
          statusCode: 202,
          message: 'El administrador ha sido eliminado',
        };
      } else {
        return {
          statusCode: 200,
          message: 'Administrador no encontrado',
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
