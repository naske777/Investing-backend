import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoneyModule } from './money/money.module';
import { OperationModule } from './operation/operation.module';

@Module({
  imports: [MoneyModule, OperationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
