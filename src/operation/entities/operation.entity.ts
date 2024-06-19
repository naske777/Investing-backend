import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  initialCurrency: string;

  @Column('varchar')
  finalCurrency: string;

  @Column('decimal')
  initialAmount: number;

  @Column('decimal')
  finalAmount: number;

  @Column('decimal')
  exchangeRate: number;

  @Column('timestamp')
  operationDate: Date;

  @Column('varchar')
  operationType: string; // 'compra' o 'venta'
}