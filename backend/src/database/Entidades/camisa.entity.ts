import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { estampado } from './estampado.entity';
import { material } from './material.entity';
import { pedido } from './pedido.entity';

@Entity()
export class camisa {
  @PrimaryGeneratedColumn()
  idCamisa: number;

  @Column({ type: 'varchar', length: 50 })
  imagen: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'varchar', length: 20 })
  talla: string;

  @Column({ type: 'integer' })
  cantidad: number;

  @Column({ type: 'integer', nullable: true})
  idEstampado?: number;
  @ManyToOne(() => estampado, {onDelete: 'CASCADE', nullable: true})
  @JoinColumn({ name: 'idEstampado', referencedColumnName: 'idEstampado' })
  estampado: estampado;

  @Column({ type: 'varchar', length: 20 })
  Material: string;
  @ManyToOne(() => material, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'Material', referencedColumnName: 'Material' })
  material: material;

  @Column({ type: 'integer' })
  numeroPedido: number;
  @ManyToOne(() => pedido, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'numeroPedido', referencedColumnName: 'numeroPedido' })
  pedido: pedido;
}
