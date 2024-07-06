import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { material } from '../../database/Entidades/material.entity';
import { MaterialController } from './controladores/material.controller';
import { materialService } from './servicios/material.services';


@Module({
    imports: [TypeOrmModule.forFeature([material])],
    controllers:[MaterialController],
    providers: [materialService],
    exports:[materialService]
  })

export class MaterialModule {

}