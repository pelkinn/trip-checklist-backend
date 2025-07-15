import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.tripTemplate.findMany();
  }
}
