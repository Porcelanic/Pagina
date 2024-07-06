import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { artista } from './artista.entity';

@Entity()
export class estampado {
  @PrimaryGeneratedColumn()
  idEstampado: number;

  @Column({ type: 'text' })
  diseño: string;

  @Column({ type: 'varchar', length: 20 })
  nombre: string;

  @Column({ type: 'varchar', length: 20 })
  categoria: string;

  @Column({ type: 'varchar', length: 20 })
  artistaEmail: string;

  @ManyToOne(() => artista, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'artistaEmail', referencedColumnName: 'email' })
  artista: artista;
}
