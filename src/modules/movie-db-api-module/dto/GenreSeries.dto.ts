import { IsNumber, IsString } from 'class-validator';

export class GenreSeriesDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
