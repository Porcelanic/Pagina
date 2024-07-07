import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { estampado } from './../../database/Entidades/estampado.entity';
import { estampadoController } from './controladores/estampado.controller';
import { estampadoService } from './servicios/estampado.services';

@Module({
    imports: [TypeOrmModule.forFeature([estampado])],
    controllers:[estampadoController],
    providers: [estampadoService],
    exports:[estampadoService]
  })

export class EstampadoModule {

}