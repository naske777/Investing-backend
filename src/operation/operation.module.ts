import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { OperationProviders } from './entities/operation.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],

  controllers: [OperationController],
  providers: [...OperationProviders,OperationService],
})
export class OperationModule {}
