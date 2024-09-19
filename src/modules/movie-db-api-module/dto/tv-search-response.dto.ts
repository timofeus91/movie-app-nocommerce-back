import { IsInt, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { TVDto } from './tv.dto';

export class TVSearchResponseDto {
  @IsInt()
  @Min(0)
  page = 0;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TVDto)
  results: TVDto[];

  @IsInt()
  @Min(0)
  total_pages = 0;

  @IsInt()
  @Min(0)
  total_results = 0;
}
