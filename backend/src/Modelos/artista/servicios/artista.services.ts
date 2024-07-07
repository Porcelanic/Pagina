import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { artista } from 'src/database/Entidades/artista.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { crearLoginDto } from '../dto/login.dto';
import { crearArtistaDto, actualizarArtistaDto } from '../dto/artista.dto';

@Injectable()
export class artistaService {
  constructor(
    @InjectRepository(artista)
    private artistaRepo: Repository<artista>,
  ) {}

  prueba(): string {
    return 'Mi primer servicio';
  }

  async login(data: crearLoginDto) {
    try {
      const user = await this.artistaRepo.find({
        where: [{ email: data.email, password: data.password }],
      });
      if (user.length == 0) {
        return {
          statusCode: 404,
          message: 'Artista o contraseña incorrectos',
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

  //Crear Artista
  async crearArtista(data: crearArtistaDto) {
    try {
      const user = await this.artistaRepo.find({
        where: [{ email: data.email }],
      });

      if (user.length > 0) {
        return {
          statusCode: 200,
          message: 'Artista ya creado',
        };
      } else {
        const nuevoArtista = this.artistaRepo.create(data);
        return {
          statusCode: 201,
          message: 'Artista creado',
          response: await this.artistaRepo.save(nuevoArtista),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  //Consultar Artista
  async consultarTodos() {
    return await this.artistaRepo.find();
  }

  async consultarArtista(email: string) {
    return await this.artistaRepo.findOne({ where: { email: email } });
  }

  //Consultar Artista Id
  async consultarEmail(email: string) {
    return await this.artistaRepo.findOne({ where: { email: email } });
  }

  //actualizar Artista
  async actualizarArtista(email: string, data: actualizarArtistaDto) {
    try {
      const user = await this.artistaRepo.findOne({
        where: { email: email },
      });
      if (user) {
        if (data.email == null || data.email == email) {
          await this.artistaRepo.merge(user, data);
          return {
            statusCode: 201,
            message: 'El artista ha sido actualizado',
            response: await this.artistaRepo.save(user),
          };
        } else{
          return {
            statusCode: 200,
            message: 'El email no es un campo editable',
          }
        }
      } else {
        return {
          statusCode: 404,
          message: 'Artista no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Error Interno',
      };
    }
  }

  async eliminarArtista(email: string) {
    try {
      const user = await this.artistaRepo.findOne({
        where: { email: email },
      });
      if (user) {
        await this.artistaRepo.delete(user);
        return {
          statusCode: 202,
          message: 'El artista ha sido eliminado',
        };
      } else {
        return {
          statusCode: 200,
          message: 'Artista no encontrado',
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
