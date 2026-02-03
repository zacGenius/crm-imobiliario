import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DealsService } from './deals.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('deals')
@UseGuards(AuthGuard)
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get('stats')
  getStats() {
    return this.dealsService.getStats();
  }

  @Post()
  create(@Body() createDealDto: any) {
    return this.dealsService.create(createDealDto);
  }

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealDto: any) {
    return this.dealsService.update(id, updateDealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(id);
  }
}
