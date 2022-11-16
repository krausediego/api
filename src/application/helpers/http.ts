import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
} from '@/application/errors';
import { Http } from '@/application/interfaces';

type errorTypes =
  | BadRequestError
  | NotFoundError
  | ForbiddenError
  | InternalServerError;

export const ok = (data: Record<string, any>): Http.Response => ({
  statusCode: 200,
  body: data,
});

export const created = (data: Record<string, any>): Http.Response => ({
  statusCode: 201,
  body: data,
});

export const noContent = (): Http.Response => ({
  statusCode: 204,
});

export const getHttpError = (error: errorTypes): Http.Response => ({
  statusCode: error.statusCode || 500,
  code: error?.code,
  body: error,
});
