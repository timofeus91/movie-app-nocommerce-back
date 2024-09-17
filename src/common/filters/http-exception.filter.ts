import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response as ExpressResponse } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<ExpressResponse>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message: string | string[] = 'An unexpected error occurred';

    if (exception instanceof HttpException) {
      const responseError = exception.getResponse();

      if (
        responseError &&
        typeof responseError === 'object' &&
        'message' in responseError
      ) {
        message = (responseError as any).message;
      } else if (typeof responseError === 'string') {
        message = responseError;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    if (Array.isArray(message)) {
      message = message.join('; ');
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  }
}
