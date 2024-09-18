import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { QUERY_PARAMS } from '../../utils/query-params';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GeneralService } from './general.service';

@ApiTags('general')
@Controller('general')
export class GeneralController {
  constructor(private generalService: GeneralService) {}

  @Get('series-genres')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get series genres' })
  @ApiQuery({
    name: 'language',
    required: true,
    description: 'Language code',
    type: String,
  })
  async getGenresSeries(
    @Query(QUERY_PARAMS.QUERY_PARAM_LANGUAGE) language: string,
  ) {
    return await this.generalService.getGenresTV(language);
  }

  @Get('series-movies')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get series movies' })
  @ApiQuery({
    name: 'language',
    required: true,
    description: 'Language code',
    type: String,
  })
  async getGenresMovies(
    @Query(QUERY_PARAMS.QUERY_PARAM_LANGUAGE) language: string,
  ) {
    return await this.generalService.getGenresMovies(language);
  }

  @Get('countries')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get countries list' })
  @ApiQuery({
    name: 'language',
    required: true,
    description: 'Language code',
    type: String,
  })
  async getCountriesList(
    @Query(QUERY_PARAMS.QUERY_PARAM_LANGUAGE) language: string,
  ) {
    return await this.generalService.getCountriesList(language);
  }
}
