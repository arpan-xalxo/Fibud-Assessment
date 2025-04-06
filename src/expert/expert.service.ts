import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ExpertService {
  constructor(private databaseService: DatabaseService) {}

  async createExpert(data: Prisma.ExpertCreateInput) {
    return this.databaseService.expert.create({ data });
  }
  async getAllExperts() {
    return this.databaseService.expert.findMany();
  }
}
