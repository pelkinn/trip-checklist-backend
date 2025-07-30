import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemDto } from 'src/item/dto/Item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChecklistService {
  constructor(private prisma: PrismaService) {}
  
  async getItemsByTripTypeAndDuration(
    tripTypeId: number,
    durationId: number,
  ): Promise<ItemDto[]> {
    const checklist = await this.prisma.checklist.findFirst({
      where: {
        tripTypeId,
        durationId,
      },
      include: {
        items: {
          include: {
            item: true,
          },
        },
      },
    });

    if (!checklist) {
      throw new NotFoundException('Checklist not found for given type and duration');
    }

    // Преобразуем ChecklistItem[] в массив ItemDto
    return checklist.items.map((ci) => ({
      id: ci.item.id,
      name: ci.item.name,
    }));
  }
}
