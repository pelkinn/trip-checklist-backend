import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ReferenceDataModule } from './reference-data/reference-data.module';
import { ItemModule } from './item/item.module';
import { ChecklistModule } from './checklist/checklist.module';
import { UserChecklistModule } from './user-checklist/user-checklist.module';

@Module({
  imports: [PrismaModule, ReferenceDataModule, ItemModule, ChecklistModule, UserChecklistModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
