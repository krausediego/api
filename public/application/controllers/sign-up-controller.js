"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const helpers_1 = require("../../application/helpers");
class SignUpController {
    signUpService;
    constructor(signUpService) {
        this.signUpService = signUpService;
    }
    async handle({ data, }) {
        try {
            const message = await this.signUpService().run(data);
            return (0, helpers_1.ok)({ ...message });
        }
        catch (error) {
            return (0, helpers_1.getHttpError)(error);
        }
    }
}
exports.SignUpController = SignUpController;
