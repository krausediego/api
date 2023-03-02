"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const express_middleware_1 = require("../../main/adapters/express-middleware");
const application_1 = require("../../main/factories/application");
exports.authToken = (0, express_middleware_1.adaptMiddleware)((0, application_1.makeAuthTokenMiddleware)());
