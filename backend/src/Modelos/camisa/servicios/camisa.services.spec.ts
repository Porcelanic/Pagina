import { Test, TestingModule } from '@nestjs/testing';
import { camisaService } from './camisa.services';

describe('CamisaServicesTsService', () => {
  let service: camisaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [camisaService],
    }).compile();

    service = module.get<camisaService>(camisaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
