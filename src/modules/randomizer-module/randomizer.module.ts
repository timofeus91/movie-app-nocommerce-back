import { Module } from '@nestjs/common';
import { MovieDbApiModule } from '../movie-db-api-module/movie-db-api.module';
import { RandomizerController } from './randomizer.controller';
import { RandomizerService } from './randomizer.service';

@Module({
  controllers: [RandomizerController],
  providers: [RandomizerService],
  imports: [MovieDbApiModule],
})
export class RandomizerModule {}
