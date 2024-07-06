import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cliente } from '../../database/Entidades/cliente.entity';
import { ClienteController } from './controladores/cliente.controller';
import { clienteService } from './servicios/cliente.services';


@Module({
    imports: [TypeOrmModule.forFeature([cliente])],
    controllers:[ClienteController],
    providers: [clienteService],
    exports:[clienteService]
  })

export class ClienteModule {

}