import { Test, TestingModule } from '@nestjs/testing';
import { UserChecklistService } from './user-checklist.service';

describe('UserChecklistService', () => {
  let service: UserChecklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserChecklistService],
    }).compile();

    service = module.get<UserChecklistService>(UserChecklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
