import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MatchModule } from './match/match.module';
import { ExpertModule } from './expert/expert.module';
import { ClientModule } from './client/client.module';


@Module({
  imports: [DatabaseModule, MatchModule, ExpertModule, ClientModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
