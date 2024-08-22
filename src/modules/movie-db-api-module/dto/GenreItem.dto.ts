import { IsNumber, IsString } from 'class-validator';

export class GenreItemDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
