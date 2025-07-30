import { Controller, Get, Query } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { ItemDto } from 'src/item/dto/Item.dto';

@Controller('checklist')
export class ChecklistController {
  constructor(private readonly checklistService: ChecklistService) {}

  @Get()
  @ApiQuery({ name: 'tripTypeId', required: true, type: Number })
  @ApiQuery({ name: 'durationId', required: true, type: Number })
  @ApiOkResponse({
    type: [ItemDto],
    description: 'Список предметов из шаблонного чеклиста',
  })
  async getChecklist(
    @Query('tripTypeId') tripTypeId: number,
    @Query('durationId') durationId: number,
  ): Promise<ItemDto[]> {
    return this.checklistService.getItemsByTripTypeAndDuration(
      Number(tripTypeId),
      Number(durationId),
    );
  }
}
