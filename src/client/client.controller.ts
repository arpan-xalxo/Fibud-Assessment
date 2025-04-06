import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';

import { Prisma } from '@prisma/client';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(@Body() data: Prisma.ClientCreateInput) {
    return this.clientService.createClient(data);
  }

  @Get()
  async getAllClients() {
    return this.clientService.getAllClients();
  }
}
