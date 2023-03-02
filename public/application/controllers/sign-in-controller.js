"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInController = void 0;
const helpers_1 = require("../../application/helpers");
class SignInController {
    signInService;
    constructor(signInService) {
        this.signInService = signInService;
    }
    async handle({ data, }) {
        try {
            const message = await this.signInService().run(data);
            return (0, helpers_1.ok)({ ...message });
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.SignInController = SignInController;
