import { Body, Controller, Get, Post } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripTemplateDto } from './dto/TripTemplate.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTripTemplateDto } from './dto/CreateTripTemplate.dto';

@ApiTags('trip')
@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  @ApiOkResponse({ type: TripTemplateDto, isArray: true })
  getAll(): Promise<TripTemplateDto[]> {
    return this.tripService.getAll();
  }

  @Post()
  @ApiOkResponse({ type: TripTemplateDto})
  create(@Body() dto: CreateTripTemplateDto): Promise<TripTemplateDto> {
    return this.tripService.create(dto);
  }
}
