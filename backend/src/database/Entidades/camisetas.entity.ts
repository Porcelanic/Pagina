import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn, IntegerType } from 'typeorm';
import { Exclude } from 'class-transformer';
import { artista } from './artista.entity';
import { administrador } from './administrador.entity';

@Entity()
export class camisetas {
  @PrimaryGeneratedColumn()
  idCamiseta: number;

  @Column({ type: 'text' })
  diseño: string;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ type: 'varchar', length: 20 })
  tipo: string;

  @Column({ type: 'integer'})
  precio: IntegerType;

  @Column({ type: 'varchar', length: 45 })
  adminEmail: string;

  @ManyToOne(() => administrador, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'adminEmail', referencedColumnName: 'email' })
  administrador: administrador;

}
