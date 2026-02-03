import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LeadStatus, LeadTemperature } from '@prisma/client';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  private calculateScore(data: any): number {
    let score = 0;
    // IA Heurística Simples
    if (data.source === 'DIRECT') score += 30;
    if (data.source === 'ADS') score += 20;
    if (data.email) score += 10;
    if (data.phone) score += 20;
    return score;
  }

  private getTemperature(score: number): LeadTemperature {
    if (score >= 70) return 'HOT';
    if (score >= 40) return 'WARM';
    return 'COLD';
  }

  async create(data: any) {
    const score = this.calculateScore(data);
    const temperature = this.getTemperature(score);
    return this.prisma.lead.create({
      data: { ...data, score, temperature },
    });
  }

  async findAll() {
    return this.prisma.lead.findMany({
      include: { broker: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.lead.findUnique({
      where: { id },
      include: { broker: true, deals: true },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.lead.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.lead.delete({ where: { id } });
  }
}
