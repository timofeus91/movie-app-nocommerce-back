import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SearchCriteriaDto } from './dto/search-criteria.dto';

@Controller('search-module')
export class SearchModuleController {
  constructor() {}

  @Post('execute-search')
  @HttpCode(HttpStatus.OK)
  async executeSearch(@Body() searchCriteria: SearchCriteriaDto) {
    console.log(searchCriteria);
  }
}
