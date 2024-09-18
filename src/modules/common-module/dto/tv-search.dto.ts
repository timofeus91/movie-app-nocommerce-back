import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  Matches,
} from 'class-validator';

export class TVSearchDto {
  @IsOptional()
  @IsDateString()
  air_date_gte?: string;

  @IsOptional()
  @IsDateString()
  air_date_lte?: string;

  @IsOptional()
  @IsInt()
  first_air_date_year?: number;

  @IsOptional()
  @IsDateString()
  first_air_date_gte?: string;

  @IsOptional()
  @IsDateString()
  first_air_date_lte?: string;

  @IsOptional()
  @IsBoolean()
  include_adult?: boolean = false;

  @IsOptional()
  @IsBoolean()
  include_null_first_air_dates?: boolean = false;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsInt()
  page?: number = 1;

  @IsOptional()
  @IsBoolean()
  screened_theatrically?: boolean;

  @IsOptional()
  @IsString()
  sort_by?: string;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsNumber()
  vote_average_gte?: number;

  @IsOptional()
  @IsNumber()
  vote_average_lte?: number;

  @IsOptional()
  @IsNumber()
  vote_count_gte?: number;

  @IsOptional()
  @IsNumber()
  vote_count_lte?: number;

  @IsOptional()
  @IsString()
  watch_region?: string;

  @IsOptional()
  @IsString()
  with_companies?: string;

  @IsOptional()
  @IsString()
  with_genres?: string;

  @IsOptional()
  @IsString()
  with_keywords?: string;

  @IsOptional()
  @IsInt()
  with_networks?: number;

  @IsOptional()
  @IsString()
  with_origin_country?: string;

  @IsOptional()
  @IsString()
  with_original_language?: string;

  @IsOptional()
  @IsInt()
  with_runtime_gte?: number;

  @IsOptional()
  @IsInt()
  with_runtime_lte?: number;

  @IsOptional()
  @IsString()
  @Matches(/^(0|1|2|3|4|5)$/, {
    message: 'with_status must be one of [0, 1, 2, 3, 4, 5]',
  })
  with_status?: string;

  @IsOptional()
  @IsString()
  @Matches(/^(flatrate|free|ads|rent|buy)(,|$)/, {
    message:
      'with_watch_monetization_types must be one of [flatrate, free, ads, rent, buy] and can be comma or pipe separated',
  })
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
  @IsString()
  @Matches(/^(0|1|2|3|4|5|6)$/, {
    message: 'with_type must be one of [0, 1, 2, 3, 4, 5, 6]',
  })
  with_type?: string;
}
