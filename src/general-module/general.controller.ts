import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { GenresCashService } from '../modules/movie-db-api-module/services/genresCash.service';
import { QUERY_PARAMS } from '../utils/query-params';
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags('general')
@Controller('general')
export class GeneralController {
  constructor(private genresCashService: GenresCashService) {}

  @Get('series-genres')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get series genres' })
  @ApiQuery({ name: 'language', required: true, description: 'Language code', type: String })
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
  @ApiOperation({ summary: 'Get series movies' })
  @ApiQuery({ name: 'language', required: true, description: 'Language code', type: String })
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
