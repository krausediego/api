"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const data = {
            ...(req?.body ?? {}),
            ...(req?.params ?? {}),
            ...(req?.query ?? {}),
        };
        const httpResponse = await controller.handle({
            data,
            method: req.method,
            path: req.method,
            locals: req.locals,
        });
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse?.body);
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
exports.adaptRoute = adaptRoute;
