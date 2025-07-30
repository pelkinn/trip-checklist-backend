import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ItemDto } from './dto/Item.dto';

@ApiTags('Items')
@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  @ApiOkResponse({ type: [ItemDto], description: 'Список продолжительности' })
  getAll(): Promise<ItemDto[]> {
    return this.itemService.getAll();
  }
}
