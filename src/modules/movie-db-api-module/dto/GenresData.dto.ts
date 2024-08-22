import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { GenreItemDto } from './GenreItem.dto';
import { ApiProperty } from "@nestjs/swagger";

export class GenresDataDto {
  @ApiProperty({
    type: [GenreItemDto],
    description: 'Array of genre items',
    example: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Comedy' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GenreItemDto)
  genres: GenreItemDto[];
}
