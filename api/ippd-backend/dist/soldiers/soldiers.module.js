"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldiersModule = void 0;
const common_1 = require("@nestjs/common");
const soldiers_service_1 = require("./soldiers.service");
const soldiers_controller_1 = require("./soldiers.controller");
let SoldiersModule = class SoldiersModule {
};
exports.SoldiersModule = SoldiersModule;
exports.SoldiersModule = SoldiersModule = __decorate([
    (0, common_1.Module)({
        controllers: [soldiers_controller_1.SoldiersController],
        providers: [soldiers_service_1.SoldiersService],
    })
], SoldiersModule);
//# sourceMappingURL=soldiers.module.js.map