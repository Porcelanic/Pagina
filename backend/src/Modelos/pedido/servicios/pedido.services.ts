import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { pedido } from 'src/database/Entidades/pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { crearPedidoDto, actualizarPedidoDto } from '../dto/pedido.dto';

@Injectable()
export class pedidoService {
  constructor(
    @InjectRepository(pedido)
    private pedidoRepo: Repository<pedido>,
  ) {}
  prueba(): string {
    return 'Mi primer servicio';
  }

  async crearPedido(pedido: crearPedidoDto) {
    try{
      const nuevoPedido = this.pedidoRepo.create(pedido);
      return {
        statusCode: 201,
        message: 'Pedido creado',
        response: await this.pedidoRepo.save(nuevoPedido),
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async consultarPedido(clienteEmail: string) {
    return await this.pedidoRepo.find({
      where: [{ clienteEmail: clienteEmail }],
    });
  }

  async consultarTodos() {
    return await this.pedidoRepo.find();
  }

  async actualizarPedido(numeroPedido: number, pedido: actualizarPedidoDto) {
    try {
      const user = await this.pedidoRepo.findOne({
        where: [{ numeroPedido: numeroPedido }],
      });

      if (user) {
        await this.pedidoRepo.merge(user, pedido);
        return {
          statusCode: 200,
          message: 'Pedido actualizado',
          response: await this.pedidoRepo.save(user),
        };
      } else {
        return {
          statusCode: 404,
          message: 'Pedido no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async eliminarPedido(numeroPedido: number) {
    try {
      const user = await this.pedidoRepo.findOne({
        where: [{ numeroPedido: numeroPedido }],
      });

      if (user) {
        await this.pedidoRepo.remove(user);
        return {
          statusCode: 200,
          message: 'Pedido eliminado',
        };
      } else {
        return {
          statusCode: 404,
          message: 'Pedido no encontrado',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

}
