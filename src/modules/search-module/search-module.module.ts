import { Module } from '@nestjs/common';
import { SearchModuleController } from './search-module.controller';
import { MovieDbApiModule } from '../movie-db-api-module/movie-db-api.module';

@Module({
  controllers: [SearchModuleController],
  imports: [MovieDbApiModule],
})
export class SearchModuleModule {}
