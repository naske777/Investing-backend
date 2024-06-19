import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateMoneyDto } from './dto/create-money.dto';
import { UpdateMoneyDto } from './dto/update-money.dto';
import { Money } from './entities/money.entity';
import { MONEY_REPOSITORY } from 'src/constant/constant';

@Injectable()
export class MoneyService {
  constructor(
    @Inject(MONEY_REPOSITORY)
    private moneyRepository: Repository<Money>,
  ) {}

  async create(createMoneyDto: CreateMoneyDto): Promise<Money> {
    const newMoney = this.moneyRepository.create(createMoneyDto);
    return this.moneyRepository.save(newMoney);
  }

  async findAll(): Promise<Money[]> {
    return this.moneyRepository.find();
  }

  async findOne(id: number): Promise<Money> {
    return this.moneyRepository.findOneBy({ id });
  }

  async update(id: number, updateMoneyDto: UpdateMoneyDto): Promise<Money> {
    await this.moneyRepository.update(id, updateMoneyDto);
    return this.moneyRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.moneyRepository.delete(id);
  }
}