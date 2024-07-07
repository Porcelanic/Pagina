import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { informacionEnvio } from '../../database/Entidades/informacionEnvio.entity';
import { InformacionEnvioController } from './controladores/informacionEnvio.controller';
import { informacionEnvioService } from './servicios/informacionEnvio.services';


@Module({
    imports: [TypeOrmModule.forFeature([informacionEnvio])],
    controllers:[InformacionEnvioController],
    providers: [informacionEnvioService],
    exports:[informacionEnvioService]
  })

export class InformacionEnvioModule {

}