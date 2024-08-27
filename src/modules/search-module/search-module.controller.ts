import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SearchCriteriaDto } from './dto/search-criteria.dto';
import { MovieDbApiCashService } from '../movie-db-api-module/services/movie-db-api-cash.service';

@Controller('search-module')
export class SearchModuleController {
  constructor(private genresCashService: MovieDbApiCashService) {}

  @Post('execute-search')
  @HttpCode(HttpStatus.OK)
  async executeSearch(@Body() searchCriteria: SearchCriteriaDto) {
    console.log(searchCriteria);
  }
}
