import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpertService } from './expert.service';
import { Prisma } from '@prisma/client';

@Controller('experts')
export class ExpertController {
  constructor(private readonly expertService: ExpertService) {}

  @Post()
  async createExpert(@Body() data: Prisma.ExpertCreateInput) {
    return this.expertService.createExpert(data);
  }

  @Get()
  async getAllExperts() {
    return this.expertService.getAllExperts();
  }
}
