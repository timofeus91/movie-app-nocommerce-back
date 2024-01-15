import { Injectable } from '@nestjs/common';
import { GenresService } from './genres.service';

@Injectable()
export class GenresCashService {
  private cache: any = null;
  private cacheExpiry: Date = null;

  constructor(private genresService: GenresService) {}

  async getSeriesGenresWithCache() {
    const now = new Date();
    // Проверяем, не истек ли срок кэша
    if (this.cache && this.cacheExpiry && this.cacheExpiry > now) {
      // Кэш существует и он действителен
      return this.cache;
    }

    // Кэша нет или он устарел, получаем новые данные

    const seriesGenresFromApi = await this.genresService.getSeriesGenres();
    // Устанавливаем данные и время истечения кэша
    this.cache = seriesGenresFromApi;
    // Срок действия кэша - 20 часов
    this.cacheExpiry = new Date(now.getTime() + 20 * 60 * 60 * 1000);
    return this.cache;
  }
}
