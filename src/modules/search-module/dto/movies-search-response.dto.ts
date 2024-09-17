import { IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MovieDto } from './movie.dto';

export class MoviesSearchResponseDto {
  @IsNumber()
  page: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MovieDto)
  results: MovieDto[];

  @IsNumber()
  total_pages: number;

  @IsNumber()
  total_results: number;
}
