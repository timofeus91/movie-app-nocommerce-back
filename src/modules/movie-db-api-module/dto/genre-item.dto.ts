import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GenreItemDto {
  @ApiProperty({
    description: 'ID of the genre item',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Name of the genre item',
    example: 'Action',
  })
  @IsString()
  name: string;
}
