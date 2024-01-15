import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SearchCriteriaDto } from './dto/search-criteria.dto';
import { GenresCashService } from '../movie-db-api-module/genresCash.service';

@Controller('search-module')
export class SearchModuleController {
  constructor(private genresCashService: GenresCashService) {}

  @Post('execute-search')
  @HttpCode(HttpStatus.OK)
  async executeSearch(@Body() searchCriteria: SearchCriteriaDto) {
    console.log(searchCriteria);
  }
}
