import { Injectable } from '@nestjs/common';

@Injectable()
export class OutgoingRequestErrorHandlerService {
  public handleError(error: any) {
    // Обработка ошибок
    console.log(error);
  }
}
