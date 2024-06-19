import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoneyModule } from './money/money.module';

@Module({
  imports: [MoneyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
