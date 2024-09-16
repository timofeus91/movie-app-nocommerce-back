import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ValidationError } from 'class-validator';

@Injectable()
export class CommonService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  headersForRequest() {
    const token = this.configService.get<string>('API_READ_ACCESS_TOKEN');
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return headers;
  }

  formatValidationErrors(errors: ValidationError[]): string {
    return errors
      .map((error) => {
        return Object.values(error.constraints).join(', ');
      })
      .join('; ');
  }
}
