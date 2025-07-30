import { ApiProperty } from '@nestjs/swagger';

export class TripTemplateDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Adventure' })
  type: string;

  @ApiProperty({ example: 7 })
  days: number;

  @ApiProperty({ example: ['Фонарик', 'Варежки'] })
  items: string[];

  @ApiProperty({ example: '2025-07-29T12:34:56.789Z' })
  createdAt: Date;
}