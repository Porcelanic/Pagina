import { Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class material {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  Material: string;
  @Column({ type: 'integer'})
  cantidad: number;
}
