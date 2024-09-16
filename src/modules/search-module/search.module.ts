import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { MovieDbApiModule } from '../movie-db-api-module/movie-db-api.module';

@Module({
  controllers: [SearchController],
  imports: [MovieDbApiModule],
})
export class SearchModule {}
