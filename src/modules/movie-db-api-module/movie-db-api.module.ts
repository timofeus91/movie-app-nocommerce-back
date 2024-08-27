import { Module } from '@nestjs/common';
import { GenresService } from './services/genres.service';
import { HttpModule } from '@nestjs/axios';
import { GenresCashService } from './services/genresCash.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [HttpModule, CacheModule.register()],
  providers: [GenresService, GenresCashService],
  exports: [GenresService, GenresCashService],
})
export class MovieDbApiModule {}
