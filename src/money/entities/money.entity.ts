import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Money {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  cup: number;

  @Column('int')
  mlc: number;

  @Column('int')
  usd: number;
}
