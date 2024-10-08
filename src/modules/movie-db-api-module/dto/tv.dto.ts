import {
  IsOptional,
  IsString,
  IsArray,
  IsInt,
  IsNumber,
} from 'class-validator';

export class TVDto {
  @IsOptional()
  @IsString()
  backdrop_path?: string | null;

  @IsString()
  first_air_date: string;

  @IsArray()
  @IsInt({ each: true })
  genre_ids: number[];

  @IsInt()
  id = 0;

  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  origin_country: string[];

  @IsString()
  original_language: string;

  @IsString()
  original_name: string;

  @IsString()
  overview: string;

  @IsNumber()
  popularity = 0;

  @IsOptional()
  @IsString()
  poster_path?: string | null;

  @IsNumber()
  vote_average = 0;

  @IsInt()
  vote_count = 0;
}
