import {
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SearchCriteriaDto {
  @IsString()
  name: string;
}
