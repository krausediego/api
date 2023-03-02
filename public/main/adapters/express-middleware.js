"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptMiddleware = void 0;
const adaptMiddleware = (middleware) => {
    return async (req, res, next) => {
        const data = {
            accessToken: req.headers.authorization,
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
            const validEntries = Object.entries(httpResponse?.body ?? {}).filter(([, value]) => value);
            req.locals = { ...req.locals, ...Object.fromEntries(validEntries) };
            next();
        }
        else if (httpResponse?.body instanceof Error) {
            res.status(httpResponse.statusCode).json({
                message: httpResponse?.body?.message,
                code: httpResponse?.code,
            });
        }
        else {
            res.status(httpResponse.statusCode).json({
                message: httpResponse?.body,
                code: httpResponse?.code,
            });
        }
    };
};
exports.adaptMiddleware = adaptMiddleware;
