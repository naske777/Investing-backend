import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { Operation } from './entities/operation.entity';
import { OPERATION_REPOSITORY } from 'src/constant/constant';

@Injectable()
export class OperationService {
  constructor(
    @Inject(OPERATION_REPOSITORY)
    private operationRepository: Repository<Operation>,
  ) {}

  async create(createOperationDto: CreateOperationDto): Promise<Operation> {
    const newOperation = this.operationRepository.create(createOperationDto);
    return this.operationRepository.save(newOperation);
  }

  async findAll(): Promise<Operation[]> {
    return this.operationRepository.find();
  }

  async findOne(id: number): Promise<Operation> {
    return this.operationRepository.findOneBy({ id });
  }

  async update(id: number, updateOperationDto: UpdateOperationDto): Promise<Operation> {
    await this.operationRepository.update(id, updateOperationDto);
    return this.operationRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.operationRepository.delete(id);
  }
}