import { Inject, Injectable } from '@nestjs/common';
import { MovieDbApiService } from './movie-db-api.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { GenresDataDto } from '../dto/GenresData.dto';
import { CountryItemDto } from '../dto/CountryItem.dto';

@Injectable()
export class MovieDbApiCashService {
  constructor(
    private movieDBApi: MovieDbApiService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getSeriesGenresFromCache(language: string) {
    const cacheKey = `series-genres-${language}`;

    const cachedSeriesGenres = await this.cacheManager.get<GenresDataDto>(
      cacheKey,
    );
    if (cachedSeriesGenres) {
      return cachedSeriesGenres;
    }

    const seriesGenresFromApi = await this.movieDBApi.getSeriesGenresList(
      language,
    );

    await this.cacheManager.set(cacheKey, seriesGenresFromApi);

    return seriesGenresFromApi;
  }

  async getMoviesGenresFromCache(language: string) {
    const cacheKey = `movies-genres-${language}`;

    const cachedMoviesGenres = await this.cacheManager.get<GenresDataDto>(
      cacheKey,
    );
    if (cachedMoviesGenres) {
      return cachedMoviesGenres;
    }

    const moviesGenresFromApi = await this.movieDBApi.getMoviesGenresList(
      language,
    );

    await this.cacheManager.set(cacheKey, moviesGenresFromApi);

    return moviesGenresFromApi;
  }

  async getCountriesListFromCache(language: string) {
    const cacheKey = `countries-${language}`;

    const cachedCountriesList = await this.cacheManager.get<CountryItemDto[]>(
      cacheKey,
    );
    if (cachedCountriesList) {
      return cachedCountriesList;
    }

    const countriesListFromApi = await this.movieDBApi.getCountriesList(
      language,
    );

    await this.cacheManager.set(cacheKey, countriesListFromApi);

    return countriesListFromApi;
  }
}
