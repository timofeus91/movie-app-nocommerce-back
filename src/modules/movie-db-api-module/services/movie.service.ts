import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GenresDataDto } from '../dto/genres-data.dto';
import { firstValueFrom } from 'rxjs';
import { CommonService } from '../../common-module/common.service';
import { MovieSearchDto } from '../../common-module/dto/movie-search.dto';
import { MoviesSearchResponseDto } from '../dto/movies-search-response.dto';
import { SimilarSearchDto } from "../../common-module/dto/similar-search.dto";

@Injectable()
export class MovieService {
  constructor(
    private httpService: HttpService,
    private _commonService: CommonService,
  ) {}

  async getMovieList(params: MovieSearchDto): Promise<MoviesSearchResponseDto> {
    const finalParams = this._commonService.cleanObject(params);
    const response = await firstValueFrom(
      this.httpService.get(`https://api.themoviedb.org/3/discover/movie`, {
        params: finalParams,
        headers: this._commonService.headersForRequest(),
      }),
    );

    const moviesObj: MoviesSearchResponseDto = response.data;

    return await this._commonService.transformAndValidateObj(
      MoviesSearchResponseDto,
      moviesObj,
    );
  }


  async getSimilarList(params: SimilarSearchDto): Promise<MoviesSearchResponseDto> {
    const finalParams = this._commonService.cleanObject(params);
    const response = await firstValueFrom(
      this.httpService.get(`https://api.themoviedb.org/3/movie/6/similar`, {
        params: finalParams,
        headers: this._commonService.headersForRequest(),
      }),
    );

    const moviesObj: MoviesSearchResponseDto = response.data;

    return await this._commonService.transformAndValidateObj(
      MoviesSearchResponseDto,
      moviesObj,
    );
  }
}
