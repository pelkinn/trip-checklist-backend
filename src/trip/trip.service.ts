import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTripTemplateDto } from './dto/CreateTripTemplate.dto';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.tripTemplate.findMany();
  }

  async create(data: CreateTripTemplateDto) {
    return this.prisma.tripTemplate.create({
      data: {
        days: data.days,
        items: data.items,
        type: data.type
      }
    });
  }
}
