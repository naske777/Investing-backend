import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MoneyService } from './money.service';
import { MoneyController } from './money.controller';
import { MoneyProviders } from './entities/money.providers';
@Module({
  imports: [DatabaseModule],

  controllers: [MoneyController],
  providers: [...MoneyProviders, MoneyService],
})
export class MoneyModule {}
