import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class ClientService {
  constructor(private databaseService: DatabaseService) {}

  async createClient(data: Prisma.ClientCreateInput) {
    return this.databaseService.client.create({ data });
  }

  async getAllClients() {
    return this.databaseService.client.findMany();
  }
}
