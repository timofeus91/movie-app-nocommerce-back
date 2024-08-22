import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { GenreItemDto } from './GenreItem.dto';

export class GenresDataDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GenreItemDto)
  genres: GenreItemDto[];
}
