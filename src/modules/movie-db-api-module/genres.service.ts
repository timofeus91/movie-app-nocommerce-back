import { Injectable } from '@nestjs/common';
import { OutgoingRequestErrorHandlerService } from '../../common/services/outgoing-request-error-handler.service';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { plainToClass, plainToInstance } from 'class-transformer';
import { GenresSeriesDataDto } from './dto/GenresSeriesData.dto';
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

  async getSeriesGenres() {
    const response = await firstValueFrom(
      this.httpService.get('https://api.themoviedb.org/3/genre/tv/list', {
        headers: this.headersForRequest(),
      }),
    );
    console.log(response);
    console.log(response.data);

    const genresData = plainToInstance(GenresSeriesDataDto, response.data);
    const errors = await validate(genresData);
    if (errors.length > 0) {
      throw new Error('Validation failed!');
    }
    console.log(genresData);
    return genresData;
  }


  async getMoviesGenres() {}
}
