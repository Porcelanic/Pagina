import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { cliente } from './cliente.entity';

@Entity()
export class informacionEnvio {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 45 })
  barrio: string;
  @Column({ type: 'varchar', length: 45 })
  ciudad: string;
  @Column({ type: 'varchar', length: 45 })
  pais: string;
  @Column({ type: 'varchar', length: 10 })
  codigoPostal: string;
  @Column({ type: 'varchar', length: 45 })
  direccion: string;
  @Column({ type: 'varchar', length: 13 })
  telefono: string;
  @Column({ type: 'varchar', length: 45 })
  clienteEmail: string;
  @ManyToOne(() => cliente, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'clienteEmail', referencedColumnName: 'email' })
  cliente: cliente;
}
