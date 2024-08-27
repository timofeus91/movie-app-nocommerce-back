import { Injectable } from '@nestjs/common';
import { MovieDbApiCashService } from '../movie-db-api-module/services/movie-db-api-cash.service';

@Injectable()
export class GeneralService {
  constructor(private genresCashService: MovieDbApiCashService) {}

  async getGenresSeries(language: string) {
    return await this.genresCashService.getSeriesGenresFromCache(language);
  }

  async getGenresMovies(language: string) {
    return await this.genresCashService.getMoviesGenresFromCache(language);
  }


  async getCountriesList(language: string) {
    return await this.genresCashService.getCountriesListFromCache(language);
  }
}
