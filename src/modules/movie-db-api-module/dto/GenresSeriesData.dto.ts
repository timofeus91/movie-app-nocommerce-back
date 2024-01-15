import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { GenreSeriesDto } from './GenreSeries.dto';

export class GenresSeriesDataDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GenreSeriesDto)
  genres: GenreSeriesDto[];
}
