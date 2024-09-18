import {
  IsOptional,
  IsString,
  IsBoolean,
  IsInt,
  IsNumber,
  IsDateString,
  IsEnum,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';

enum ReleaseType {
  TYPE_1 = 1,
  TYPE_2 = 2,
  TYPE_3 = 3,
  TYPE_4 = 4,
  TYPE_5 = 5,
  TYPE_6 = 6,
}

export class MovieSearchDto {
  @IsOptional()
  @IsString()
  certification?: string;

  @IsOptional()
  @IsString()
  certification_gte?: string;

  @IsOptional()
  @IsString()
  certification_lte?: string;

  @IsOptional()
  @IsString()
  certification_country?: string;

  @IsOptional()
  @IsBoolean()
  include_adult: boolean = false;

  @IsOptional()
  @IsBoolean()
  include_video: boolean = false;

  @IsOptional()
  @IsString()
  language: string = 'en-US';

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  primary_release_year?: number;

  @IsOptional()
  @IsDateString()
  primary_release_date_gte?: string;

  @IsOptional()
  @IsDateString()
  primary_release_date_lte?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsDateString()
  release_date_gte?: string;

  @IsOptional()
  @IsDateString()
  release_date_lte?: string;

  @IsOptional()
  @IsString()
  sort_by: string = 'popularity.desc';

  @IsOptional()
  @IsNumber()
  vote_average_gte?: number;

  @IsOptional()
  @IsNumber()
  vote_average_lte?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  vote_count_gte?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  vote_count_lte?: number;

  @IsOptional()
  @IsString()
  watch_region?: string;

  @IsOptional()
  @IsString()
  with_cast?: string;

  @IsOptional()
  @IsString()
  with_companies?: string;

  @IsOptional()
  @IsString()
  with_crew?: string;

  @IsOptional()
  @IsString()
  with_genres?: string;

  @IsOptional()
  @IsString()
  with_keywords?: string;

  @IsOptional()
  @IsString()
  with_origin_country?: string;

  @IsOptional()
  @IsString()
  with_original_language?: string;

  @IsOptional()
  @IsString()
  with_people?: string;

  @IsOptional()
  @IsEnum(ReleaseType, {
    message:
      'with_release_type must be one of the following values: 1, 2, 3, 4, 5, 6',
  })
  with_release_type?: ReleaseType;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  with_runtime_gte?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  with_runtime_lte?: number;

  @IsOptional()
  @IsString()
  with_watch_monetization_types?: string;

  @IsOptional()
  @IsString()
  with_watch_providers?: string;

  @IsOptional()
  @IsString()
  without_companies?: string;

  @IsOptional()
  @IsString()
  without_genres?: string;

  @IsOptional()
  @IsString()
  without_keywords?: string;

  @IsOptional()
  @IsString()
  without_watch_providers?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  year?: number;
}
