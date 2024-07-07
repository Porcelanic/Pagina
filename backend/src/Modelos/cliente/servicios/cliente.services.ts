import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { cliente } from 'src/database/Entidades/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { crearLoginDto } from '../dto/login.dto';
import { crearClienteDto, actualizarClienteDto } from '../dto/cliente.dto';

@Injectable()
export class clienteService {
  constructor(
    @InjectRepository(cliente)
    private clienteRepo: Repository<cliente>,
  ) {}

  prueba(): string {
    return 'Mi primer servicio';
  }

  async login(data: crearLoginDto) {
    try {
      const user = await this.clienteRepo.find({
        where: [{ email: data.email, password: data.password }],
      });
      if (user.length == 0) {
        return {
          statusCode: 404,
          message: 'Cliente o contraseña incorrectos',
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

  //Crear Cliente
  async crearCliente(data: crearClienteDto) {
    try {
      const user = await this.clienteRepo.find({
        where: [{ email: data.email }],
      });

      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Cliente ya creado',
        };
      } else {
        const nuevoCliente = this.clienteRepo.create(data);
        return {
          statusCode: 201,
          message: 'Cliente creado',
          response: await this.clienteRepo.save(nuevoCliente),
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
    return await this.clienteRepo.find();
  }

  //Consultar Cliente Id
  async consultarEmail(email: string) {
    return await this.clienteRepo.findOne({ where: { email: email } });
  }

  //actualizar Cliente
  async actualizarCliente(email: string, data: actualizarClienteDto) {
    try {
      const user = await this.clienteRepo.findOne({
        where: { email: email },
      });
      if (user) {
        if (data.email == null || data.email == email) {
          await this.clienteRepo.merge(user, data);
          return {
            statusCode: 201,
            message: 'El cliente ha sido actualizado',
            response: await this.clienteRepo.save(user),
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
          message: 'Cliente no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async eliminarCliente(email: string) {
    try {
      const user = await this.clienteRepo.findOne({
        where: { email: email },
      });
      if (user) {
        await this.clienteRepo.delete(user);
        return {
          statusCode: 202,
          message: 'El cliente ha sido eliminado',
        };
      } else {
        return {
          statusCode: 200,
          message: 'Cliente no encontrado',
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
