"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateAddressRepository = void 0;
const update_address_1 = require("../../../../infra/prisma/repositories/update-address");
const makeUpdateAddressRepository = () => {
    return new update_address_1.UpdateAddressRepository();
};
exports.makeUpdateAddressRepository = makeUpdateAddressRepository;
