import { Inject, Injectable } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { GenresDataDto } from '../dto/GenresData.dto';

@Injectable()
export class GenresCashService {
  constructor(
    private genresService: GenresService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getSeriesGenresWithCache(language: string) {
    const cacheKey = `series-genres-${language}`;

    const cachedSeriesGenres = await this.cacheManager.get<GenresDataDto>(
      cacheKey,
    );
    if (cachedSeriesGenres) {
      return cachedSeriesGenres;
    }

    const seriesGenresFromApi = await this.genresService.getSeriesGenres(
      language,
    );

    await this.cacheManager.set(cacheKey, seriesGenresFromApi);

    return seriesGenresFromApi;
  }

  async getMoviesGenresWithCache(language: string) {
    const cacheKey = `movies-genres-${language}`;

    const cachedMoviesGenres = await this.cacheManager.get<GenresDataDto>(
      cacheKey,
    );
    if (cachedMoviesGenres) {
      return cachedMoviesGenres;
    }

    const moviesGenresFromApi = await this.genresService.getMoviesGenres(
      language,
    );

    await this.cacheManager.set(cacheKey, moviesGenresFromApi);

    return moviesGenresFromApi;
  }
}
