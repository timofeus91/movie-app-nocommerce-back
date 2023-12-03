import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModuleModule } from './modules/search-module/search-module.module';
import { RandomizerModuleModule } from './modules/randomizer-module/randomizer-module.module';
import { GroupRandomizerWebSocketModuleModule } from './modules/group-randomizer-web-socket-module/group-randomizer-web-socket-module.module';
import { SearchMicroserviceModuleModule } from './modules/search-microservice-module/search-microservice-module.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    SearchModuleModule,
    RandomizerModuleModule,
    GroupRandomizerWebSocketModuleModule,
    SearchMicroserviceModuleModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
