import { Module } from '@nestjs/common';
import { UserChecklistService } from './user-checklist.service';
import { UserChecklistController } from './user-checklist.controller';

@Module({
  controllers: [UserChecklistController],
  providers: [UserChecklistService],
})
export class UserChecklistModule {}
