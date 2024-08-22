import { Module } from '@nestjs/common';
import { GenresService } from './services/genres.service';
import { HttpModule } from '@nestjs/axios';
import { GenresCashService } from './services/genresCash.service';

@Module({
  imports: [HttpModule],
  providers: [GenresService, GenresCashService],
  exports: [GenresService, GenresCashService],
})
export class MovieDbApiModule {}
