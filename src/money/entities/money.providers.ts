import { DataSource } from 'typeorm';
import { Money } from './money.entity';
import { DATA_SOURCE, MONEY_REPOSITORY } from '../../constant/constant';

export const MoneyProviders = [
    {
      provide: MONEY_REPOSITORY,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Money),
      inject: [DATA_SOURCE],
    },
  ];
  
