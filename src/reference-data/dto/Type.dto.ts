import { ApiProperty } from '@nestjs/swagger';

export class TripTypeDto {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор типа поездки' })
  id: number;

  @ApiProperty({ example: 'Поход с палаткой', description: 'Название типа поездки' })
  name: string;
}