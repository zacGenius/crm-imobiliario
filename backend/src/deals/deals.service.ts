import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    // Regra simples: comissão de 6% se não especificado
    const commission = data.commission || data.value * 0.06;
    return this.prisma.deal.create({
      data: { ...data, commission },
    });
  }

  async findAll() {
    return this.prisma.deal.findMany({
      include: {
        lead: { select: { name: true } },
        property: { select: { title: true } },
        broker: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.deal.findUnique({
      where: { id },
      include: { lead: true, property: true, broker: true },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.deal.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.deal.delete({ where: { id } });
  }

  async getStats() {
    const totalDeals = await this.prisma.deal.count();
    const totalValue = await this.prisma.deal.aggregate({
      _sum: { value: true },
    });
    const totalCommission = await this.prisma.deal.aggregate({
      _sum: { commission: true },
    });
    const leadsCount = await this.prisma.lead.count();

    return {
      totalDeals,
      totalValue: totalValue._sum.value || 0,
      totalCommission: totalCommission._sum.commission || 0,
      leadsCount,
    };
  }
}
