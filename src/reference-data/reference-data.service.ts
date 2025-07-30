import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReferenceDataService {
  constructor(private prisma: PrismaService) {}

  async getTypes() {
    return this.prisma.tripType.findMany();
  }

  async getDurations() {
    return this.prisma.duration.findMany();
  }
}
