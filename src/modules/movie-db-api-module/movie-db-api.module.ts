import { Module } from '@nestjs/common';
import { GeneralService } from './services/general.service';
import { HttpModule } from '@nestjs/axios';
import { GeneralCashService } from './services/general-cash.service';
import { CacheModule } from '@nestjs/cache-manager';
import { CommonService } from './services/common.service';
import { MovieService } from './services/movie.service';

@Module({
  imports: [HttpModule, CacheModule.register()],
  providers: [GeneralService, GeneralCashService, CommonService, MovieService],
  exports: [GeneralService, GeneralCashService, MovieService],
})
export class MovieDbApiModule {}
