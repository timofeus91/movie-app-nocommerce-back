import { Test, TestingModule } from '@nestjs/testing';
import { SearchModuleController } from './search-module.controller';

describe('SearchModuleController', () => {
  let controller: SearchModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchModuleController],
    }).compile();

    controller = module.get<SearchModuleController>(SearchModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
