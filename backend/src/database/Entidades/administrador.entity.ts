import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class administrador {
  @PrimaryColumn({ type: 'varchar', length: 45 })
  email: string;
  @Column({ type: 'varchar', length: 45 })
  nombre: string;
  @Exclude()
  @Column({ type: 'varchar', length: 45 })
  password: string;
}
