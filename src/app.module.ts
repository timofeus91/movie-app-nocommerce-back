import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModuleModule } from './search-module/search-module.module';
import { RandomizerModuleModule } from './randomizer-module/randomizer-module.module';
import { GroupRandomizerWebSocketModuleModule } from './group-randomizer-web-socket-module/group-randomizer-web-socket-module.module';
import { SearchMicroserviceModuleModule } from './search-microservice-module/search-microservice-module.module';

@Module({
  imports: [ SearchModuleModule, RandomizerModuleModule, GroupRandomizerWebSocketModuleModule, SearchMicroserviceModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
