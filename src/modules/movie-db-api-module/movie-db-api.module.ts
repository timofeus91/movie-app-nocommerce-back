import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { HttpModule } from '@nestjs/axios';
import { GenresCashService } from './genresCash.service';

@Module({
  imports: [HttpModule],
  providers: [
    GenresService,
    GenresCashService,
  ],
  exports: [GenresService, GenresCashService],
})
export class MovieDbApiModule {}
