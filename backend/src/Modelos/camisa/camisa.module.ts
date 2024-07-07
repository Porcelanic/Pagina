import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { camisa } from '../../database/Entidades/camisa.entity';
import { camisaController } from './controladores/camisa.controller';
import { camisaService } from './servicios/camisa.services';

@Module({
    imports: [TypeOrmModule.forFeature([camisa])],
    controllers:[camisaController],
    providers: [camisaService],
    exports:[camisaService]
  })

export class camisaModule {

}