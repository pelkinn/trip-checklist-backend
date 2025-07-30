import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { TripTypeDto } from './dto/Type.dto';
import { ReferenceDataService } from './reference-data.service';
import { DurationDto } from './dto/Duration.dto';

@Controller('reference-data')
export class ReferenceDataController {
  constructor(private readonly referenceData: ReferenceDataService) {}

  @Get('types')
  @ApiOkResponse({ type: [TripTypeDto], description: 'Список типов поездок' })
  async getAll(): Promise<TripTypeDto[]> {
    return this.referenceData.getTypes();
  }

  @Get('durations')
  @ApiOkResponse({ type: [DurationDto], description: 'Список продолжительности' })
  async getDuration(): Promise<DurationDto[]> {
    return this.referenceData.getDurations();
  }
}
