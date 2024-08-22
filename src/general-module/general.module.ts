import { Module } from '@nestjs/common';
import { GeneralController } from './general.controller';
import { MovieDbApiModule } from '../modules/movie-db-api-module/movie-db-api.module';

@Module({
  controllers: [GeneralController],
  imports: [MovieDbApiModule],
})
export class GeneralModule {}
