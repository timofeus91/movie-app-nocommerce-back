import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SearchCriteriaDto } from './dto/search-criteria.dto';
import { GeneralCashService } from '../movie-db-api-module/services/general-cash.service';

@Controller('search-module')
export class SearchController {
  constructor(private genresCashService: GeneralCashService) {}

  @Post('execute-search')
  @HttpCode(HttpStatus.OK)
  async executeSearch(@Body() searchCriteria: SearchCriteriaDto) {
    console.log(searchCriteria);
  }
}
