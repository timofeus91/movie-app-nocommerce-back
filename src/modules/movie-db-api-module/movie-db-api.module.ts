import { Module } from '@nestjs/common';
import { GeneralService } from './services/general.service';
import { HttpModule } from '@nestjs/axios';
import { GeneralCashService } from './services/general-cash.service';
import { CacheModule } from '@nestjs/cache-manager';
import { MovieService } from './services/movie.service';
import { CommonModule } from '../common-module/common.module';
import { TVService } from './services/tv.service';

@Module({
  imports: [HttpModule, CacheModule.register(), CommonModule],
  providers: [GeneralService, GeneralCashService, MovieService, TVService],
  exports: [GeneralService, GeneralCashService, MovieService, TVService],
})
export class MovieDbApiModule {}
