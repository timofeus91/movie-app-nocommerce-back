import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { plainToInstance } from 'class-transformer';
import { GenresDataDto } from '../dto/genres-data.dto';
import { validate } from 'class-validator';
import { CountryItemDto } from '../dto/country-item.dto';
import { CommonService } from '../../common-module/common.service';

@Injectable()
export class GeneralService {
  constructor(
    private _commonService: CommonService,
    private httpService: HttpService,
  ) {}

  async getSeriesGenresList(language: string): Promise<GenresDataDto> {
    const response = await firstValueFrom(
      this.httpService.get(`https://api.themoviedb.org/3/genre/tv/list`, {
        params: { language },
        headers: this._commonService.headersForRequest(),
      }),
    );

    return await this._commonService.transformAndValidateObj(
      GenresDataDto,
      response.data,
    );
  }

  async getMoviesGenresList(language: string): Promise<GenresDataDto> {
    const response = await firstValueFrom(
      this.httpService.get(`https://api.themoviedb.org/3/genre/movie/list`, {
        params: { language },
        headers: this._commonService.headersForRequest(),
      }),
    );

    return await this._commonService.transformAndValidateObj(
      GenresDataDto,
      response.data,
    );
  }

  async getCountriesList(language: string): Promise<CountryItemDto[]> {
    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.themoviedb.org/3/configuration/countries`,
        {
          params: { language },
          headers: this._commonService.headersForRequest(),
        },
      ),
    );

    const data: CountryItemDto[] = response.data;

    return await this._commonService.transformAndValidateArray(
      CountryItemDto,
      data,
    );
  }
}
