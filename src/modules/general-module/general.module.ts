import { Module } from '@nestjs/common';
import { GeneralController } from './general.controller';
import { MovieDbApiModule } from '../movie-db-api-module/movie-db-api.module';
import { GeneralService } from './general.service';

@Module({
  controllers: [GeneralController],
  imports: [MovieDbApiModule],
  providers: [GeneralService],
})
export class GeneralModule {}
