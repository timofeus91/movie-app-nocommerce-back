import {
  IsInt,
  IsOptional,
  IsString,

} from 'class-validator';

export class SimilarSearchDto {
  @IsInt()
  movie_id: number;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsInt()
  page?: number;
}
