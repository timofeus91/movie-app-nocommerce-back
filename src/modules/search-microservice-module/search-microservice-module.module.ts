import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { OutgoingRequestErrorHandlerService } from '../../common/services/outgoing-request-error-handler.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GenresService, OutgoingRequestErrorHandlerService],
  exports: [GenresService],
})
export class SearchMicroserviceModuleModule {}
