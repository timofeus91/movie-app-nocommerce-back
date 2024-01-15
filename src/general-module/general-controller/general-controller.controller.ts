import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { GenresCashService } from '../../modules/movie-db-api-module/genresCash.service';

@Controller('general')
export class GeneralControllerController {
  constructor(private genresCashService: GenresCashService) {}

  @Get('genres-series')
  @HttpCode(HttpStatus.OK)
  async getGenresSeries() {
    try {
      return await this.genresCashService.getSeriesGenresWithCache();
    } catch (err) {
      console.log(err);
    }
  }
}
