import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { GenresDataDto } from '../dto/GenresData.dto';
import { validate, ValidationError } from 'class-validator';
import { CountryItemDto } from '../dto/CountryItem.dto';

@Injectable()
export class MovieDbApiService {
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

  private formatValidationErrors(errors: ValidationError[]): string {
    return errors
      .map((error) => {
        return Object.values(error.constraints).join(', ');
      })
      .join('; ');
  }

  async getSeriesGenresList(language: string): Promise<GenresDataDto> {
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
      const errorMessages = this.formatValidationErrors(errors);
      throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }
    return seriesGenresData;
  }

  async getMoviesGenresList(language: string): Promise<GenresDataDto> {
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
      const errorMessages = this.formatValidationErrors(errors);
      throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }
    return moviesGenresData;
  }

  async getCountriesList(language: string): Promise<CountryItemDto[]> {
    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.themoviedb.org/3/configuration/countries?language=${language}`,
        {
          headers: this.headersForRequest(),
        },
      ),
    );

    const data: CountryItemDto[] = response.data;
    const countriesList = plainToInstance(CountryItemDto, data);

    const allErrors = [];
    for (const country of countriesList) {
      const countryErrors = await validate(country);
      if (countryErrors.length > 0) {
        allErrors.push(...countryErrors);
      }
    }

    if (allErrors.length > 0) {
      const errorMessages = this.formatValidationErrors(allErrors);
      throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }

    return countriesList;
  }
}