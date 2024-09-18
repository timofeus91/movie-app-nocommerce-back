import { Injectable } from '@nestjs/common';
import { GeneralCashService } from '../movie-db-api-module/services/general-cash.service';

@Injectable()
export class GeneralService {
  constructor(private genresCashService: GeneralCashService) {}

  async getGenresTV(language: string) {
    return await this.genresCashService.getTVGenresFromCache(language);
  }

  async getGenresMovies(language: string) {
    return await this.genresCashService.getMoviesGenresFromCache(language);
  }

  async getCountriesList(language: string) {
    return await this.genresCashService.getCountriesListFromCache(language);
  }
}
