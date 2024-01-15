import { Module } from '@nestjs/common';
import { GeneralControllerController } from './general-controller/general-controller.controller';
import { MovieDbApiModule } from '../modules/movie-db-api-module/movie-db-api.module';

@Module({
  controllers: [GeneralControllerController],
  imports: [MovieDbApiModule],
})
export class GeneralModuleModule {}
