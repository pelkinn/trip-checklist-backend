import { Controller } from '@nestjs/common';
import { UserChecklistService } from './user-checklist.service';

@Controller('user-checklist')
export class UserChecklistController {
  constructor(private readonly userChecklistService: UserChecklistService) {}
}
