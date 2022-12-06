import { NextFunction, Request, Response } from 'express';

import { Middleware } from '@/application/interfaces';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const data = {
      accessToken: req.headers?.['x-access-token'],
      ...(req.headers ?? {}),
      body: req?.body ?? {},
      query: req?.query ?? {},
    };

    const httpResponse = await middleware.handle({
      data,
      method: req.method,
      path: req.path,
      locals: req.locals,
    });
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      const validEntries = Object.entries(httpResponse?.body ?? {}).filter(
        ([, value]) => value,
      );

      req.locals = { ...req.locals, ...Object.fromEntries(validEntries) };
      next();
    } else if (httpResponse?.body instanceof Error) {
      res.status(httpResponse.statusCode).json({
        message: httpResponse?.body?.message,
        code: httpResponse?.code,
      });
    } else {
      res.status(httpResponse.statusCode).json({
        message: httpResponse?.body,
        code: httpResponse?.code,
      });
    }
  };
};
