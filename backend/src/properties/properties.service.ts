import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.property.create({ data });
  }

  async findAll() {
    return this.prisma.property.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.property.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return this.prisma.property.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.property.delete({ where: { id } });
  }
}
