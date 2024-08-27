import { Injectable } from '@nestjs/common';
import { GenresCashService } from '../movie-db-api-module/services/genresCash.service';

@Injectable()
export class GeneralService {
  constructor(private genresCashService: GenresCashService) {}

  async getGenresSeries(language: string) {
    return await this.genresCashService.getSeriesGenresWithCache(language);
  }

  async getGenresMovies(language: string) {
    return await this.genresCashService.getMoviesGenresWithCache(language);
  }
}
