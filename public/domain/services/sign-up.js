"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpService = void 0;
class SignUpService {
    hash;
    signUp;
    constructor(hash, signUp) {
        this.hash = hash;
        this.signUp = signUp;
    }
    async run(params) {
        const { email, password, username } = params;
        if (!email) {
            throw new Error('O campo de email é obrigatório');
        }
        if (!password) {
            throw new Error('O campo de senha é obrigatório');
        }
        if (!username) {
            throw new Error('O campo username é obrigatório');
        }
        const passwordHashed = await this.hash.createHash(password);
        await this.signUp.createNewUser({
            email,
            username,
            password: passwordHashed,
        });
        return { message: 'Usuario criado com sucesso' };
    }
}
exports.SignUpService = SignUpService;
