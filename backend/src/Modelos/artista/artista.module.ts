import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { artista } from '../../database/Entidades/artista.entity';
import { ArtistaController } from './controladores/artista.controller';
import { artistaService } from './servicios/artista.services';


@Module({
    imports: [TypeOrmModule.forFeature([artista])],
    controllers:[ArtistaController],
    providers: [artistaService],
    exports:[artistaService]
  })

export class ArtistaModule {

}