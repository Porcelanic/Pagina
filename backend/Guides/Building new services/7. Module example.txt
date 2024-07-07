import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cliente } from '../Entidades/usuario.entity';
import { UsuarioController } from './controladores/usuario.controller';
import { usuarioService } from './servicios/usuario.services';


@Module({
    imports: [TypeOrmModule.forFeature([cliente])],
    controllers:[UsuarioController],
    providers: [usuarioService],
    exports:[usuarioService]
  })

export class UsuarioModule {

}