import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'user_id',
    type: 'uuid',
  })
  userId: string;

  @Column({
    name: 'email',
    unique: true,
    nullable: true,
  })
  email: string;

  @Column({
    nullable: true,

    name: 'first_name',
  })
  firstName: string;

  @Column({ nullable: true, name: 'last_name' })
  lastName: string;

  @Column({
    nullable: true,

    name: 'phone_number',
  })
  phoneNumber: string;

  @Column({
    nullable: true,

    name: 'line_id',
  })
  lineId: string;

  @Column({
    nullable: true,

    name: 'role',
    default: 'user',
  })
  role: string;

  @CreateDateColumn({
    nullable: true,

    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    nullable: true,

    name: 'updated_at',
  })
  updatedAt: Date;
}
