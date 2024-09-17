import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

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
  include_adult?: boolean;

  @IsOptional()
  @IsBoolean()
  include_video?: boolean;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
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
  sort_by?: string;

  @IsOptional()
  @IsNumber()
  vote_average_gte?: number;

  @IsOptional()
  @IsNumber()
  vote_average_lte?: number;

  @IsOptional()
  @IsInt()
  vote_count_gte?: number;

  @IsOptional()
  @IsInt()
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
  @IsString()
  with_release_type?: string;

  @IsOptional()
  @IsInt()
  with_runtime_gte?: number;

  @IsOptional()
  @IsInt()
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
  @IsInt()
  year?: number;
}
