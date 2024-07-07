import { Test, TestingModule } from '@nestjs/testing';
import { camisaController} from './camisa.controller';

describe('CamisaControllerTsController', () => {
  let controller: camisaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [camisaController],
    }).compile();

    controller = module.get<camisaController>(camisaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
