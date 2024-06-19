// Corrección para create-money.dto.ts
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateMoneyDto {
  @IsInt()
  @IsNotEmpty()
  cup: number;

  @IsInt()
  @IsNotEmpty()
  mlc: number;

  @IsInt()
  @IsNotEmpty()
  usd: number;
}