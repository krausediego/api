"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInService = void 0;
const isNull_1 = __importDefault(require("lodash/isNull"));
class SignInService {
    findUser;
    hash;
    token;
    constructor(findUser, hash, token) {
        this.findUser = findUser;
        this.hash = hash;
        this.token = token;
    }
    async run(params) {
        this.validateFields(params);
        const { emailOrUsername, password } = params;
        const user = await this.findUser.findUserGeneric({
            where: {
                OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
            },
        });
        if ((0, isNull_1.default)(user)) {
            throw new Error('Nome de usuário / Email ou senha incorretos');
        }
        const passwordMatch = await this.hash.compareHash(password, user.password);
        if (!passwordMatch) {
            throw new Error('Nome de usuário / Email ou senha incorretos');
        }
        const token = this.token.generateToken(user);
        return { token };
    }
    validateFields(params) {
        if (!params.emailOrUsername) {
            throw new Error('O campo de email/username é obrigatório');
        }
        if (!params.password) {
            throw new Error('O campo de password é obrigatório');
        }
    }
}
exports.SignInService = SignInService;
