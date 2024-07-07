import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { administrador } from '../../database/Entidades/administrador.entity';
import { AdministradorController } from './controladores/administrador.controller';
import { administradorService } from './servicios/administrador.services';


@Module({
    imports: [TypeOrmModule.forFeature([administrador])],
    controllers:[AdministradorController],
    providers: [administradorService],
    exports:[administradorService]
  })

export class AdministradorModule {

}