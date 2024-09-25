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
import { RandomizerService } from './randomizer.service';

@Controller('randomizer')
export class RandomizerController {
  constructor(private _randomizerService: RandomizerService) {}

  @Post('movie')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ transform: true }))
  async movieSearch(@Body() body: MovieSearchDto) {
    return await this._randomizerService.getRandomMovies(body);
  }
}
