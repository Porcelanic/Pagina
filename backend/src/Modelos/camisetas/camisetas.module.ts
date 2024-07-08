//import { camisetas } from './../../database/Entidades/camisetas.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { camisetas } from '../../database/Entidades/camisetas.entity';
import { camisetasController } from './controladores/camisetas.controller';
import { camisetasService } from './servicios/camisetas.services';

@Module({
    imports: [TypeOrmModule.forFeature([camisetas])],
    controllers:[camisetasController],
    providers: [camisetasService],
    exports:[camisetasService]
  })

export class CamisetasModule {

}