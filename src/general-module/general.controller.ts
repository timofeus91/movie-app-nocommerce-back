import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { GenresCashService } from '../modules/movie-db-api-module/services/genresCash.service';
import { QUERY_PARAMS } from '../utils/query-params';

@Controller('general')
export class GeneralController {
  constructor(private genresCashService: GenresCashService) {}

  @Get('series-genres')
  @HttpCode(HttpStatus.OK)
  async getGenresSeries(
    @Query(QUERY_PARAMS.QUERY_PARAM_LANGUAGE) language: string,
  ) {
    try {
      return await this.genresCashService.getSeriesGenresWithCache(language);
    } catch (err) {
      console.log(err);
    }
  }

  @Get('series-movies')
  @HttpCode(HttpStatus.OK)
  async getMoviesSeries(
    @Query(QUERY_PARAMS.QUERY_PARAM_LANGUAGE) language: string,
  ) {
    try {
      return await this.genresCashService.getMoviesGenresWithCache(language);
    } catch (err) {
      console.log(err);
    }
  }
}
