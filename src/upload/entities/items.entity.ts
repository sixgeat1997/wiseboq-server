import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Items')
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'item_id',
  })
  itemId: string;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'unit',
  })
  unit: string;

  @Column({
    name: 'price',
    type: 'numeric',
  })
  price: number;

  @Column({
    name: 'cost',
    type: 'numeric',
  })
  cost: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
 