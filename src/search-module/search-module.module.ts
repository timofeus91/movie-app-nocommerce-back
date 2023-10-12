import { Module } from '@nestjs/common';
import { SearchModuleController } from './search-module.controller';

@Module({
  controllers: [SearchModuleController],
})
export class SearchModuleModule {}
