import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { MatchService } from './match.service';

import { Prisma } from '@prisma/client';

@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  async createMatch(@Body() data: { expertId: string; clientId: string }) {
    return this.matchService.createMatch(data);
  }

  @Get()
  async getMatches(
    @Query('specialization') specialization?: string,
    @Query('rating') rating?: string,
  ) {
    return this.matchService.getMatches({
      specialization,
      rating: rating ? parseFloat(rating) : undefined,
    });
  }
}
