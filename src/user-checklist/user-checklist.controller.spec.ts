import { Test, TestingModule } from '@nestjs/testing';
import { UserChecklistController } from './user-checklist.controller';
import { UserChecklistService } from './user-checklist.service';

describe('UserChecklistController', () => {
  let controller: UserChecklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserChecklistController],
      providers: [UserChecklistService],
    }).compile();

    controller = module.get<UserChecklistController>(UserChecklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
