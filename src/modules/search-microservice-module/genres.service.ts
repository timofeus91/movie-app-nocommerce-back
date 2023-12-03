import { Injectable } from '@nestjs/common';
import { OutgoingRequestErrorHandlerService } from '../../common/services/outgoing-request-error-handler.service';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class GenresService {
  constructor(
    private errorHandlers: OutgoingRequestErrorHandlerService,
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
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://api.themoviedb.org/3/genre/tv/list', {
          headers: this.headersForRequest(),
        }),
      );

      console.log(response.data);
    } catch (err) {
      this.errorHandlers.handleError(err);
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleCron() {
    console.log('пошло');
    await this.getSeriesGenres();
  }

  async getMoviesGenres() {}
}
