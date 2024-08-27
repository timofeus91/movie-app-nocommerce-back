import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModuleModule } from './modules/search-module/search-module.module';
import { RandomizerModuleModule } from './modules/randomizer-module/randomizer-module.module';
import { GroupRandomizerWebSocketModuleModule } from './modules/group-randomizer-web-socket-module/group-randomizer-web-socket-module.module';
import { MovieDbApiModule } from './modules/movie-db-api-module/movie-db-api.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { GeneralModule } from './modules/general-module/general.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    SearchModuleModule,
    RandomizerModuleModule,
    GroupRandomizerWebSocketModuleModule,
    MovieDbApiModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    GeneralModule,
    CacheModule.register({
      ttl: 15 * 60 * 1000,
      max: 30,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
