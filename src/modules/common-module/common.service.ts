import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { validate, ValidationError } from 'class-validator';
import { ClassConstructor, plainToInstance } from 'class-transformer';

@Injectable()
export class CommonService {
  constructor(private configService: ConfigService) {}

  headersForRequest() {
    const token = this.configService.get<string>('API_READ_ACCESS_TOKEN');
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return headers;
  }

  private formatValidationErrors(errors: ValidationError[]): string {
    const messages: string[] = [];

    errors.forEach((error) => {
      if (error.constraints) {
        messages.push(...Object.values(error.constraints));
      }
      if (error.children && error.children.length > 0) {
        const childrenMessages = this.formatValidationErrors(error.children);
        messages.push(childrenMessages);
      }
    });

    return messages.join('; ');
  }

  cleanObject<T extends Record<string, any>>(obj: T): Partial<T> {
    const result: Partial<T> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (value != null) {
          result[key] = value;
        }
      }
    }
    return result;
  }

  // Second option
  /*  cleanObject<T extends Record<string, any>>(obj: T): Partial<T> {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null),
    ) as Partial<T>;
  } */

  private async validateInstances<T extends object>(
    instances: T | T[],
  ): Promise<void> {
    const instancesArray = Array.isArray(instances) ? instances : [instances];
    const allErrors: ValidationError[] = [];

    for (const instance of instancesArray) {
      const errors = await validate(instance);
      if (errors.length > 0) {
        allErrors.push(...errors);
      }
    }

    if (allErrors.length > 0) {
      const errorMessages = this.formatValidationErrors(allErrors);
      throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }
  }

  async transformAndValidateObj<T extends object, V>(
    classType: ClassConstructor<T>,
    plainData: V,
  ): Promise<T> {
    const instance = plainToInstance(classType, plainData);
    await this.validateInstances(instance);
    return instance;
  }

  async transformAndValidateArray<T extends object, V>(
    classType: ClassConstructor<T>,
    plainDataArray: V[],
  ): Promise<T[]> {
    const instances = plainToInstance(classType, plainDataArray);
    await this.validateInstances(instances);
    return instances;
  }
}
