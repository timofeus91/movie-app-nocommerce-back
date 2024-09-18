import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MovieSearchDto } from '../common-module/dto/movie-search.dto';
import { MovieService } from '../movie-db-api-module/services/movie.service';
import { TVSearchDto } from '../common-module/dto/tv-search.dto';
import { TVService } from '../movie-db-api-module/services/tv.service';

@Controller('search')
export class SearchController {
  constructor(
    private _movieService: MovieService,
    private _tvService: TVService,
  ) {}

  @Post('movie')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ transform: true }))
  async movieSearch(@Body() body: MovieSearchDto) {
    return await this._movieService.getMovieList(body);
  }

  @Post('tv')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ transform: true }))
  async tvSearch(@Body() body: TVSearchDto) {
    return await this._tvService.getTVList(body);
  }
}
