import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { estampado } from './estampado.entity';

@Entity()
export class artista {
  @PrimaryColumn({ type: 'varchar', length: 45 })
  email: string;
  @Column({ type: 'varchar', length: 45 })
  nombre: string;
  @Exclude()
  @Column({ type: 'varchar', length: 45 })
  password: string;
}
