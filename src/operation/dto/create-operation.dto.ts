import { IsDateString, IsDecimal, IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum OperationType {
  COMPRA = 'compra',
  VENTA = 'venta',
}

export class CreateOperationDto {
  @IsString()
  @IsNotEmpty()
  initialCurrency: string;

  @IsString()
  @IsNotEmpty()
  finalCurrency: string;

  @IsDecimal()
  @IsNotEmpty()
  initialAmount: number;

  @IsDecimal()
  @IsNotEmpty()
  finalAmount: number;

  @IsDecimal()
  @IsNotEmpty()
  exchangeRate: number;

  @IsDateString()
  operationDate: Date;

  @IsEnum(OperationType)
  operationType: OperationType;
}