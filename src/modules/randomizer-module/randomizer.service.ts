import { Injectable } from '@nestjs/common';
import { MovieSearchDto } from '../common-module/dto/movie-search.dto';
import { MoviesSearchResponseDto } from '../movie-db-api-module/dto/movies-search-response.dto';
import { MovieService } from '../movie-db-api-module/services/movie.service';
import { MovieDto } from '../movie-db-api-module/dto/movie.dto';
import { Random, MersenneTwister19937 } from 'random-js';

@Injectable()
export class RandomizerService {
  private random: Random;

  constructor(private _movieService: MovieService) {
    this.random = new Random(MersenneTwister19937.autoSeed());
  }

  private getRandomPage(min: number, max: number): number {
    return this.random.integer(min, max); // Используем random-js для диапазона страниц
  }

  private getRandomMoviesFromResponse(
    response: MoviesSearchResponseDto,
  ): MovieDto[] {
    const movies = response.results;
    const randomMovies: MovieDto[] = [];

    while (randomMovies.length < 3 && movies.length > 0) {
      const randomIndex = this.random.integer(0, movies.length - 1);
      randomMovies.push(movies[randomIndex]);
      movies.splice(randomIndex, 1);
    }

    return randomMovies;
  }

  async getRandomMovies(params: MovieSearchDto): Promise<MovieDto[]> {
    const movies: MovieDto[] = [];

    const firstParams = { ...params, page: 1 };
    const firstResponse = await this._movieService.getMovieList(firstParams);
    movies.push(...this.getRandomMoviesFromResponse(firstResponse));

    const totalPages = firstResponse.total_pages;

    const randomPages = Array.from({ length: 9 }, () =>
      this.getRandomPage(2, totalPages),
    );

    const nextRequests = randomPages.map((randomPage) => {
      const nextParams = { ...params, page: randomPage };
      return this._movieService.getMovieList(nextParams);
    });

    const nextResponses = await Promise.all(nextRequests);

    nextResponses.forEach((response) => {
      movies.push(...this.getRandomMoviesFromResponse(response));
    });

    return movies;
  }
}
