import { Module } from '@nestjs/common';
import { MovieDbApiService } from './services/movie-db-api.service';
import { HttpModule } from '@nestjs/axios';
import { MovieDbApiCashService } from './services/movie-db-api-cash.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [HttpModule, CacheModule.register()],
  providers: [MovieDbApiService, MovieDbApiCashService],
  exports: [MovieDbApiService, MovieDbApiCashService],
})
export class MovieDbApiModule {}
