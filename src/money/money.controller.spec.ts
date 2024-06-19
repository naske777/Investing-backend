import { Test, TestingModule } from '@nestjs/testing';
import { MoneyController } from './money.controller';
import { MoneyService } from './money.service';
import { Money } from './entities/money.entity';

describe('MoneyController', () => {
  let controller: MoneyController;
  let service: MoneyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoneyController],
      providers: [
        {
          provide: MoneyService,
          useValue: {
            create: jest.fn().mockResolvedValue(new Money()),
            findAll: jest.fn().mockResolvedValue([new Money()]),
            findOne: jest.fn().mockResolvedValue(new Money()),
            update: jest.fn().mockResolvedValue(new Money()),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<MoneyController>(MoneyController);
    service = module.get<MoneyService>(MoneyService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Aquí puedes agregar o modificar los tests para reflejar operaciones con los campos cup, mlc, y usd
  // Por ejemplo, para el método create:
  it('should create a money record', async () => {
    const moneyDto = { cup: 100, mlc: 50, usd: 20 };
    const result = { id: 1, ...moneyDto }; // Mock result includes an `id`
    jest.spyOn(service, 'create').mockImplementation(async () => result);
  
    expect(await controller.create(moneyDto)).toEqual(result);
    expect(service.create).toHaveBeenCalledWith(moneyDto);
  });

  // Agrega más tests para findAll, findOne, update, y remove según sea necesario
});