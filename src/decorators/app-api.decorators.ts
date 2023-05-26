import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponseOptions,
} from '@nestjs/swagger';
import { BadRequestDto } from 'src/common/dto/bad-request.dto';
import { InternalServerErrorDto } from 'src/common/dto/internal-server-error.dto';
import { NotFoundDto } from 'src/common/dto/not-found.dto';
import { bindApiDecorator } from './util/bind-api-decorator.util';

const AppApiBadRequestResponse = bindApiDecorator(ApiBadRequestResponse, {
  type: BadRequestDto,
});

const AppApiInternalServerErrorResponse = bindApiDecorator(
  ApiInternalServerErrorResponse,
  { type: InternalServerErrorDto },
);

const AppApiNotFoundResponse = bindApiDecorator(ApiNotFoundResponse, {
  type: NotFoundDto,
});

export function AppApiOkResponse(options: ApiResponseOptions) {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    AppApiNotFoundResponse(),
    ApiOkResponse(options),
  );
}

export function AppApiPaginatedResponse(options: ApiResponseOptions) {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    ApiOkResponse(options),
  );
}

export function GetReportResponse(options: ApiResponseOptions) {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    ApiOkResponse(options),
  );
}

export function AppApiCreatedResponse(options: ApiResponseOptions) {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    AppApiNotFoundResponse(),
    ApiCreatedResponse(options),
  );
}

export function AppApiNoContentResponse() {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    AppApiNotFoundResponse(),
    ApiNoContentResponse(),
  );
}
