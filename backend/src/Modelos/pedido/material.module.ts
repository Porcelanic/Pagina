import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pedido } from '../../database/Entidades/pedido.entity';
import { PedidoController } from './controladores/pedido.controller';
import { pedidoService } from './servicios/pedido.services';


@Module({
    imports: [TypeOrmModule.forFeature([pedido])],
    controllers:[PedidoController],
    providers: [pedidoService],
    exports:[pedidoService]
  })

export class PedidoModule {

}