import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MatchService {

  constructor(private  databaseService: DatabaseService) {}

  async createMatch(data: { expertId: string; clientId: string }) {
    const { expertId, clientId } = data;
  
    
    const expertExists = await this.databaseService.expert.findUnique({
      where: { id: expertId },
    });
  
    if (!expertExists) {
      throw new BadRequestException('Expert not found');
    }
  
    
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: clientId },
    });
  
    if (!clientExists) {
      throw new BadRequestException('Client not found');
    }
  
    
    return this.databaseService.match.create({
      data: {
        expert: { connect: { id: expertId } },
        client: { connect: { id: clientId } },
      },
    });
  }

  async getMatches(filter?: { specialization?: string; rating?: number }) {
    return this.databaseService.match.findMany({
      include: {
        expert: true,
        client: true,
      },
      where: {
        expert: {
          specialization: filter?.specialization,
          rating: filter?.rating ? { gte: filter.rating } : undefined,
        },
      },
    });
  }
}
