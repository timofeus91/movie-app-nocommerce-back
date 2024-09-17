import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MovieSearchDto } from '../common-module/dto/MovieSearch.dto';
import { MovieService } from '../movie-db-api-module/services/movie.service';

@Controller('search')
export class SearchController {
  constructor(private _movieService: MovieService) {}

  @Post('movie')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ transform: true }))
  async movieSearch(@Body() movieSearchDto: MovieSearchDto) {
    return await this._movieService.getMovieList(movieSearchDto);
  }
}
