import { DataSource } from 'typeorm';
import { Operation } from './operation.entity';
import { DATA_SOURCE, OPERATION_REPOSITORY } from '../../constant/constant';

export const OperationProviders = [
  {
    provide: OPERATION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Operation),
    inject: [DATA_SOURCE],
  },
];