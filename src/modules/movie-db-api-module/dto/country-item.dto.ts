import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CountryItemDto {
  @ApiProperty({
    description: 'Country Code (ISO 3166-1 Alpha-2)',
    example: 'EN',
  })
  @IsString()
  iso_3166_1: string;

  @ApiProperty({
    description: 'Country name in English',
    example: 'England',
  })
  @IsString()
  english_name: string;

  @ApiProperty({
    description: 'Country name in the language selected',
    example: 'England',
  })
  @IsString()
  name: string;
}
