import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity('List')
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'category_id',
  })
  categoryId: number;

  @Column({
    name: 'item_name',
  })
  itemName: string;
  @Column({
    name: 'unit',
  })
  unit: string;

  @Column({ name: 'quantity' })
  quantity: number;

  @Column({
    name: 'cost',
    type: 'numeric',
  })
  cost: number;

  @Column({
    name: 'price',
    type: 'numeric',
  })
  price: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => Category, (c) => c.lists)
  category: Category;
}
