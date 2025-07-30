import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Палатка' })
  name: string;
}