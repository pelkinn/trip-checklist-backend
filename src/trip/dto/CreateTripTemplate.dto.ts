import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsArray } from 'class-validator';

export class CreateTripTemplateDto {
  @ApiProperty({ example: 'Adventure', description: 'Тип путешествия' })
  @IsString()
  type: string;

  @ApiProperty({ example: 7, description: 'Количество дней' })
  @IsInt()
  @Min(1)
  days: number;

  // Если нужно, можно добавить поле items, например, как строку с JSON
  @ApiProperty({ example: '["Бумага", "Фонарик"]', description: 'Элементы путешествия в формате JSON' })
  @IsArray()
  @IsString({ each: true })
  items: string[];
}