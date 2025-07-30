import { ApiProperty } from '@nestjs/swagger';

export class DurationDto {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  id: number;

  @ApiProperty({ example: 1, description: 'Количество дней' })
  days: number;

  @ApiProperty({ example: '1 день', description: 'Продолжительность поездки' })
  label: string;
}