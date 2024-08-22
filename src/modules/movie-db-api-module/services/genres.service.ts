import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { GenresDataDto } from '../dto/GenresData.dto';
import { validate } from 'class-validator';

@Injectable()
export class GenresService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  private headersForRequest() {
    const token = this.configService.get<string>('API_READ_ACCESS_TOKEN');
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return headers;
  }

  async getSeriesGenres(language: string) {
    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.themoviedb.org/3/genre/tv/list?language=${language}`,
        {
          headers: this.headersForRequest(),
        },
      ),
    );

    const seriesGenresData = plainToInstance(GenresDataDto, response.data);
    const errors = await validate(seriesGenresData);
    if (errors.length > 0) {
      throw new Error('Validation failed!');
    }
    return seriesGenresData;
  }

  async getMoviesGenres(language: string) {
    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=${language}`,
        {
          headers: this.headersForRequest(),
        },
      ),
    );

    const moviesGenresData = plainToInstance(GenresDataDto, response.data);
    const errors = await validate(moviesGenresData);
    if (errors.length > 0) {
      throw new Error('Validation failed!');
    }
    return moviesGenresData;
  }
}
